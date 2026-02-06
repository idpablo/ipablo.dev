import styled from 'styled-components';
import { sway, seaSway, wave } from './animations';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  width: 120px;
  height: 110px;
  overflow: hidden;
  margin-bottom: 0px;

  .fisherman-avatar {
    animation: ${sway} 5s ease-in-out infinite;
    transform-origin: center bottom;
    position: relative;
    bottom: -60px;
    z-index: 2;
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 125px;
  }
`;

export const SeaPixel = styled.div`
  position: absolute;
  left: 50%;
  bottom: var(--sea-bottom, -30px);
  transform-origin: center top;
  width: 120px;
  height: 40px;
  background:
    repeating-linear-gradient(
      90deg,
      #4A90E2 0px, #4A90E2 8px,
      #5BA3F5 8px, #5BA3F5 16px,
      #6BB6FF 16px, #6BB6FF 24px,
      #5BA3F5 24px, #5BA3F5 32px,
      #4A90E2 32px, #4A90E2 40px
    ),
    repeating-linear-gradient(
      90deg,
      #5BA3F5 0px, #5BA3F5 8px,
      #6BB6FF 8px, #6BB6FF 16px,
      #7AC8FF 16px, #7AC8FF 24px,
      #6BB6FF 24px, #6BB6FF 32px,
      #5BA3F5 32px, #5BA3F5 40px
    ),
    repeating-linear-gradient(
      90deg,
      #6BB6FF 0px, #6BB6FF 8px,
      #7AC8FF 8px, #7AC8FF 16px,
      #8AD5FF 16px, #8AD5FF 24px,
      #7AC8FF 24px, #7AC8FF 32px,
      #6BB6FF 32px, #6BB6FF 40px
    ),
    repeating-linear-gradient(
      90deg,
      #3A7FD2 0px, #3A7FD2 8px,
      #4A90E2 8px, #4A90E2 16px,
      #5BA3F5 16px, #5BA3F5 24px,
      #4A90E2 24px, #4A90E2 32px,
      #3A7FD2 32px, #3A7FD2 40px
    ),
    repeating-linear-gradient(
      90deg,
      #2A6FC2 0px, #2A6FC2 8px,
      #3A7FD2 8px, #3A7FD2 16px,
      #4A90E2 16px, #4A90E2 24px,
      #3A7FD2 24px, #3A7FD2 32px,
      #2A6FC2 32px, #2A6FC2 40px
    ),
    repeating-linear-gradient(
      90deg,
      #1A5FB2 0px, #1A5FB2 8px,
      #2A6FC2 8px, #2A6FC2 16px,
      #3A7FD2 16px, #3A7FD2 24px,
      #2A6FC2 24px, #2A6FC2 32px,
      #1A5FB2 32px, #1A5FB2 40px
    ),
    repeating-linear-gradient(
      90deg,
      #0F4FA2 0px, #0F4FA2 8px,
      #1A5FB2 8px, #1A5FB2 16px,
      #2A6FC2 16px, #2A6FC2 24px,
      #1A5FB2 24px, #1A5FB2 32px,
      #0F4FA2 32px, #0F4FA2 40px
    ),
    repeating-linear-gradient(
      90deg,
      #0B4696 0px, #0B4696 8px,
      #0F4FA2 8px, #0F4FA2 16px,
      #1A5FB2 16px, #1A5FB2 24px,
      #0F4FA2 24px, #0F4FA2 32px,
      #0B4696 32px, #0B4696 40px
    ),
    repeating-linear-gradient(
      90deg,
      #083A82 0px, #083A82 8px,
      #0B4696 8px, #0B4696 16px,
      #0F4FA2 16px, #0F4FA2 24px,
      #0B4696 24px, #0B4696 32px,
      #083A82 32px, #083A82 40px
    ),
    repeating-linear-gradient(
      90deg,
      #073476 0px, #073476 8px,
      #083A82 8px, #083A82 16px,
      #0B4696 16px, #0B4696 24px,
      #083A82 24px, #083A82 32px,
      #073476 32px, #073476 40px
    ),
    repeating-linear-gradient(
      90deg,
      #062B68 0px, #062B68 8px,
      #073476 8px, #073476 16px,
      #083A82 16px, #083A82 24px,
      #073476 24px, #073476 32px,
      #062B68 32px, #062B68 40px
    ),
    repeating-linear-gradient(
      90deg,
      #052257 0px, #052257 8px,
      #062B68 8px, #062B68 16px,
      #073476 16px, #073476 24px,
      #062B68 24px, #062B68 32px,
      #052257 32px, #052257 40px
    );
  background-size: 40px 8px, 40px 8px, 40px 8px, 40px 8px, 40px 8px, 40px 8px, 40px 8px, 40px 8px, 40px 8px, 40px 8px, 40px 8px, 40px 8px;
  background-position: 0 0, 0 8px, 0 16px, 0 0, 0 8px, 0 16px;
  animation: ${wave} 2s linear infinite, ${seaSway} 5s ease-in-out infinite;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    width: 140px;
    height: 24px;
    bottom: var(--sea-bottom, -15px);
  }
`;

