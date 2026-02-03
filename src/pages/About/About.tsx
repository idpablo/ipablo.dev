import React, { useState } from 'react';
import { Header, Footer } from '../../ui';
import { Avatar } from '../../ui/Avatar';
import ProfileModal from '../../ui/Modal/ProfileModal';
import taNaMaoImg from '../../assets/ta_na_mao.png';
import { HomeStyled } from './About.styles';
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
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [easterEgg, setEasterEgg] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragCount, setDragCount] = useState(0);
  const [requiredDrags] = useState(() => Math.floor(Math.random() * 10) + 15); // 15-24 manipulações
  const [treasureUnlocked, setTreasureUnlocked] = useState(false);
  const [showTreasureModal, setShowTreasureModal] = useState(false);

  const initialBlocks: BlockData[] = [
    {
      id: 1,
      bgColor: '#8B4513',
      icon: '🏗️',
      title: 'Construtor',
      description: 'Começou da infraestrutura, aprendendo a construir os alicerces que sustentam tudo',
      isSpecial: true,
    },
    {
      id: 2,
      bgColor: '#1f4788',
      icon: '💻',
      title: 'Explorador Digital',
      description: 'Java, Python, JavaScript - linguagens que abrem novos mundos de possibilidades',
    },
    {
      id: 3,
      bgColor: '#2d5a2d',
      icon: '⚙️',
      title: 'Maestro da Automação',
      description: 'Scripts que automatizam tarefas e liberam tempo para novas aventuras',
    },
    {
      id: 4,
      bgColor: '#4a3728',
      icon: '📊',
      title: 'Guardião da Escalabilidade',
      description: 'Kubernetes, Docker - ferramentas para expandir impérios digitais',
    },
    {
      id: 6,
      bgColor: '#FF6B6B',
      icon: '⚽',
      title: 'Paixão pelo Futebol',
      description: 'Quando não está codando, está no campo buscando o gol perfeito',
    },
    {
      id: 7,
      bgColor: '#4ECDC4',
      icon: '🎣',
      title: 'Pescador Tranquilo',
      description: 'Paciência, precisão e timing - os mesmos atributos do bom desenvolvedor',
    },
    {
      id: 8,
      bgColor: '#95E1D3',
      icon: '🌟',
      title: 'Criador de Sonhos',
      description: 'Bots, customizações Android e desafios pessoais - sempre criando algo novo',
    },
  ];

  const [blocks, setBlocks] = useState<BlockData[]>(initialBlocks);

  const timelineEvents: TimelineEvent[] = [
    {
      date: '07/11/1997',
      year: 1997,
      icon: '👶',
      title: 'Origem da Jornada',
      description: 'O aventureiro nasce e inicia sua odisseia no mundo terrestre.',
    },
    {
      date: '2015',
      year: 2015,
      icon: '🎓',
      title: 'Primeiros Passos na Tech',
      description: 'Aos 18 anos, começou a explorar o mundo da tecnologia e programação.',
    },
    {
      date: '2017',
      year: 2017,
      icon: '🛡️',
      title: 'Guardião da Infraestrutura',
      description: 'Dominou Linux, Windows e estruturas de monitoramento. Aprendeu os alicerces da tecnologia.',
    },
    {
      date: '2018',
      year: 2018,
      icon: '🐍',
      title: 'Mago dos Scripts',
      description: 'Criou automações em Python e Shell. Começou a economizar horas de trabalho manual.',
    },
    {
      date: '2019',
      year: 2019,
      icon: '☕',
      title: 'Guerreiro Java',
      description: 'Dominou Java e construiu sistemas robustos e escaláveis. Força bruta do backend.',
    },
    {
      date: '2021',
      year: 2021,
      icon: '🐳',
      title: 'Containerizador',
      description: 'Conquistou Docker e Kubernetes. Orquestrou impérios digitais na nuvem.',
    },
    {
      date: '2023',
      year: 2023,
      icon: '☁️',
      title: 'Arquiteto em Nuvem',
      description: 'Aprofundou conhecimentos em AWS e infraestrutura como código. Arquiteto de soluções.',
    },
    {
      date: '2024',
      year: 2024,
      icon: '⚛️',
      title: 'Explorador Frontend',
      description: 'Descobriu React e JavaScript. Expandiu horizonte para novos territórios web.',
    },
    {
      date: '2026',
      year: 2026,
      icon: '🌟',
      title: 'Full-Stack Aventureiro',
      description: 'Hoje combina conhecimento de backend, infraestrutura e frontend em uma única jornada épica.',
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
    
    // Remove o bloco da posição original
    newBlocks.splice(draggedIndex, 1);
    // Insere na nova posição
    newBlocks.splice(index, 0, draggedBlock);
    
    setBlocks(newBlocks);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    
    // Incrementa contador de manipulações
    const newDragCount = dragCount + 1;
    setDragCount(newDragCount);
    
    // Desbloqueia tesouro quando atingir o número necessário
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
          {/* Hero Section */}
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
              <h1>🎮 A Jornada do Aventureiro 🗺️</h1>
              <p>Bem-vindo à história de um curioso!</p>
            </AnimatedText>
          </HeroSection>

          {/* Minecraft-style Blocks */}
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
            
            {/* Tesouro Oculto - Aparece após manipulações */}
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
                  <h3>Tesouro Desbloqueado!</h3>
                  <p>Você manipulou os blocos {dragCount} vezes e desbloqueou o tesouro! Clique aqui... 👀</p>
                </BlockContent>
              </Block>
            )}
          </BlocksGrid>

          {/* Story Section */}
          <StorySection>
            <h2>📖 A História</h2>
            <p>
              Pablo é um desenvolvedor que começou sua jornada na infraestrutura, aprendendo desde cedo que a base sólida é essencial. 
              Com o passar do tempo, expandiu seus horizontes, dominando múltiplas linguagens de programação e se tornando especialista 
              em automação e escalabilidade.
            </p>
            <p>
              Mas além de código, ele carrega paixões genuínas: a competição saudável do futebol e a paciência meditativa da pesca. 
              Essas experiências moldaram seu caráter como desenvolvedor - disciplina, foco e criatividade.
            </p>
          </StorySection>

          {/* Timeline - Visual Timeline */}
          <AdventureTimeline>
            <h2>🎯 A Odisseia Técnica</h2>
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
            <h2>🎪 As 3 Paixões</h2>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Passion>
                <span className="passion-icon">💻</span>
                <h3>Código</h3>
                <p>O meio onde expressa sua criatividade técnica</p>
              </Passion>
              <Passion>
                <span className="passion-icon">⚽</span>
                <h3>Futebol</h3>
                <p>Competição, trabalho em equipe e pura adrenalina</p>
              </Passion>
              <Passion>
                <span className="passion-icon">🎣</span>
                <h3>Pesca</h3>
                <p>Contemplação, paciência e conexão com a natureza</p>
              </Passion>
            </div>
          </SkillsShowcase>

          {/* Easter Egg Modal */}
          {easterEgg && easterEgg !== 'unlocked' && (
            <EasterEggModal>
              <EasterEggContent>
                {easterEgg === 'treasure' && (
                  <>
                    <h2>✨ TESOURO ENCONTRADO! ✨</h2>
                    <p>Você descobriu que Pablo ama desafios!</p>
                    <p>Se você chegou até aqui, você também é um explorador 🗺️</p>
                  </>
                )}
                {easterEgg === 'secret' && (
                  <>
                    <h2>🔓 SEGREDO DESBLOQUEADO! 🔓</h2>
                    <p>Você é persistente! Essa é a qualidade que mais define bons desenvolvedores.</p>
                    <p>Keep clicking, maybe there's more... 👀</p>
                  </>
                )}
              </EasterEggContent>
            </EasterEggModal>
          )}
          
          {/* Treasure Modal - macOS Style */}
          {showTreasureModal && (
            <EasterEggModal onClick={() => setShowTreasureModal(false)}>
              <TreasureModalContent onClick={(e) => e.stopPropagation()}>
                {/* macOS Browser Header */}
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
                
                {/* Content */}
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
                    🖕
                  </div>
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '1rem',
                    fontWeight: 700 
                  }}>
                    Parabéns, Explorador!
                  </h2>
                  <p style={{ 
                    fontSize: '1rem', 
                    opacity: 0.8,
                    lineHeight: 1.6 
                  }}>
                    Você encontrou o verdadeiro tesouro: a persistência.
                    <br />
                    Manipulou {dragCount} blocos para chegar aqui! 🎮
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
                  Fechar
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
