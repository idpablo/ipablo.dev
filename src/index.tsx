import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/Router/Router';
import { store } from './store/store';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/hooks/Hooks';
import { lightTheme, darkTheme } from './theme/Theme';

// Componente para prover o tema
const ThemedApp: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};

// Renderizando o ThemedApp
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>
);
