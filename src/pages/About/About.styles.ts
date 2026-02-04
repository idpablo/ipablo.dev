import styled, { keyframes } from 'styled-components';

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const blockScale = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;



const popup = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const sway = keyframes`
  0%, 100% {
    transform: rotate(-1.5deg);
  }
  50% {
    transform: rotate(1.5deg);
  }
`;

const seaSway = keyframes`
  0%, 100% {
    transform: translateX(-50%) rotate(-1.5deg);
  }
  50% {
    transform: translateX(-50%) rotate(1.5deg);
  }
`;

const wave = keyframes`
  0% {
    background-position: 0 0, 40px 0, 80px 0, 0 0, 40px 0, 80px 0;
  }
  100% {
    background-position: 40px 0, 80px 0, 120px 0, 40px 0, 80px 0, 120px 0;
  }
`;

// Main Container
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 2rem 1rem;
  gap: 4rem;
  overflow-y: auto;
  background: ${({ theme }) =>
    theme.colors.background};
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    gap: 2rem;
  }
`;

// Hero Section
export const AvatarContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  width: 120px;
  height: 110px;
  overflow: hidden;
  margin-bottom: 24px;

  .fisherman-avatar {
    animation: ${sway} 5s ease-in-out infinite;
    transform-origin: center bottom;
    position: relative;
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
  bottom: var(--sea-bottom, 25px);
  transform-origin: center top;
  width: 120px;
  height: 20px;
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
  background-position: 0 0, 40px 8px, 80px 16px, 0 24px, 40px 32px, 80px 40px, 0 48px, 40px 56px, 80px 64px, 0 72px, 40px 80px, 80px 88px;
  background-repeat: repeat-x;
  animation: ${wave} 2s linear infinite, ${seaSway} 5s ease-in-out infinite;
  opacity: 0.85;
  z-index: 1;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  @media (max-width: 768px) {
    width: 140px;
    height: 24px;
    --sea-bottom: 18px;
  }
`;



export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  animation: ${fadeInUp} 0.8s ease;
  padding: 0 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.85;
    text-align: center;
    max-width: 600px;
    line-height: 1.6;
    letter-spacing: 0.3px;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

// Minecraft Blocks Grid
export const BlocksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

export const Block = styled.div<{ bgColor: string; $isDragging?: boolean }>`
  background-color: ${(props) => props.bgColor};
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  cursor: ${(props) => (props.$isDragging ? 'grabbing' : 'grab')};
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease;
  position: relative;
  overflow: hidden;
  box-shadow: inset -2px -2px 0px rgba(0, 0, 0, 0.3), inset 2px 2px 0px rgba(255, 255, 255, 0.2);
  opacity: ${(props) => (props.$isDragging ? 0.5 : 1)};
  transform: ${(props) => (props.$isDragging ? 'scale(0.95)' : 'scale(1)')};

  &:hover {
    transform: ${(props) => (props.$isDragging ? 'scale(0.95)' : 'translateY(-8px)')};
    animation: ${blockScale} 0.3s ease;
    box-shadow: inset -2px -2px 0px rgba(0, 0, 0, 0.3), 
                inset 2px 2px 0px rgba(255, 255, 255, 0.2),
                0 12px 24px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: ${(props) => (props.$isDragging ? 'scale(0.95)' : 'translateY(-4px)')};
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  .icon {
    font-size: 2.5rem;
    display: block;
    animation: ${blockScale} 0.4s ease;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .icon {
      font-size: 2rem;
    }

    h3 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

// Story Section
export const StorySection = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.botton};
  border-radius: 12px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  animation: ${fadeInUp} 0.8s ease 0.2s backwards;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    opacity: 0.85;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

// Timeline
export const AdventureTimeline = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 3rem 1rem;
  animation: ${fadeInUp} 0.8s ease 0.4s backwards;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;

    h2 {
      font-size: 1.4rem;
    }
  }
`;

const spotlightHover = keyframes`
  0% {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0), inset 0 0 40px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.primary}, inset 0 0 40px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 60px ${({ theme }) => theme.colors.primary}, inset 0 0 40px rgba(0, 0, 0, 0.3);
  }
`;

const timelineLineAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`;

export const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    transform: translateX(-50%);
    animation: ${timelineLineAnimation} 1.5s ease;
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    gap: 3rem;
    padding: 1rem 0;

    &::before {
      left: 30px;
      width: 3px;
    }
  }
`;

