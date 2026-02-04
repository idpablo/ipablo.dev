const CACHE_VERSION = 'v1';
const CACHE_NAME = `ipablo-${CACHE_VERSION}`;
const RUNTIME_CACHE = `ipablo-runtime-${CACHE_VERSION}`;

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/404.html',
];

const CACHE_STRATEGIES = {
  immutable: {
    version: CACHE_NAME,
    maxAge: 31536000000,
    headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
  },
  static: {
    version: CACHE_NAME,
    maxAge: 604800000,
    headers: { 'Cache-Control': 'public, max-age=604800' },
  },
  html: {
    version: RUNTIME_CACHE,
    maxAge: 3600000,
    headers: { 'Cache-Control': 'public, max-age=3600, must-revalidate' },
  },
  network: {
    version: RUNTIME_CACHE,
    maxAge: 1800000,
    headers: { 'Cache-Control': 'public, max-age=1800' },
  },
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (name) =>
                name.startsWith('ipablo-') &&
                name !== CACHE_NAME &&
                name !== RUNTIME_CACHE
            )
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.method !== 'GET') {
    return;
  }

  let strategy = CACHE_STRATEGIES.network;

  if (
    request.url.includes('/assets/') &&
    (request.url.includes('.js') ||
      request.url.includes('.css') ||
      request.url.includes('.webp') ||
      request.url.includes('.png') ||
      request.url.includes('.jpg'))
  ) {
    strategy = CACHE_STRATEGIES.immutable;
  } else if (
    request.url.endsWith('.html') ||
    request.url === '/' ||
    request.url.endsWith('/')
  ) {
    strategy = CACHE_STRATEGIES.html;
  } else if (request.url.includes('/manifest.json')) {
    strategy = CACHE_STRATEGIES.static;
  }

  event.respondWith(handleRequest(request, strategy));
});

async function handleRequest(request, strategy) {
  const cache = await caches.open(strategy.version);
  const cachedResponse = await cache.match(request);

  if (strategy === CACHE_STRATEGIES.immutable) {
    if (cachedResponse) {
      return cachedResponse;
    }

    try {
      const response = await fetch(request);
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      return cachedResponse || createOfflineResponse();
    }
  }

  if (strategy === CACHE_STRATEGIES.html) {
    try {
      const response = await fetch(request);
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      return (
        cachedResponse ||
        cache.match('/404.html') ||
        createOfflineResponse()
      );
    }
  }

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    if (response.ok && request.method === 'GET') {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return createOfflineResponse();
  }
}

function createOfflineResponse() {
  return new Response('Offline - page not available', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: new Headers({
      'Content-Type': 'text/plain',
    }),
  });
}
