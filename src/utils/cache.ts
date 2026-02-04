interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export const cacheManager = {
  set<T>(key: string, data: T, ttlHours: number = 24): void {
    const ttlMs = ttlHours * 60 * 60 * 1000;
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttlMs,
    };
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify(entry));
    } catch (error) {
      console.log('Cache set failed', error);
    }
  },

  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(`cache_${key}`);
      if (!item) return null;

      const entry: CacheEntry<T> = JSON.parse(item);
      const now = Date.now();
      const isExpired = now - entry.timestamp > entry.ttl;

      if (isExpired) {
        localStorage.removeItem(`cache_${key}`);
        return null;
      }

      return entry.data;
    } catch (error) {
      return null;
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(`cache_${key}`);
    } catch (error) {
      console.log('Cache remove failed', error);
    }
  },

  clear(): void {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.log('Cache clear failed', error);
    }
  },

  getInfo(key: string): { expiresIn: number; isExpired: boolean } | null {
    try {
      const item = localStorage.getItem(`cache_${key}`);
      if (!item) return null;

      const entry = JSON.parse(item);
      const now = Date.now();
      const elapsed = now - entry.timestamp;
      const expiresIn = entry.ttl - elapsed;
      const isExpired = expiresIn <= 0;

      return { expiresIn: Math.max(0, expiresIn), isExpired };
    } catch (error) {
      return null;
    }
  },
};

export const useCache = <T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttlHours: number = 24,
  dependencies: any[] = []
): { data: T | null; loading: boolean; error: Error | null; refetch: () => Promise<void> } => {
  const [data, setData] = React.useState<T | null>(() => cacheManager.get<T>(key));
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const fetchAndCache = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      cacheManager.set(key, result, ttlHours);
      setData(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [key, fetchFn, ttlHours]);

  React.useEffect(() => {
    const cachedData = cacheManager.get<T>(key);
    if (cachedData) {
      setData(cachedData);
      return;
    }
    fetchAndCache();
  }, [key, ...dependencies]);

  return { data, loading, error, refetch: fetchAndCache };
};

import React from 'react';
