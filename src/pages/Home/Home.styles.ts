import styled from 'styled-components';

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  
  @media (max-width: 1100px) {
    position: relative;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  overflow: visible;
  position: relative;
  flex: 1;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
    margin: 2rem auto;
    padding: 0 1rem;
  }
`;

export const DashboardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  padding-right: 2rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.30rem;
    line-height: 1.9;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }

  @media (max-width: 992px) {
    padding-right: 0;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
      margin-bottom: 1rem;
    }
  }
`;

export const DashboardProjects = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 80vh;
  padding-left: 2rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  position: relative;
  scroll-behavior: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  
  scrollbar-width: none;

  @media (max-width: 992px) {
    gap: 1.5rem;
    max-height: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

