import React, { useState } from 'react';
import { Header, Footer } from '../../ui';
import { Avatar } from '../../ui/Avatar';
import ProfileModal from '../../ui/Modal/ProfileModal';
import taNaMaoImg from '../../assets/ta_na_mao.webp';
import { HomeStyled } from './About.styles';
import { useLanguage } from '../../core/i18n';
import {
  AboutContainer,
  HeroSection,
  AvatarContainer,
  SeaPixel,
  BlocksGrid,
  Block,
  BlockContent,
  StorySection,
  AnimatedText,
  AdventureTimeline,
  TimelineWrapper,
  TimelineItem,
  TimelineContent,
  TimelineDate,
  TimelineIcon,
  SkillsShowcase,
  Passion,
  EasterEggModal,
  EasterEggContent,
  TreasureModalContent,
} from './About.styles';

interface TimelineEvent {
  date: string;
  year: number;
  icon: string;
  title: string;
  description: string;
}

interface BlockData {
  id: number;
  bgColor: string;
  icon: string;
  title: string;
  description: string;
  isSpecial?: boolean;
}

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [easterEgg, setEasterEgg] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragCount, setDragCount] = useState(0);
  const [requiredDrags] = useState(() => Math.floor(Math.random() * 10) + 15);
  const [treasureUnlocked, setTreasureUnlocked] = useState(false);
  const [showTreasureModal, setShowTreasureModal] = useState(false);

  const initialBlocks: BlockData[] = [
    {
      id: 1,
      bgColor: '#8B4513',
      icon: '🏗️',
      title: t.about.blocks.constructor.title,
      description: t.about.blocks.constructor.description,
      isSpecial: true,
    },
    {
      id: 2,
      bgColor: '#1f4788',
      icon: '💻',
      title: t.about.blocks.digital_explorer.title,
      description: t.about.blocks.digital_explorer.description,
    },
    {
      id: 3,
      bgColor: '#2d5a2d',
      icon: '⚙️',
      title: t.about.blocks.automation_maestro.title,
      description: t.about.blocks.automation_maestro.description,
    },
    {
      id: 4,
      bgColor: '#4a3728',
      icon: '📊',
      title: t.about.blocks.scalability_guardian.title,
      description: t.about.blocks.scalability_guardian.description,
    },
    {
      id: 6,
      bgColor: '#FF6B6B',
      icon: '⚽',
      title: t.about.blocks.soccer_passion.title,
      description: t.about.blocks.soccer_passion.description,
    },
    {
      id: 7,
      bgColor: '#4ECDC4',
      icon: '🎣',
      title: t.about.blocks.calm_fisherman.title,
      description: t.about.blocks.calm_fisherman.description,
    },
    {
      id: 8,
      bgColor: '#95E1D3',
      icon: '🌟',
      title: t.about.blocks.dream_creator.title,
      description: t.about.blocks.dream_creator.description,
    },
  ];

  const [blocks, setBlocks] = useState<BlockData[]>(initialBlocks);

  const timelineEvents: TimelineEvent[] = [
    {
      date: '07/11/1997',
      year: 1997,
      icon: '👶',
      title: t.about.timeline.origin.title,
      description: t.about.timeline.origin.description,
    },
    {
      date: '2021',
      year: 2021,
      icon: '🛡️',
      title: t.about.timeline.infrastructure_guardian.title,
      description: t.about.timeline.infrastructure_guardian.description,
    },
    {
      date: '2022',
      year: 2022,
      icon: '🌐',
      title: t.about.timeline.infrastructure_analyst.title,
      description: t.about.timeline.infrastructure_analyst.description,
    },
    {
      date: '2023',
      year: 2023,
      icon: '☕',
      title: t.about.timeline.java_junior.title,
      description: t.about.timeline.java_junior.description,
    },
    {
      date: '2024',
      year: 2024,
      icon: '🐳',
      title: t.about.timeline.devops_era.title,
      description: t.about.timeline.devops_era.description,
    },
    {
      date: '2025',
      year: 2025,
      icon: '⚡',
      title: t.about.timeline.eternal_learner.title,
      description: t.about.timeline.eternal_learner.description,
    },
    {
      date: '2026',
      year: 2026,
      icon: '🌟',
      title: t.about.timeline.odyssey_continues.title,
      description: t.about.timeline.odyssey_continues.description,
    },
  ];

  const handleEasterEgg = (type: string) => {
    setEasterEgg(type);
    setTimeout(() => setEasterEgg(null), 3000);
  };

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 7) {
      handleEasterEgg('secret');
      setClickCount(0);
    }
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === index) return;

    const newBlocks = [...blocks];
    const draggedBlock = newBlocks[draggedIndex];
    
    newBlocks.splice(draggedIndex, 1);
    newBlocks.splice(index, 0, draggedBlock);
    
    setBlocks(newBlocks);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    
    const newDragCount = dragCount + 1;
    setDragCount(newDragCount);
    
    if (newDragCount >= requiredDrags && !treasureUnlocked) {
      setTreasureUnlocked(true);
      handleEasterEgg('unlocked');
    }
  };

  const handleTreasureClick = () => {
    if (treasureUnlocked) {
      setShowTreasureModal(true);
    }
  };

  return (
    <>
      <HomeStyled>
        <Header />
        <AboutContainer>
          <HeroSection>
            <AvatarContainer onClick={() => setIsProfileModalOpen(true)} style={{ cursor: 'pointer' }}>
              <SeaPixel />
              <Avatar
                src={taNaMaoImg}
                alt="Pablo Bento Soares"
                width="120px"
                height="90px"
                className="fisherman-avatar"
                style={{ border: 'none', boxShadow: 'none' }}
              />
            </AvatarContainer>
            <AnimatedText>
              <h1>🎮 {t.about.timeline.title.split('🎯 ')[1]} 🗺️</h1>
              <p>{t.about.welcome}</p>
            </AnimatedText>
          </HeroSection>

          <BlocksGrid>
            {blocks.map((block, index) => (
              <Block
                key={block.id}
                bgColor={block.bgColor}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                onClick={
                  block.id === 1
                    ? handleSecretClick
                    : undefined
                }
                $isDragging={draggedIndex === index}
              >
                <BlockContent>
                  <span className="icon">{block.icon}</span>
                  <h3>{block.title}</h3>
                  <p>{block.description}</p>
                </BlockContent>
              </Block>
            ))}
            
            {treasureUnlocked && (
              <Block
                bgColor="#FFD700"
                onClick={handleTreasureClick}
                style={{ 
                  animation: 'fadeInUp 0.8s ease, glow 1s ease infinite',
                  boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset -2px -2px 0px rgba(0, 0, 0, 0.3), inset 2px 2px 0px rgba(255, 255, 255, 0.2)'
                }}
              >
                <BlockContent>
                  <span className="icon">⭐</span>
                  <h3>{t.about.treasureUnlocked.title}</h3>
                  <p>{t.about.treasureCount.replace('{count}', dragCount.toString())}</p>
                </BlockContent>
              </Block>
            )}
          </BlocksGrid>

          <StorySection>
            <h2>📖 {t.about.story.title}</h2>
            <p>{t.about.story.paragraph1}</p>
            <p>{t.about.story.paragraph2}</p>
          </StorySection>

          <AdventureTimeline>
            <h2>{t.about.timeline.title}</h2>
            <TimelineWrapper>
              {timelineEvents.map((event, index) => (
                <TimelineItem key={index} $isLeft={index % 2 === 0}>
                  <TimelineIcon className="timeline-icon">{event.icon}</TimelineIcon>
                  <TimelineContent>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <TimelineDate className="timeline-date">{event.date}</TimelineDate>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </TimelineWrapper>
          </AdventureTimeline>

          {/* Passions */}
          <SkillsShowcase>
            <h2>🎪 {t.about.skills.title}</h2>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Passion>
                <span className="passion-icon">💻</span>
                <h3>{t.about.skills.code.title}</h3>
                <p>{t.about.skills.code.description}</p>
              </Passion>
              <Passion>
                <span className="passion-icon">⚽</span>
                <h3>{t.about.skills.soccer.title}</h3>
                <p>{t.about.skills.soccer.description}</p>
              </Passion>
              <Passion>
                <span className="passion-icon">🎣</span>
                <h3>{t.about.skills.fishing.title}</h3>
                <p>{t.about.skills.fishing.description}</p>
              </Passion>
            </div>
          </SkillsShowcase>

          {easterEgg && easterEgg !== 'unlocked' && (
            <EasterEggModal>
              <EasterEggContent>
                {easterEgg === 'treasure' && (
                  <>
                    <h2>✨ {t.about.treasureUnlocked.title} ✨</h2>
                    <p>{t.about.treasureUnlocked.message}</p>
                    <p>{t.about.treasureUnlocked.blockCount.replace('{count}', dragCount.toString())}</p>
                  </>
                )}
                {easterEgg === 'secret' && (
                  <>
                    <h2>🔓 {t.about.secretUnlocked.title} 🔓</h2>
                    <p>{t.about.secretUnlocked.message}</p>
                    <p>{t.about.secretUnlocked.extraMessage}</p>
                  </>
                )}
              </EasterEggContent>
            </EasterEggModal>
          )}
          
          {/* Treasure Modal - macOS Style */}
          {showTreasureModal && (
            <EasterEggModal onClick={() => setShowTreasureModal(false)}>
              <TreasureModalContent onClick={(e) => e.stopPropagation()}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '2rem',
                }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                  </div>
                  <div style={{ 
                    flex: 1, 
                    textAlign: 'center', 
                    fontSize: '0.85rem', 
                    opacity: 0.6,
                    marginLeft: '-60px'
                  }}>
                    treasure://unlocked
                  </div>
                </div>
                
                <div style={{ 
                  textAlign: 'center',
                  padding: '2rem 0'
                }}>
                  <div style={{ 
                    fontSize: '10rem',
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                    animation: 'popup 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                    💎
                  </div>
                  <h2 style={{
                    fontSize: '1.5rem', 
                    marginBottom: '1rem',
                    fontWeight: 700 
                  }}>
                    {t.about.treasureUnlocked.title}
                  </h2>
                  <p style={{ 
                    fontSize: '1rem', 
                    opacity: 0.8,
                    lineHeight: 1.6 
                  }}>
                    {t.about.treasureUnlocked.message}
                    <br />
                    {t.about.treasureUnlocked.blockCount.replace('{count}', dragCount.toString())}
                  </p>
                </div>
                
                <button
                  onClick={() => setShowTreasureModal(false)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {t.about.treasureUnlocked.title}
                </button>
              </TreasureModalContent>
            </EasterEggModal>
          )}
        </AboutContainer>
        <Footer />
      </HomeStyled>
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </>
  );
};

export default AboutPage;
