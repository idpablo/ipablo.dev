import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Router from './core/Router';
import { store } from './core/store';
import { ThemeProvider } from 'styled-components';
import { useAppSelector, ErrorBoundary } from './hooks';
import { lightTheme, darkTheme, GlobalStyles } from './core/theme';
import { LanguageProvider } from './core/i18n';
import { initializeStaticCache } from './utils/staticCache';
import { initializePageCache } from './utils/pageCache';
import { ROUTES } from './constants';

initializeStaticCache();
Object.values(ROUTES).forEach(route => {
  if (route !== ROUTES.HOME) {
    const pageName = route.replace('/', '') as 'about' | 'contact';
    if (pageName === 'about' || pageName === 'contact') {
      initializePageCache(pageName);
    }
  }
});

if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                console.log('Service Worker updated');
              }
            });
          }
        });
      });
  } else {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
  }
}

const ThemedApp: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <LanguageProvider>
          <ThemedApp />
        </LanguageProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);