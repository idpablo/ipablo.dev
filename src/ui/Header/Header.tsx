import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks';
import { ROUTES } from '../../constants';
import { HeaderStyled, HeaderLinks, HeaderBottonTheme } from './Header.styles';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderStyled>
      <HeaderLinks>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ABOUT}>Sobre</Link>
        <Link to={ROUTES.CONTACT}>Contatos</Link>
      </HeaderLinks>
      <HeaderBottonTheme>
        <ThemeToggle isDark={theme === 'light'} onToggle={toggleTheme} />
      </HeaderBottonTheme>
    </HeaderStyled>
  );
};

export default Header;
