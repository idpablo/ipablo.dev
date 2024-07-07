import React, { createContext, useState, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem('theme' || 'light');
  const [theme, setTheme] = useState(storedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;