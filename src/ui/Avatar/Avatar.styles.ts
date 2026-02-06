import styled from 'styled-components';

export const AvatarStyled = styled.img<{ size?: string; width?: string; height?: string }>`
  width: ${({ width, size }) => width || size || '150px'};
  height: ${({ height, size }) => height || size || '150px'};
  border-radius: 0;
  object-fit: cover;
  margin-top: 0.5rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  z-index: 5;
  align-self: flex-start;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 992px) {
    width: 120px;
    height: 120px;
    margin-top: 1.5rem;
  }
`;

