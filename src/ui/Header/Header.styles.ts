import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  padding: 0 2.5rem;
  background: ${({ theme }) => theme.colors.botton};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  flex-shrink: 0;

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

export const LanguageToggle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.5;
  }
`;
