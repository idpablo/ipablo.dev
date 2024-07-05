import styled, { keyframes } from 'styled-components';
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
    background: 'FCFCFF',
    text: 'black',
    links: '#000000',
    botton: 'ECECF0',
    primary: '17171A',
    primaryHover: 'FCFCFF',
    textHover: '#ffffff',
    backgroundBlackHole: 'FCFCFF',
  },
  config: {
    opacityprimary: '0.4',
    opacitysecund: '0',
    box_shadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export const darkTheme = {
  colors: {
    background: '#17171A',
    text: '#ffffff',
    links: '#ffffff',
    botton: '#3a3a52',
    primary: '#ECECF0',
    primaryHover: '##ECECF0',
    textHover: '#000000',
    backgroundBlackHole: '#010102',
  },
  config: {
    opacity: '10',
    box_shadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

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
  margin: 5px 5px 5px yellow;
  
  @media (max-width: 768px) {
    height: 200vh;
  }
`;

export const LinkStyled = styled.a`
  color: ${({ theme }) => theme.colors.text};
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
  // align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.text || '#000'};
  z-index: 200;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex: 0 1 auto;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  height: 3rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  z-index: 100;

  @media (max-width: 768px) {
    width: 100%;
    height: 5%;
  }
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

export const ContactStyled = styled.div`
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex; 
  flex: 1;
  gap: 1rem;
  justify-content: center;
  width: 98%;
  height: 100%;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0.1, 0.5, 0.5, 0.5);
  opacity: ${({ theme }) => theme.config.opacity}; 
  background-color: ${({ theme }) => theme.colors.background};
  transform-origin: center;
  z-index: 199;
  }

`;

export const AboutStyled = styled.div`
  overflow: hidden;
  position: relative;
  // justify-content: center;
  width: 98%;
  height: 80%;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  opacity: ${({ theme }) => theme.config.opacity};
  box-shadow: 0 4px 8px rgba(0.1, 0.5, 0.5, 0.5);
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  transform-origin: center;
  z-index: 199;
`;

export const EndCreditsText = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  animation: ${scroll} 20s linear infinite;
  text-align: center;
  font-size: 1.5rem; 
  line-height: 2;
  z-index: -1;
`;
export const DashboardContainer = styled.div`
  display: flex; 
  gap: 0.2rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: 99%;
  height: 55vh;
  margin: 10px;
  border-radius: 5px;
  padding: 10px; 
  z-index: 199;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 99%;
    height: 100%;
  }

`;

export const DashboardInfo = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  opacity: ${({ theme }) => theme.config.opacity}; 
  width: 100%;
  height: 100%;
  text-align: left;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};  
  box-shadow: 0 4px 8px rgba(0.2, 0.2, 0.2, 0.2);
  padding: 0px 30px 0px;
  z-index: 200;

  h2{
    font-size: 2.5rem;
    z-index: 201;
  }
  
  p{
    font-size: 1.5rem;
    line-height: 1.5;
    z-index: 201;
  }

  @media (max-width: 768px) {
    h2{
      font-size: 1rem;
      z-index: 201;
    }
    p{
      font-size: 0.8rem;
    }
    width: 80%;
    height: 50%;
  }
`;

export const DashboardProjects = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  width: 35%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  border-radius: 8px; 
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.2);
  z-index: 200;

  @media (max-width: 768px) {
    width: 100%;
    height: 70%;
  }

`;

export const DashboardCard  = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  gap: 0.2rem;
  text-align: left;
  width: 70%;
  height: 100%;
  overflow: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-sizing: border-box;

  h4{
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
  }
  
  p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
  }

  ::-webkit-scrollbar {
    width: 200px; 
  }

  @media (max-width: 768px) {
    gap: 0.1rem;
    h4{
      font-size: 0.8rem;
      z-index: 201;
    }
    p{
      font-size: 0.6rem;
    }
    width: 100%;
    height: 60%;
  }

  // ::-webkit-scrollbar-track {
  //   background: #f1f1f1;
  // }

  // ::-webkit-scrollbar-thumb {
  //   background: #888;
  //   border-radius: 4px;
  // }

  // ::-webkit-scrollbar-thumb:hover {
  //   background: #555;
  // }

`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  botton: 0px;
  margin: 5px;
  width: 99%;
  height: 15%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  
  p{
    color: ${({ theme }) => theme.colors.text}
  }

  @media (max-width: 768px) {
    botton: 0px;
    width: 99%;
    height: 10%;
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

export const BlackHoleStyled = styled.div`
    background: ${({ theme }) => theme.colors.background};
    display: grid;
    // opacity: ${({ theme }) => theme.config.opacity}; 
    place-content: center;
    position: fixed;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110vh;
    filter: blur(8px);
    // border: 10px;
    z-index: -1;

    
    b, b:before, b:after {
        display: block;
        border-radius: 50%;
    }
    b{
        width: 50vmin;
        height: 51vmin;
        box-shadow: 1vmin 0 3vmin 2vmin ${({ theme }) => theme.colors.background},
            inset -1vmin 0 3vmin 4vmin ${({ theme }) => theme.colors.background},
                    -4vmin 0 35vmin 0 ${({ theme }) => theme.colors.background};
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
        box-shadow: ${({ theme }) => theme.colors.background} 0 0 2vmin 2vmin,
                    ${({ theme }) => theme.colors.background} 2vmin 4vmin 2vmin 0.5vmin;
    }
    b:after {
        width: 38vmin;
        height: 38vmin;
        opacity: 0.03;
        left: -14vmin;
    }
`;