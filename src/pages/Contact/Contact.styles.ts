import styled, { keyframes } from 'styled-components';
import { 
  fadeInUp, 
  pulse, 
  float, 
  ripple, 
  dotBounce,
  PageContainer as HomeStyled,
  AvatarContainer as BaseAvatarContainer,
  SeaPixel as BaseSeaPixel
} from '../../core/theme';

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const cardHover = keyframes`
  0% {
    transform: translateY(0) rotateX(0deg);
  }
  100% {
    transform: translateY(-5px) rotateX(5deg);
  }
`;

export { HomeStyled };

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 3rem 2rem;
  flex: 1;
  gap: 3rem;
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

export const HeroSection = styled.div`
  text-align: center;
  max-width: 600px;
  animation: ${fadeInUp} 0.8s ease-out;
  position: relative;
  overflow: visible;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 1.5rem 0 1rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 0.9rem;
    font-family: 'Courier New', monospace;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    line-height: 1.6;
    min-height: 1.4em;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }

    .terminal-cursor {
      display: inline-block;
      width: 0.55em;
      height: 1em;
      background: ${({ theme }) => theme.colors.primary};
      animation: ${blink} 1s steps(1) infinite;
      border-radius: 2px;
    }
  }
`;



export const AvatarContainer = styled(BaseAvatarContainer)`
  .fisherman-avatar {
    bottom: -30px;
  }
`;

export const SeaPixel = styled(BaseSeaPixel)`
  bottom: var(--sea-bottom, -30px);

  @media (max-width: 768px) {
    bottom: var(--sea-bottom, -15px); 
  }
`;

export const TerminalWindow = styled.div`
  width: 100%;
  max-width: 800px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.config.box_shadow_card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeInUp} 1s ease-out 0.2s backwards;
`;

export const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
    font-family: 'Courier New', monospace;
  }
`;

export const TerminalBody = styled.div`
  padding: 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  min-height: 200px;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.primary};
  max-height: 280px;
  overflow-y: auto;
  position: relative;

  &::before {
    content: '';
    position: sticky;
    top: 0;
    display: block;
    height: 24px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.card} 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`;

export const TerminalLine = styled.div`
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

export const TerminalRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-wrap: nowrap;
  width: 100%;
`;

export const TerminalPrompt = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-right: 0.5rem;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const TerminalInput = styled.input`
  flex: 1;
  min-width: 180px;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  padding: 0.2rem 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.4;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export const QuickStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  animation: ${fadeInUp} 1s ease-out 0.4s backwards;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.config.box_shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(108, 76, 240, 0.3);
  }

  .value {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  .label {
    display: block;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .value {
      font-size: 1.5rem;
    }

    .label {
      font-size: 0.8rem;
    }
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  animation: ${fadeInUp} 1s ease-out 0.6s backwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

interface ContactCardProps {
  color: string;
}

export const ContactCard = styled.a<ContactCardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.config.box_shadow};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ color }) => color}00, ${({ color }) => color}, ${({ color }) => color}00);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: ${({ color }) => color};
    box-shadow: 0 12px 40px ${({ color }) => color}40;

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

interface StatusIndicatorProps {
  status: 'online' | 'active' | 'available';
}

export const StatusIndicator = styled.div<StatusIndicatorProps>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ status }) => 
    status === 'online' ? '#27c93f' :
    status === 'active' ? '#ffbd2e' :
    '#00d9ff'
  };
  box-shadow: 0 0 10px ${({ status }) => 
    status === 'online' ? '#27c93f' :
    status === 'active' ? '#ffbd2e' :
    '#00d9ff'
  };
  animation: ${pulse} 2s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: inherit;
    animation: ${ripple} 2s ease-out infinite;
  }
`;

interface IconWrapperProps {
  color: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${({ color }) => color}15;
  color: ${({ color }) => color};
  font-size: 1.1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, ${({ color }) => color}80, ${({ color }) => color}20);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ContactCard}:hover & {
    transform: scale(1.1) rotate(5deg);

    &::before {
      opacity: 1;
    }
  }
`;

export const CardContent = styled.div`
  text-align: center;
  width: 100%;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .subtitle {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
    margin-bottom: 0.6rem;
  }

  .response {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    padding: 0.5rem 0.9rem;
    background: ${({ theme }) => theme.colors.primary}15;
    border-radius: 20px;
    display: inline-block;
  }
`;

export const MessageSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
`;

export const TypingIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

interface DotProps {
  delay: number;
}

export const Dot = styled.span<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  animation: ${dotBounce} 1.4s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

export const SocialLinks = styled.div`
  text-align: center;
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.config.box_shadow};
  animation: ${fadeInUp} 1s ease-out 0.8s backwards;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 1rem;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textHover};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.primary}40;
  }

  @media (max-width: 768px) {
    padding: 0.65rem 1.2rem;
    font-size: 0.9rem;
  }
`;

