import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Router from './core/Router';
import { store } from './core/store';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './hooks';
import { lightTheme, darkTheme, GlobalStyles } from './core/theme';

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
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>
);
