import React from 'react';
import { FooterStyled, FooterLinks } from './Footer.styles';
import { SOCIAL_LINKS } from '../../constants';
import { useLanguage } from '../../core/i18n';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <FooterStyled>
      <div>
        <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        <FooterLinks>
          <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a>
        </FooterLinks>
      </div>
    </FooterStyled>
  );
};

export default Footer;
