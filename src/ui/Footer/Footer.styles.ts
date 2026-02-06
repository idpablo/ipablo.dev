import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.botton};
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  text-align: center;
  position: relative;
  z-index: 3;
  flex-shrink: 0;

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

