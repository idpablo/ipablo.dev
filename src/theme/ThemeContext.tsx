import React, { createContext, useState, ReactNode, useEffect, useMemo } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme = 'light';
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') ?? defaultTheme;
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={ contextValue }>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
