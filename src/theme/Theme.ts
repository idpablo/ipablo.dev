import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FaBars } from 'react-icons/fa';

const blackhole = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(-360deg)}
`;

const scroll = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const lightTheme = {
  colors: {
    background: '#FBF7FF',
    text: '#1A1230',
    links: '#6C4CF0',
    botton: '#FFFFFF',
    primary: '#6C4CF0',
    primaryHover: '#5A2FE6',
    textHover: '#ffffff',
    backgroundBlackHole: '#FBF7FF',
  },
  config: {
    opacityPrimary: '0.6',
    opacitySecondary: '0',
    box_shadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
};

export const darkTheme = {
  colors: {
    background: '#0B0620',
    text: '#EDE9FF',
    links: '#9B8CFF',
    botton: '#120A2A',
    primary: '#9B8CFF',
    primaryHover: '#7D63FF',
    textHover: '#0B0620',
    backgroundBlackHole: '#0B0620',
  },
  config: {
    opacityPrimary: '0.6',
    opacitySecondary: '0',
    box_shadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
};

export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ThemeToggleButton = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 28px;
  padding: 4px;
  border-radius: 14px;
  position: relative;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  background: ${({ theme, isDark }) => isDark ? theme.colors.primary : '#E0E0E0'};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.botton};

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;
    background: #FFFFFF;
    left: ${({ isDark }) => (isDark ? 'calc(100% - 28px)' : '4px')};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .icon {
    position: absolute;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    &:first-child {
      left: 8px;
      color: ${({ isDark }) => isDark ? 'transparent' : '#FFB800'};
    }
    
    &:last-child {
      right: 8px;
      color: ${({ isDark }) => isDark ? '#58B6FF' : 'transparent'};
    }
  }

  &:hover {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(107, 76, 240, 0.2);
  }
`;

export const ThemeButton = styled.button<{ active?: boolean }>`
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : '#ddd')};
  color: ${({ active, theme }) => (active ? theme.colors.text : '#000')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover || '#bbb'};
    color: ${({ theme }) => theme.colors.textHover || '#fff'};
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const MenuIcon = styled(FaBars)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
`;

export const DropdownMenu = styled.div`
  top: 50px;
  right: 20px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
`;

//  Home

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  
  @media (max-width: 1100px) {
    position: relative;
    height: 100%;
  }
`;

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 30px;
  font-size: 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.botton};
  box-shadow: ${({ theme }) => theme.config.box_shadow };

  &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }

  @media (max-width: 1080px) and (max-height: 2340px) {
    width: 60%; 
    height: 50px; 
    font-size: 0.6rem;
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    display: flex;
    width: 30%;
    gap: 1rem;
  }
`;


export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const AvatarStyled = styled.img<{ size?: string }>`
  width: ${({ size }) => size || '150px'};
  height: ${({ size }) => size || '150px'};
  border-radius: 0;
  object-fit: cover;
  margin-top: 0.5rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  z-index: 5;
  align-self: flex-start;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 992px) {
    width: 120px;
    height: 120px;
    margin-top: 1.5rem;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  padding: 0 2.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.botton};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 992px) {
    height: 3rem;
    padding: 0 1.5rem;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  a {
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;

    a {
      font-size: 0.85rem;
    }
  }
`;

export const HeaderBottonTheme = styled.div`
  padding-left: 20px;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.botton};

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const ContactStyled = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: 1;
  gap: 3rem;
  width: 100%;
  height: 100%;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  opacity: ${({ theme }) => theme.config.opacityPrimary}; 
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 992px) {
    display: flex; 
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    height: 100%;
  }

`;

export const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  width: 98%;
  height: 80%;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.config.opacityPrimary};
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  transform-origin: center;

  @media (max-width: 992px) {
    display: flex; 
    justify-content: center;
    width: 100%;
    z-index: 1;
  }
`;

export const EndCreditsText = styled.div`
  width: 100%;
  height: 60%;
  animation: ${scroll} 20s linear infinite;
  text-align: center;
  font-size: 1.5rem; 
  line-height: 2;
`;

// Dashboard Home

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0.5rem auto;
  padding: 0 3rem;
  overflow: visible;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
    margin: 2rem auto;
    padding: 0 1rem;
  }
`;

export const DashboardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  padding-right: 2rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }

  @media (max-width: 992px) {
    padding-right: 0;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }
`;

export const DashboardProjects = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: calc(100vh - 320px);
  padding-left: 2rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  position: relative;
  scroll-behavior: auto;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }
  
  scrollbar-width: none; /* Firefox */

  @media (max-width: 992px) {
    gap: 1.5rem;
    max-height: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const DashboardCard  = styled.a`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.botton};
  box-shadow: ${({ theme }) => theme.config.box_shadow};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  min-height: 220px;
  position: relative;
  z-index: 1;

  h4 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;
    font-family: 'Roboto', Arial, sans-serif;
    line-height: 1.4;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.85;
    flex-grow: 1;
    font-family: 'Roboto', Arial, sans-serif;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.primary};
    z-index: 2;

    h4 {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: auto;

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

// Footer

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.botton};
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  text-align: center;
  position: relative;
  z-index: 3;

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0.5rem 0;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;

    p {
      font-size: 0.85rem;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  a {
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;

    a {
      font-size: 0.8rem;
    }
  }
`;

// Black Hole

export const BlackHoleStyled = styled.div`
    display: none;
`;

// NotFound

export const NoteFoundStyledBory = styled.body`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: white;
  font-family: Arial, sans-serif;

  @media (max-width: 992px) {
    display: flex;
    justify-content: start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70%;
  }
`;

export const NotFoundContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  padding-bottom: 0%;
  background-color: ${({ theme }) => theme.colors.background};

  h1{
    align-items: center;
  }
`;

export const SmarllText = styled.p`
  padding-left: 30%;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

`

export const ErrorCode = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 30rem;
  align-self: center;
  font-family: 'Ditoit';
  color: ${({ theme }) => theme.colors.text};
`;

export const SmarllTextFooter = styled.p`
  font-size: 1rem;
  padding-left: 65%;
  color: ${({ theme }) => theme.colors.text};
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`;