import styled, { keyframes } from 'styled-components';
import { 
  fadeInUp, 
  blockScale,
  popup,
  PageContainer as HomeStyled,
  AvatarContainer as BaseAvatarContainer,
  SeaPixel as BaseSeaPixel
} from '../../core/theme';

export { HomeStyled };
const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const blockBreathing = keyframes`
  0%, 100% {
    transform: scale(1) skewY(0deg);
  }
  50% {
    transform: scale(1.04) skewY(0.5deg);
  }
`;

const blockGlowPulse = keyframes`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.08);
  }
`;

const treasureGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.6), inset -2px -2px 0px rgba(0, 0, 0, 0.3), inset 2px 2px 0px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 215, 0, 0.9), 0 0 70px rgba(255, 215, 0, 0.5), inset -2px -2px 0px rgba(0, 0, 0, 0.4), inset 2px 2px 0px rgba(255, 255, 255, 0.3);
  }
`;

const treasureSpinFloat = keyframes`
  0%, 100% {
    transform: rotate(0deg) translateY(0px);
  }
  25% {
    transform: rotate(5deg) translateY(-8px);
  }
  50% {
    transform: rotate(0deg) translateY(0px);
  }
  75% {
    transform: rotate(-5deg) translateY(-8px);
  }
`;

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

export const SeaPixel = BaseSeaPixel;

export const AvatarContainer = styled(BaseAvatarContainer)`

  .fisherman-avatar {
    bottom: -65px;
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
    font-size: 1.05rem;
    font-family: 'Courier New', monospace;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.85;
    text-align: center;
    max-width: 600px;
    line-height: 1.6;
    letter-spacing: 0.3px;
    min-height: 1.4em;

    .typed-text {
      display: inline;
    }

    .terminal-cursor {
      display: inline-block;
      width: 0.55em;
      height: 1em;
      background: ${({ theme }) => theme.colors.primary};
      animation: ${blink} 1s steps(1) infinite;
      border-radius: 2px;
      margin-left: 6px;
      vertical-align: middle;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const BlocksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 1.2rem;
  width: 100%;
  max-width: 960px;
  padding: 0 1rem;

  & > div:nth-child(1) {
    animation-delay: 0s, 0s;
  }
  & > div:nth-child(2) {
    animation-delay: 0.3s, 0.4s;
  }
  & > div:nth-child(3) {
    animation-delay: 0.6s, 0.8s;
  }
  & > div:nth-child(4) {
    animation-delay: 0.4s, 0.5s;
  }
  & > div:nth-child(5) {
    animation-delay: 0.7s, 0.9s;
  }
  & > div:nth-child(6) {
    animation-delay: 0.5s, 0.6s;
  }
  & > div:nth-child(7) {
    animation-delay: 0.8s, 1s;
  }
  & > div:nth-child(8) {
    animation-delay: 0.2s, 0.3s;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

export const Block = styled.div<{ bgColor: string; $isDragging?: boolean }>`
  background-color: ${(props) => props.bgColor};
  background-image: ${({ theme }) =>
    theme.colors.backgroundBlackHole === '#0B0620'
      ? `linear-gradient(155deg, rgba(10, 10, 16, 0.9), rgba(22, 20, 28, 0.92) 55%, rgba(6, 6, 10, 0.95)),
         radial-gradient(circle at 15% 10%, rgba(255, 255, 255, 0.06), transparent 55%),
         repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 7px)`
      : `linear-gradient(160deg, rgba(246, 250, 255, 0.98), rgba(210, 226, 255, 0.75) 60%),
        radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.5), transparent 55%),
        repeating-linear-gradient(45deg, rgba(122, 158, 210, 0.04) 0, rgba(122, 158, 210, 0.04) 1px, transparent 1px, transparent 10px)`};
  background-blend-mode: overlay;
  border: 1px solid
    ${({ theme }) =>
      theme.colors.backgroundBlackHole === '#0B0620'
        ? 'rgba(210, 200, 255, 0.18)'
        : 'rgba(132, 166, 220, 0.45)'};
  border-radius: 6px;
  padding: 1.2rem;
  cursor: ${(props) => (props.$isDragging ? 'grabbing' : 'grab')};
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease;
  position: relative;
  overflow: hidden;
  box-shadow:
    inset 0 0 0 1px
      ${({ theme }) =>
        theme.colors.backgroundBlackHole === '#0B0620'
          ? 'rgba(255, 255, 255, 0.12)'
          : 'rgba(255, 255, 255, 0.65)'},
    inset 0 0 28px
      ${({ theme }) =>
        theme.colors.backgroundBlackHole === '#0B0620'
          ? 'rgba(0, 0, 0, 0.55)'
          : 'rgba(150, 180, 230, 0.28)'},
    0 10px 22px rgba(0, 0, 0, 0.32);
  opacity: ${(props) => (props.$isDragging ? 0.5 : 1)};
  transform: ${(props) => (props.$isDragging ? 'scale(0.95)' : 'scale(1)')};
  animation: ${blockGlowPulse} 4s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 4px;
    border: 1px solid
      ${({ theme }) =>
        theme.colors.backgroundBlackHole === '#0B0620'
          ? 'rgba(255, 255, 255, 0.12)'
          : 'rgba(150, 185, 225, 0.35)'};
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px;
    pointer-events: none;
    background: ${({ theme }) =>
      theme.colors.backgroundBlackHole === '#0B0620'
        ? `radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08), transparent 45%),
           linear-gradient(180deg, rgba(0, 0, 0, 0.4), transparent 35%, rgba(0, 0, 0, 0.5) 100%)`
        : `radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.55), transparent 55%),
          linear-gradient(180deg, rgba(255, 255, 255, 0.25), transparent 40%, rgba(160, 190, 230, 0.18) 100%)`};
    mix-blend-mode: screen;
    opacity: ${({ theme }) => (theme.colors.backgroundBlackHole === '#0B0620' ? 0.5 : 0.7)};
  }

  &:hover {
    transform: ${(props) => (props.$isDragging ? 'scale(0.95)' : 'translateY(-8px)')};
    animation: ${blockScale} 0.3s ease forwards, ${blockGlowPulse} 2.8s ease-in-out infinite;
    box-shadow:
      inset 0 0 0 1px
        ${({ theme }) =>
          theme.colors.backgroundBlackHole === '#0B0620'
            ? 'rgba(255, 255, 255, 0.16)'
            : 'rgba(255, 255, 255, 0.65)'},
      inset 0 0 32px
        ${({ theme }) =>
          theme.colors.backgroundBlackHole === '#0B0620'
            ? 'rgba(0, 0, 0, 0.6)'
            : 'rgba(160, 190, 230, 0.3)'},
      0 14px 28px rgba(0, 0, 0, 0.35);
  }

  &:active {
    transform: ${(props) => (props.$isDragging ? 'scale(0.95)' : 'translateY(-4px)')};
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    padding: 0.9rem;
  }

  &.treasure-block {
    background-size: 150% !important;
    background-position: center !important;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(255, 215, 0, 0.5), rgba(0, 0, 0, 0.8));
      pointer-events: none;
      z-index: 1;
      animation: ${treasureGlow} 2s ease-in-out infinite;
    }

    &::before {
      display: none;
    }
  }
`;

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  font-family: 'Georgia', 'Times New Roman', serif;

  .icon {
    font-size: 2.1rem;
    display: block;
    animation: ${blockScale} 0.4s ease;
    filter: ${({ theme }) =>
      theme.colors.backgroundBlackHole === '#0B0620'
        ? 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.5))'
        : 'drop-shadow(0 2px 6px rgba(160, 190, 230, 0.45))'};
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${({ theme }) => (theme.colors.backgroundBlackHole === '#0B0620' ? '#E7E0FF' : '#2A1B44')};
    text-shadow: ${({ theme }) =>
      theme.colors.backgroundBlackHole === '#0B0620'
        ? '0 2px 4px rgba(0, 0, 0, 0.6)'
        : '0 1px 2px rgba(120, 150, 210, 0.45)'};
    margin: 0.5rem 0;
    letter-spacing: 0.1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    padding: 0 0.25rem;
  }

  p {
    font-size: 0.78rem;
    color: ${({ theme }) => (theme.colors.backgroundBlackHole === '#0B0620' ? 'rgba(226, 220, 255, 0.88)' : 'rgba(50, 38, 82, 0.82)')};
    text-shadow: ${({ theme }) =>
      theme.colors.backgroundBlackHole === '#0B0620'
        ? '0 1px 2px rgba(0, 0, 0, 0.45)'
        : '0 1px 2px rgba(160, 190, 230, 0.35)'};
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .icon {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

export const StorySection = styled.div`
  width: 100%;
  max-width: 960px;
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

export const AnimatedText = styled.div`
  animation: ${fadeInUp} 0.8s ease 0.2s backwards;
`;

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

