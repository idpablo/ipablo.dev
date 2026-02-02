// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/Hooks';
import { setTheme } from '../../theme/ThemeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';
import {
  HeaderStyled,
  HeaderLinks,
  HeaderBottonTheme,
  ThemeToggleContainer,
  ThemeToggleButton,
} from '../../theme/Theme';

const Header = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <HeaderStyled>
      <HeaderLinks>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contatos</Link>
      </HeaderLinks>
      <HeaderBottonTheme>
        <ThemeToggleContainer onClick={toggleTheme}>
          <ThemeToggleButton isDark={currentTheme === 'light'}>
            <FaSun className="icon" />
            <FaMoon className="icon" />
          </ThemeToggleButton>
        </ThemeToggleContainer>
      </HeaderBottonTheme>
    </HeaderStyled>
  );
};

export default Header;
