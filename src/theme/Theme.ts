import styled, { keyframes } from 'styled-components';
import { FaBars } from 'react-icons/fa';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const blackhole = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(-360deg)}
`;

export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    links: '#000000',
    botton: '#2b2b80',
    primary: '#0a6cbd',
    primaryHover: '#0860a1',
    textHover: '#ffffff',
    backgroundBlackHole: '#063068',
  },
  // outras propriedades de tema
};

export const darkTheme = {
  colors: {
    background: '#000000',
    text: '#ffffff',
    links: '#ffffff',
    botton: '#3a3a52',
    primary: '#282849',
    primaryHover: '#59598f',
    textHover: '#000000',
    backgroundBlackHole: '#030a32',
  },
  // outras propriedades de tema
};

export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ThemeToggleButton = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 15px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.botton};
  padding: 5px;
  position: relative;
  transition: background 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ isDark }) => (isDark ? 'calc(100% - 25px)' : '5px')};
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.botton};
    border-radius: 50%;
    transition: left 0.3s ease;
  }

  .icon {
    position: absolute;
    z-index: 1;
    color: ${({ theme }) => theme.colors.background};
    &:first-child {
      left: 5px;
    }
    &:last-child {
      right: 5px;
    }
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
  position: absolute;
  top: 50px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 10px;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

// export const AppHeader = styled.header`
//   background-color: ${({ theme }) => theme.colors.primary};
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: ${({ theme }) => theme.colors.text};
// `;

export const AppLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;


export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const AvatarStyled = styled.img<{ size?: string }>`
  width: ${({ size }) => size || '150px'};
  height: ${({ size }) => size || '150px'};
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary || '#000'};
  z-index: 1000;
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex: 0 1 auto;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 3rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  z-index: 100;
`;

export const HeaderLinks = styled.div`
  display: flex;
  gap: 1rem; 

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const HeaderBottonTheme = styled.div`

  display: flex;
  gap: 1rem; 
  // align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    // padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const FooterStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  margin: 5px;
  height: 5rem;
  width: 100%;
  bottom: 0;
  z-index: 100;
  
  p{
    color: ${({ theme }) => theme.colors.text}
  }
`;

export const FooterLinks = styled.div`
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const DashboardContainer = styled.div`
  display: flex; 
  flex: 1;
  gap: 1rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: 98%;
  height: 5rem;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  opacity: 0.5; 
  z-index: 199;
`;

export const DashboardProjects = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 30%;
  height: 100%;
  opacity: 1; 
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 200;
`;

export const DashboardInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  text-align: left;
  opacity: 1; 
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0px 30px 0px;
  z-index: 200;

  h2{
    font-size: 2.5rem;
    z-index: 201;
  }
  
  p{
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
    z-index: 201;
  }
`;

export const DashboardCard  = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 40%;
  text-align: left;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 15px;
  opacity: 1;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  box-sizing: border-box;
  
  p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const BlackHoleStyled = styled.div`
    
    background: ${({ theme }) => theme.colors.backgroundBlackHole};
    display: grid;
    place-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(8px);
    border: 10px;
    z-index: -1;

    
    b, b:before, b:after {
        display: block;
        border-radius: 50%;
    }
    b{
        width: 50vmin;
        height: 51vmin;
        box-shadow: 1vmin 0 3vmin 2vmin ${({ theme }) => theme.colors.primary},
            inset -1vmin 0 3vmin 4vmin ${({ theme }) => theme.colors.primaryHover},
                    -4vmin 0 35vmin 0 ${({ theme }) => theme.colors.primary};
        animation: ${blackhole} 20s linear infinite;
    }
    b:before, b:after {
        content: "";
        background: white;
        position: relative;
        top: 6vmin;
    }
    b:before {
        width: 3vmin;
        height: 3vmin;
        left: 40vmin;
        box-shadow: #b8b8cb 0 0 2vmin 2vmin,
                    #b8b8cb 2vmin 4vmin 2vmin 0.5vmin;
    }
    b:after {
        width: 38vmin;
        height: 38vmin;
        opacity: 0.03;
        left: -14vmin;
    }
`;