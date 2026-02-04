import styled from 'styled-components';

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

  h1 {
    align-items: center;
  }
`;

export const SmallText = styled.p`
  padding-left: 30%;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorCode = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 30rem;
  align-self: center;
  font-family: 'Ditoit';
  color: ${({ theme }) => theme.colors.text};
`;

export const SmallTextFooter = styled.p`
  font-size: 1rem;
  padding-left: 65%;
  color: ${({ theme }) => theme.colors.text};
`;

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
