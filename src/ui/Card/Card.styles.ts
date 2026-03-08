import styled from 'styled-components';

export const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.botton} !important;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.config.box_shadow_card || theme.config.box_shadow};
  backdrop-filter: saturate(180%) blur(10px);
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  min-height: 220px;
  position: relative;
  z-index: 1;

  h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;
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
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.config.cardGlowHover};
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

