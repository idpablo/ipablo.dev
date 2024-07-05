import React, { createContext, useState, ReactNode } from 'react';

// Defina uma interface para as props, incluindo 'children'
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;