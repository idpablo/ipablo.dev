import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useAppDispatch';
import { setTheme } from '../core/store/themeSlice';

export const useTheme = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  }, [theme, dispatch]);

  return { theme, toggleTheme, setTheme: (t: string) => dispatch(setTheme(t)) };
};
