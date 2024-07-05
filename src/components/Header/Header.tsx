// Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/Hooks';
import { setTheme } from '../../theme/ThemeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';
import {
  HeaderStyled,
  HeaderLinks,
  // MenuButton,
  // MenuIcon,
  HeaderBottonTheme,
  DropdownMenu,
  ThemeToggleContainer,
  ThemeToggleButton,
} from '../../theme/Theme';

const Header: React.FC = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const [showDropdown] = useState(false);

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
        {/* <MenuButton onClick={() => setShowDropdown(!showDropdown)}>
          <MenuIcon />
        </MenuButton> */}
        {showDropdown && (
          <DropdownMenu />
        )}
      </HeaderBottonTheme>
      </HeaderStyled>
  );
};

export default Header;
