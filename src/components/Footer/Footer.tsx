import React from 'react';
import { FooterStyled, FooterLinks } from '../../theme/Theme';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div>
        <p>&copy; {new Date().getFullYear()} Aplicação React. Todos os direitos reservados.</p>
        <FooterLinks>
          <a href="https://github.com/idpablo" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/idpablo/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://instagram.com/ipablo.dev" target="_blank" rel="noopener noreferrer">Instagram</a>
        </FooterLinks>
      </div>
    </FooterStyled>
  );
};

export default Footer;
