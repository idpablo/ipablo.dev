import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks';
import { useLanguage } from '../../core/i18n';
import { ROUTES } from '../../constants';
import { HeaderStyled, HeaderLinks, HeaderBottonTheme, LanguageToggle } from './Header.styles';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, currentLanguage, setLanguage } = useLanguage();

  return (
    <HeaderStyled>
      <HeaderLinks>
        <Link to={ROUTES.HOME}>{t.header.home}</Link>
        <Link to={ROUTES.ABOUT}>{t.header.about}</Link>
        <Link to={ROUTES.CONTACT}>{t.header.contact}</Link>
      </HeaderLinks>
      <HeaderBottonTheme>
        <LanguageToggle>
          <button
            onClick={() => setLanguage('pt-BR')}
            style={{
              opacity: currentLanguage === 'pt-BR' ? 1 : 0.5,
              fontWeight: currentLanguage === 'pt-BR' ? 'bold' : 'normal',
            }}
          >
            PT
          </button>
          <span>/</span>
          <button
            onClick={() => setLanguage('en-US')}
            style={{
              opacity: currentLanguage === 'en-US' ? 1 : 0.5,
              fontWeight: currentLanguage === 'en-US' ? 'bold' : 'normal',
            }}
          >
            EN
          </button>
          <span>/</span>
          <button
            onClick={() => setLanguage('zh-CN')}
            style={{
              opacity: currentLanguage === 'zh-CN' ? 1 : 0.5,
              fontWeight: currentLanguage === 'zh-CN' ? 'bold' : 'normal',
            }}
          >
            ZH
          </button>
        </LanguageToggle>
        <ThemeToggle isDark={theme === 'light'} onToggle={toggleTheme} />
      </HeaderBottonTheme>
    </HeaderStyled>
  );
};

export default Header;
