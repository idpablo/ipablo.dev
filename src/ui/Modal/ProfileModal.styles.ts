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

export const ProfileModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ProfileModalContainer = styled.div`
  width: 90%;
  max-width: 900px;
  max-height: 85vh;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  @media (max-width: 768px) {
    width: 95%;
    max-height: 90vh;
  }
`;

export const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.botton};
  border-bottom: 1px solid ${({ theme }) => theme.colors.botton};
  gap: 8px;
  flex-shrink: 0;
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
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.botton};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  line-height: 1;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border || theme.colors.botton};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

export const ProfileAvatarContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`;

export const LevelBadge = styled.div`
  position: absolute;
  bottom: -5px;
  right: -5px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  border: 2px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const ProfileInfo = styled.div`
  flex: 1;

  h2 {
    margin: 0 0 6px 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 28px;
    font-weight: 700;
    font-family: 'Roboto', Arial, sans-serif;
  }

  h3 {
    margin: 0 0 8px 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: normal;
    opacity: 0.8;
  }

  .class {
    display: inline-block;
    padding: 4px 12px;
    background: ${({ theme }) => theme.colors.card || theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border || theme.colors.botton};
    border-radius: 6px;
    font-size: 13px;
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }
`;

export const ProfileBio = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 15px;
  opacity: 0.85;
  font-family: 'Roboto', Arial, sans-serif;
`;

export const StatsSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Roboto', Arial, sans-serif;

    &:before {
      content: '⚔️';
      font-size: 22px;
    }
  }

  > p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
    margin-bottom: 25px;
    font-size: 14px;
    font-family: 'Roboto', Arial, sans-serif;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  gap: 24px;
`;

export const CategorySection = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Roboto', Arial, sans-serif;
    opacity: 0.9;
  }
`;

export const StatItem = styled.div`
  margin-bottom: 16px;
`;

export const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', Arial, sans-serif;
  }

  .level {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
  }
`;

export const StatBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.card || theme.colors.background};
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border || theme.colors.botton};
`;

export const StatProgress = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
`;
