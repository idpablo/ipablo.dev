import Footer from '../Footer/Footer';
import Avatar from '../Avatar/Avatar'; 
import Header from '../Header/Header';
import React, { ReactNode } from 'react';
import BlackHole from '../Blackhole/Blackhole';
import userAvatar from '../../theme/assets/ipablo.dev.webp';
import { HomeStyled, ContactStyled, LinkStyled } from '../../theme/Theme';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export interface AppProps {
  rightContent?: ReactNode;
}


export const Contact: React.FC<AppProps> = ({ rightContent }) => {
  return (
    <HomeStyled>
      <BlackHole />
      <Header />
      <ContactStyled>
        <div><Avatar src={userAvatar} alt="User Avatar" size="100px" /></div>
        <LinkStyled href="mailto:pablo.soares.dev@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </LinkStyled>
        <LinkStyled href="https://www.instagram.com/ipablo.dev" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </LinkStyled>
        <LinkStyled href="https://github.com/idpablo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </LinkStyled>
      </ContactStyled>
      <Footer />
    </HomeStyled>
  );
};

export default Contact;