import Footer from '../Footer/Footer';
import Avatar from '../Avatar/Avatar'; 
import Header from '../Header/Header';
import React, { ReactNode } from 'react';
import BlackHole from '../Blackhole/Blackhole';
import userAvatar from '../../theme/assets/ipablo.dev.webp';
import { HomeStyled, AboutStyled, EndCreditsText } from '../../theme/Theme';

export interface AppProps {
  rightContent?: ReactNode;
}

export const About: React.FC<AppProps> = ({ rightContent }) => {
  return (
    <HomeStyled>
      <BlackHole />
      <Header />
      <AboutStyled>
        <Avatar src={userAvatar} alt="User Avatar" size="100px" />
      <EndCreditsText>
        <p>Esse "Portifolio"</p>
        <p>foi construindo para testar o famoso "React"</p>
        <p>O negocio é bom mesmo rapaz,</p>
        <p>mas pra quem ta acostumando com tela preta</p>
        <p></p>
        <p>...</p>
        <p>Obrigado por acessar!</p>
      </EndCreditsText>
      </AboutStyled>
      <Footer />
    </HomeStyled>
  );
};

export default About;