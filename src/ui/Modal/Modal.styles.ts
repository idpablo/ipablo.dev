import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
  animation: ${({ isOpen }) => isOpen ? fadeIn : 'fadeOut'} 0.3s ease-in-out;
`;

export const BrowserWindow = styled.div`
  width: 90%;
  max-width: 900px;
  height: 80vh;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.botton};
  border-bottom: 1px solid ${({ theme }) => theme.colors.botton};
  gap: 8px;
`;

export const BrowserTraffic = styled.div`
  display: flex;
  gap: 8px;
`;

export const TrafficLight = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const BrowserAddressBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
  padding: 4px 12px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

export const BrowserContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.botton};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

export const ProjectModalHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }
`;

export const ProjectModalStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const StatCard = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.botton};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.botton};

  .label {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectModalActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  button {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .btn-primary {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(107, 76, 240, 0.3);
    }
  }

  .btn-secondary {
    background: ${({ theme }) => theme.colors.botton};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.botton};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;

export const ProjectFeatures = styled.div`
  margin: 2rem 0;

  .features-title {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .features-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .feature-tag {
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.botton};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

export const PreviewContainer = styled.div`
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.botton};
  background: ${({ theme }) => theme.colors.botton};

  .preview-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.botton};
    opacity: 0.7;
  }

  iframe {
    width: 100%;
    height: 400px;
    border: none;
    background: ${({ theme }) => theme.colors.background};
  }

  .preview-message {
    padding: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
    font-size: 0.9rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

