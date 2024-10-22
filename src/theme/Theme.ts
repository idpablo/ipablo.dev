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
    primaryHover: '#000000',
    textHover: '#000000',
    backgroundBlackHole: '#010102',
  },
  config: {
    opacity: '2',
    box_shadow: '0px 8px 8px 8px rgba(0, 0, 0, 0.2)',
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
  padding: 8px;
  border-radius: 5px;
  position: relative;
  transition: background 0.3s ease;
  background: ${({ theme }) => theme.colors.botton};
  box-shadow: ${({ theme }) => theme.config.box_shadow };s

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: left 0.3s ease;
    background: ${({ theme }) => theme.colors.botton};
    left: ${({ isDark }) => (isDark ? 'calc(100% - 25px)' : '5px')};
  }

  .icon {
    position: absolute;
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
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  
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
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
  border: 2px solid ${({ theme }) => theme.colors.text || '#000'};
  z-index: 10;

  @media (max-width: 992px) {
    width: 100px;
    height: 100px;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin: 0px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 992px) {
    width: 100%;
    height: 5%;
  }
`;

export const HeaderLinks = styled.div`
  padding-left: 10px;

  a {
    font-size: 1rem;
    text-decoration: none;
    padding: 10px;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

export const HeaderBottonTheme = styled.div`
  padding-right: 20px;
  display: flex;
  gap: 1rem; 

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
  opacity: ${({ theme }) => theme.config.opacity}; 
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
  opacity: ${({ theme }) => theme.config.opacity};
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
  justify-content: space-around;
  gap: 1rem;
  width: 99%;
  height: 55vh;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    width: 99%;
    height: 100%;
  }

`;

export const DashboardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: left;
  border-radius: 8px;
  padding: 0px 30px 0px;
  color: ${({ theme }) => theme.colors.text};  
  opacity: ${({ theme }) => theme.config.opacity}; 
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.background};

  h2{
    font-size: 2.5rem;
    z-index: 201;
  }
  
  p{
    font-size: 1.5rem;
    line-height: 1.5;
    z-index: 201;
  }

  @media (max-width: 992px) {
    width: 70%;

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
  width: 35%;
  height: 100%;
  border: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px; 

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 70%;
  }

`;

export const DashboardCard  = styled.div`
  overflow: auto;
  text-align: left;
  align-items: center;
  width: 100%;
  height: 50%;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.background};

  h4{
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Roboto', Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p{
    width: 70%;
    padding-left: 30px;
    padding-bottom: 30px;
    font-size: 1.1rem;
    text-decoration: none;
    font-family: 'Roboto', Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 992px) {
    h4{
      font-size: 0.8rem;
      z-index: 201;
    }
    p{
      font-size: 0.6rem;
    }
    border-radius: 0;
    width: 100%;
    height: 60%;
    padding: 10px;
  }

`;

// Footer

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  bottom: 0px;
  margin: 5px;
  width: 99%;
  height: 15%;
  padding-bottom: 20px;
  font-size: 0.8rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 100;
  
  p{
    color: ${({ theme }) => theme.colors.text}
  }

  @media (max-width: 992px) {
    botton: 0px;
    width: 99%;
    height: 15%;
  }
`;

export const FooterLinks = styled.div`
  a {
    font-size: 0.8rem;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

// Black Hole

export const BlackHoleStyled = styled.div`
    display: grid;
    place-content: center;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110vh;
    position: fixed;
    // filter: blur(8px);
    opacity: ${({ theme }) => theme.config.opacity}; 
    background: ${({ theme }) => theme.colors.background};
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