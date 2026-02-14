import React, { useState, useEffect, useRef } from 'react';
import { Header, Footer } from '../../ui';
import { Avatar } from '../../ui/Avatar';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_LINKS } from '../../constants';
import ProfileModal from '../../ui/Modal/ProfileModal';
import { useLanguage } from '../../core/i18n';
import pescadorImg from '../../assets/pescador.webp';
import { 
  HomeStyled, 
  ContactContainer, 
  HeroSection,
  AvatarContainer,
  TerminalWindow,
  TerminalHeader,
  TerminalBody,
  TerminalLine,
  TerminalRow,
  TerminalPrompt,
  TerminalInput,
  ContactGrid,
  ContactCard,
  IconWrapper,
  CardContent,
  StatusIndicator,
  SeaPixel,
  QuickStats,
  StatItem,
  SocialLinks,
  SocialButton,
  MessageSection,
  TypingIndicator,
  Dot,
} from './Contact.styles';

interface ContactMethod {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link: string;
  color: string;
  status: 'online' | 'active' | 'available';
  response: string;
}

const ContactPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commandIndex, setCommandIndex] = useState<number | null>(null);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [easterEggType, setEasterEggType] = useState<'root' | 'sudosu' | null>(null);
  const [typedHeroDescription, setTypedHeroDescription] = useState('');
  const [isTypingHeroDescription, setIsTypingHeroDescription] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousLanguageRef = useRef<string>(currentLanguage);
  const storageKey = `contact-terminal-history-${currentLanguage}`;

  const skillTree = {
    skills: {
      backend: ['Java', 'Python', 'Node.js', 'APIs REST'],
      devops: ['Docker', 'Kubernetes', 'AWS', 'Linux'],
      frontend: ['React', 'TypeScript', 'UI/UX'],
      tools: ['Git', 'CI/CD', 'Observabilidade'],
    },
    contacts: {
      email: `mailto:${SOCIAL_LINKS.EMAIL}`,
      github: SOCIAL_LINKS.GITHUB,
      instagram: SOCIAL_LINKS.INSTAGRAM,
      linkedin: SOCIAL_LINKS.LINKEDIN,
    },
    courses: {
      'Docker & Containers': 92,
      'Kubernetes & Orchestration': 85,
      'AWS Cloud': 78,
      'Linux Admin': 95,
      'React + TS': 72,
    },
  };

  const getPrompt = () => {
    const path = currentPath.length ? `/${currentPath.join('/')}` : '/';
    return `${t.contact.terminal.prompt}:${path}$`;
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes popup {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    if (previousLanguageRef.current !== currentLanguage) {
      ['pt-BR', 'en-US', 'zh-CN'].forEach(lang => {
        if (lang !== currentLanguage) {
          localStorage.removeItem(`contact-terminal-history-${lang}`);
        }
      });
      setTerminalHistory([]);
      setCommandHistory([]);
      setCurrentPath([]);
      setIsReady(false);
      previousLanguageRef.current = currentLanguage;
    }
  }, [currentLanguage]);

  useEffect(() => {
    const fullText = t.contact.hero.description;
    let index = 0;
    setTypedHeroDescription('');
    setIsTypingHeroDescription(false);

    if (!fullText) {
      return;
    }

    setIsTypingHeroDescription(true);

    const intervalId = window.setInterval(() => {
      index += 1;
      setTypedHeroDescription(fullText.slice(0, index));

      if (index >= fullText.length) {
        window.clearInterval(intervalId);
        setIsTypingHeroDescription(false);
      }
    }, 110);

    return () => window.clearInterval(intervalId);
  }, [t.contact.hero.description]);

  const resolveNode = (): unknown => {
    let node: unknown = skillTree;
    for (const segment of currentPath) {
      node = (node as Record<string, unknown>)?.[segment];
    }
    return node;
  };

  const renderLs = () => {
    const node = resolveNode();
    if (Array.isArray(node)) {
      return node;
    }
    if (!node || typeof node !== 'object') {
      return ['(vazio)'];
    }
    return Object.keys(node).map((key) => {
      const value = node[key as keyof typeof node];
      const isDir = typeof value === 'object' && !Array.isArray(value);
      return isDir ? `${key}/` : key;
    });
  };

  const renderDf = () => {
    const courses = skillTree.courses;
    const lines = [t.contact.terminal.df_header];
    Object.entries(courses).forEach(([name, pct]) => {
      const used = `${pct}%`;
      lines.push(`${name.padEnd(20)} 100G  ${used.padEnd(4)}  ${String(100 - pct).padEnd(4)}  ${used.padEnd(4)} /courses`);
    });
    return lines;
  };

  const renderTree = () => {
    const lines: string[] = [];
    lines.push('.');
    lines.push('├── skills');
    lines.push('│   ├── backend');
    lines.push('│   ├── devops');
    lines.push('│   ├── frontend');
    lines.push('│   └── tools');
    lines.push('├── contacts');
    lines.push('│   ├── email');
    lines.push('│   ├── github');
    lines.push('│   ├── instagram');
    lines.push('│   └── linkedin');
    lines.push('└── courses');
    return lines;
  };

  const handleCd = (target?: string) => {
    if (!target || target === '/') {
      setCurrentPath([]);
      return [];
    }
    if (target === '..') {
      setCurrentPath((prev) => prev.slice(0, -1));
      return [];
    }

    const node = resolveNode();
    if (!node || typeof node !== 'object') {
      return [`cd: ${target}: diretório inválido`];
    }

    if (node.contacts && node.contacts[target]) {
      window.open(node.contacts[target], '_blank', 'noopener,noreferrer');
      return [`abrindo ${target}...`];
    }

    if (node[target]) {
      if (typeof node[target] === 'object') {
        setCurrentPath((prev) => [...prev, target]);
        return [];
      }
      if (typeof node[target] === 'string') {
        window.open(node[target], '_blank', 'noopener,noreferrer');
        return [`abrindo ${target}...`];
      }
      return [`cd: ${target}: não é um diretório`];
    }

    if (skillTree.contacts[target as keyof typeof skillTree.contacts]) {
      window.open(skillTree.contacts[target as keyof typeof skillTree.contacts], '_blank', 'noopener,noreferrer');
      return [`abrindo ${target}...`];
    }

    return [`cd: ${target}: diretório não encontrado`];
  };

  const handleCommand = (command: string) => {
    const [cmd, ...args] = command.trim().split(' ');
    switch (cmd) {
      case 'help':
        return [
          t.contact.terminalCommands.help,
          '  ls              lista skills/contatos/cursos',
          '  cd <dir>        entra em uma skill ou contato',
          '  cd ..           volta um nível',
          '  df -lh          mostra progresso técnico',
          '  tree            mostra a árvore de skills',
          '  clear           limpa o terminal',
          '  pwd             mostra o caminho atual',
        ];
      case 'ls':
        return renderLs();
      case 'df':
        if (args.join(' ') === '-lh') return renderDf();
        return [t.contact.terminalCommands.df];
      case 'tree':
        return renderTree();
      case 'pwd':
        return [currentPath.length ? `/${currentPath.join('/')}` : '/'];
      case 'cd':
        return handleCd(args[0]);
      case 'clear':
        setTerminalHistory([]);
        return [];
      default:
        return [t.contact.terminalCommands.invalidCommand.replace('found', `found: ${cmd}`), t.contact.terminalCommands.use];
    }
  };

  const getCommandCompletions = (prefix: string) => {
    const commands = ['ls', 'cd', 'df', 'tree', 'clear', 'pwd', 'help'];
    return commands.filter((cmd) => cmd.startsWith(prefix));
  };

  const getPathCompletions = (prefix: string) => {
    const node = resolveNode();
    const entries = Array.isArray(node)
      ? []
      : node && typeof node === 'object'
        ? Object.keys(node)
        : [];
    const base = ['..', '/'];
    return [...base, ...entries].filter((entry) => entry.startsWith(prefix));
  };

  const contactMethods: ContactMethod[] = [
    {
      id: 'email',
      icon: faEnvelope,
      title: t.contact.contactMethods.email.title,
      subtitle: t.contact.contactMethods.email.subtitle,
      link: `mailto:${SOCIAL_LINKS.EMAIL}`,
      color: '#EA4335',
      status: 'active',
      response: t.contact.contactMethods.email.response,
    },
    {
      id: 'github',
      icon: faGithub,
      title: t.contact.contactMethods.github.title,
      subtitle: t.contact.contactMethods.github.subtitle,
      link: SOCIAL_LINKS.GITHUB,
      color: '#333',
      status: 'online',
      response: t.contact.contactMethods.github.response,
    },
    {
      id: 'instagram',
      icon: faInstagram,
      title: t.contact.contactMethods.instagram.title,
      subtitle: t.contact.contactMethods.instagram.subtitle,
      link: SOCIAL_LINKS.INSTAGRAM,
      color: '#E4405F',
      status: 'available',
      response: t.contact.contactMethods.instagram.response,
    },
    {
      id: 'linkedin',
      icon: faLinkedin,
      title: t.contact.contactMethods.linkedin.title,
      subtitle: t.contact.contactMethods.linkedin.subtitle,
      link: SOCIAL_LINKS.LINKEDIN || '#',
      color: '#0A66C2',
      status: 'active',
      response: t.contact.contactMethods.linkedin.response,
    },
  ];

  const stats = [
    { label: t.contact.statsLabels.responseTime, value: t.contact.stats.responseTime },
    { label: t.contact.statsLabels.responseRate, value: t.contact.stats.responseRate },
    { label: t.contact.statsLabels.activeConnections, value: t.contact.stats.activeConnections },
  ];

  useEffect(() => {
    // Não carregar do cache se estamos mudando de idioma
    const saved = localStorage.getItem(storageKey);
    if (saved && previousLanguageRef.current === currentLanguage) {
      try {
        const parsed = JSON.parse(saved) as {
          history: string[];
          commands: string[];
          path: string[];
        };
        if (parsed?.history?.length) {
          setTerminalHistory(parsed.history);
          setCommandHistory(parsed.commands || []);
          setCurrentPath(parsed.path || []);
          setIsReady(true);
          return;
        }
      } catch {
        // Silently ignore parse errors
      }
    }

    const terminalLines = [
      `> ${t.contact.terminal.initializing}`,
      `> ${t.contact.terminal.loadingChannels}`,
      `> ${t.contact.terminal.statusOnline}`,
      `> ${t.contact.terminal.allSystemsOperational}`,
      `> ${t.contact.terminal.awaitingConnection}`,
    ];

    let index = 0;
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    const enqueue = () => {
      if (index >= terminalLines.length) {
        setIsReady(true);
        return;
      }
      timers.push(
        setTimeout(() => {
          setTerminalHistory((prev) => [...prev, terminalLines[index]]);
          index += 1;
          enqueue();
        }, 300)
      );
    };
    enqueue();
    return () => timers.forEach(clearTimeout);
  }, [currentLanguage, storageKey, t.contact.terminal.initializing, t.contact.terminal.loadingChannels, t.contact.terminal.statusOnline, t.contact.terminal.allSystemsOperational, t.contact.terminal.awaitingConnection]);

  useEffect(() => {
    if (!terminalHistory.length && !commandHistory.length && !currentPath.length) return;
    const storageKey = `contact-terminal-history-${currentLanguage}`;
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        history: terminalHistory,
        commands: commandHistory,
        path: currentPath,
      })
    );
  }, [terminalHistory, commandHistory, currentPath, currentLanguage]);

  useEffect(() => {
    if (!terminalRef.current) return;
    terminalRef.current.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [terminalHistory]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const trimmed = inputValue.trim();
      const [cmd, ...args] = trimmed.split(' ');

      if (!trimmed || trimmed.indexOf(' ') === -1) {
        const matches = getCommandCompletions(cmd || '');
        if (matches.length === 1) {
          setInputValue(matches[0] + ' ');
        } else if (matches.length > 1) {
          setTerminalHistory((prev) => [...prev, matches.join('  ')]);
        }
        return;
      }

      if (cmd === 'cd') {
        const currentArg = args.join(' ');
        const matches = getPathCompletions(currentArg || '');
        if (matches.length === 1) {
          setInputValue(`cd ${matches[0]}`);
        } else if (matches.length > 1) {
          setTerminalHistory((prev) => [...prev, matches.join('  ')]);
        }
        return;
      }

      if (cmd === 'df') {
        const matches = ['-lh'].filter((opt) => opt.startsWith(args.join(' ')));
        if (matches.length === 1) {
          setInputValue(`df ${matches[0]}`);
        }
      }
      return;
    }

    if (event.key === 'Enter') {
      const command = inputValue.trim();
      if (!command) return;
      
      // Verificar comandos sudo su (negado)
      if (command.toLowerCase() === 'sudo su' || command.toLowerCase() === 'sudo root') {
        setEasterEggType('sudosu');
        const prompt = getPrompt();
        setTerminalHistory((prev) => [...prev, `${prompt} ${command}`]);
        setInputValue('');
        setCommandHistory((prev) => [...prev, command]);
        setCommandIndex(null);
        return;
      }

      // Verificar comandos root (desbloqueado)
      if (command.toLowerCase() === 'su root') {
        setEasterEggType('root');
        const prompt = getPrompt();
        setTerminalHistory((prev) => [...prev, `${prompt} ${command}`]);
        setInputValue('');
        setCommandHistory((prev) => [...prev, command]);
        setCommandIndex(null);
        return;
      }
      
      const prompt = getPrompt();
      const outputs = handleCommand(command);
      setTerminalHistory((prev) => [
        ...prev,
        `${prompt} ${command}`,
        ...outputs,
      ]);
      setCommandHistory((prev) => [...prev, command]);
      setCommandIndex(null);
      setInputValue('');
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!commandHistory.length) return;
      setCommandIndex((prev) => {
        const nextIndex = prev === null ? commandHistory.length - 1 : Math.max(prev - 1, 0);
        setInputValue(commandHistory[nextIndex]);
        return nextIndex;
      });
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!commandHistory.length) return;
      setCommandIndex((prev) => {
        if (prev === null) return null;
        const nextIndex = Math.min(prev + 1, commandHistory.length - 1);
        setInputValue(commandHistory[nextIndex] || '');
        return nextIndex;
      });
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <HomeStyled>
        <Header />
        <ContactContainer>
          <HeroSection>
            <AvatarContainer onClick={() => setIsProfileModalOpen(true)} style={{ cursor: 'pointer' }}>
              <SeaPixel />
              <Avatar
                src={pescadorImg}
                alt="Pablo Bento Soares"
                width="120px"
                height="90px"
                className="fisherman-avatar"
                style={{ border: 'none', boxShadow: 'none' }}
              />
            </AvatarContainer>
            <h1>{t.contact.hero.title}</h1>
            <p>
              {typedHeroDescription}
              {isTypingHeroDescription && <span className="terminal-cursor" aria-hidden="true" />}
            </p>
          </HeroSection>

          <TerminalWindow onClick={handleTerminalClick}>
            <TerminalHeader>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
              </div>
              <span>Terminal</span>
              <div style={{ width: '60px' }}></div>
            </TerminalHeader>
            <TerminalBody ref={terminalRef}>
              {terminalHistory.map((line, index) => (
                <TerminalLine key={`${line}-${index}`}>{line}</TerminalLine>
              ))}
              <TerminalRow>
                <TerminalPrompt>{getPrompt()}</TerminalPrompt>
                <TerminalInput
                  ref={inputRef}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={isReady ? t.contact.terminal.placeholder : ''}
                  disabled={!isReady}
                />
              </TerminalRow>
            </TerminalBody>
          </TerminalWindow>

          <QuickStats>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </StatItem>
            ))}
          </QuickStats>

          <ContactGrid>
            {contactMethods.map((method) => (
              <ContactCard
                key={method.id}
                href={method.link}
                target={method.id !== 'email' ? '_blank' : undefined}
                rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                color={method.color}
              >
                <StatusIndicator status={method.status} />
                <IconWrapper color={method.color}>
                  <FontAwesomeIcon icon={method.icon} />
                </IconWrapper>
                <CardContent>
                  <h3>{method.title}</h3>
                  <p className="subtitle">{method.subtitle}</p>
                  <p className="response">{method.response}</p>
                </CardContent>
                {hoveredCard === method.id && (
                  <MessageSection>
                    <TypingIndicator>
                      <Dot delay={0} />
                      <Dot delay={0.2} />
                      <Dot delay={0.4} />
                    </TypingIndicator>
                  </MessageSection>
                )}
              </ContactCard>
            ))}
          </ContactGrid>

          <SocialLinks>
            <h3>{t.contact.otherConnectionMethods}</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <SocialButton href={`mailto:${SOCIAL_LINKS.EMAIL}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email</span>
              </SocialButton>
              <SocialButton href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </SocialButton>
              <SocialButton href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </SocialButton>
              {SOCIAL_LINKS.LINKEDIN && (
                <SocialButton href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>LinkedIn</span>
                </SocialButton>
              )}
            </div>
          </SocialLinks>
        </ContactContainer>
        <Footer />
      </HomeStyled>
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      
      {/* Easter Egg Modal */}
      {easterEggType && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }} onClick={() => setEasterEggType(null)}>
          <div style={{
            background: '#1a1a1a',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
          }} onClick={(e) => e.stopPropagation()}>
            {/* macOS window header */}
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
                root@pablo.dev
              </div>
            </div>
            
            {/* Content */}
            <div style={{ 
              textAlign: 'center',
              padding: '2rem 0'
            }}>
              <div style={{ 
                fontSize: '8rem',
                lineHeight: 1,
                marginBottom: '1.5rem',
                animation: 'popup 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                {easterEggType === 'root' ? t.rootEasterEgg.emoji : t.sudoSuEasterEgg.emoji}
              </div>
              <h2 style={{
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                fontWeight: 700,
                color: '#fff'
              }}>
                {easterEggType === 'root' ? t.rootEasterEgg.title : t.sudoSuEasterEgg.title}
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                opacity: 0.8,
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                color: '#ccc'
              }}>
                {easterEggType === 'root' ? t.rootEasterEgg.message : t.sudoSuEasterEgg.message}
              </p>
            </div>
            
            <button
              onClick={() => setEasterEggType(null)}
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
              {t.common.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