export const TimelineItem = styled.div<{ $isLeft?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2rem;
  position: relative;
  animation: ${fadeInUp} 0.8s ease;
  justify-content: ${(props) => (props.$isLeft ? 'flex-start' : 'flex-end')};
  padding: 0 3rem;
  z-index: 1;

  /* Linha Neon Conectora */
  &::before {
    content: '';
    position: absolute;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    ${(props) =>
      props.$isLeft
        ? `
        left: 50%;
        width: calc(50% - 150px);
        background: linear-gradient(90deg, ${props.theme.colors.primary}, transparent);
        box-shadow: 0 0 15px ${props.theme.colors.primary}, 
                    0 0 30px ${props.theme.colors.primary}40;
      `
        : `
        right: 50%;
        width: calc(50% - 150px);
        background: linear-gradient(270deg, ${props.theme.colors.primary}, transparent);
        box-shadow: 0 0 15px ${props.theme.colors.primary}, 
                    0 0 30px ${props.theme.colors.primary}40;
      `}
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 0 0 100px;

    &::before {
      display: none;
    }
  }
`;

export const TimelineContent = styled.div`
  flex: 0 1 300px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.botton};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  /* Efeito Holofote */
  background: ${({ theme }) => {
    const isDark = theme.colors.background === '#1a1a2e' || theme.colors.background === '#0f0f1e';
    return isDark
      ? `radial-gradient(circle at 30% 30%, rgba(102, 51, 153, 0.15), ${theme.colors.botton})`
      : `radial-gradient(circle at 30% 30%, rgba(147, 112, 219, 0.1), ${theme.colors.botton})`;
  }};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.08);
    animation: ${spotlightHover} 0.8s ease infinite;
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.primary}40;

    .timeline-icon {
      transform: scale(1.3) rotateZ(360deg);
    }

    .timeline-date {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.85;
    line-height: 1.5;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    flex: 1;
    padding: 1.2rem;

    h3 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const TimelineDate = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0.5rem;
  transition: color 0.3s ease;
`;

export const TimelineIcon = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  position: relative;
  z-index: 10;
  font-size: 2rem;
  box-shadow: 0 0 30px ${({ theme }) => theme.colors.primary}60;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    border-radius: 50%;
    z-index: -1;
    opacity: 0.6;
    animation: ${keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `} 3s linear infinite;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    min-width: 60px;
    font-size: 1.5rem;
  }
`;

// Vertical timeline connector
export const TimelineConnector = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, transparent, ${({ theme }) => theme.colors.primary});
  z-index: 5;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Keep old TimelineItem for compatibility
export const OldTimelineItem = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.botton};
  border-radius: 8px;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  animation: ${fadeInUp} 0.6s ease;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -12px;
    top: 1.5rem;
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.background};
  }

  .icon {
    font-size: 1.8rem;
    min-width: 60px;
    text-align: center;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.85;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;

    .icon {
      font-size: 1.5rem;
      min-width: 50px;
    }

    h3 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

// Skills Showcase
export const SkillsShowcase = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem;
  animation: ${fadeInUp} 0.8s ease 0.6s backwards;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const Passion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.botton};
  border-radius: 12px;
  flex: 1;
  min-width: 200px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  animation: ${fadeInUp} 0.6s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .passion-icon {
    font-size: 3rem;
    animation: ${blockScale} 0.4s ease;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.85;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-width: auto;

    .passion-icon {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

// Easter Egg Modal
export const EasterEggModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  animation: ${popup} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const EasterEggContent = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: white;
  min-width: 300px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    min-width: 250px;
    padding: 1.5rem;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

// Animated Text
export const AnimatedText = styled.div`
  animation: ${fadeInUp} 0.8s ease 0.2s backwards;
`;

// Keep old styles for compatibility
export const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  width: 90%;
  max-width: 900px;
  flex: 1;
  margin: 0 auto;
  border-radius: 5px;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.config.opacityPrimary};
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  transform-origin: center;

  @media (max-width: 992px) {
    display: flex; 
    justify-content: center;
    width: 95%;
    padding: 1rem;
    z-index: 1;
  }
`;

const scroll = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const EndCreditsText = styled.div`
  width: 100%;
  height: 60%;
  animation: ${scroll} 20s linear infinite;
  text-align: center;
  font-size: 1.5rem; 
  line-height: 2;
`;

export const TreasureModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 2rem;
  min-width: 400px;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  
  @media (max-width: 768px) {
    min-width: 90vw;
    max-width: 90vw;
    padding: 1.5rem;
  }
`;
