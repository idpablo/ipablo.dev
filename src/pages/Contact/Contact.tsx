import React, { useState, useEffect, useRef } from 'react';
import { Header, Footer } from '../../ui';
import { Avatar } from '../../ui/Avatar';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_LINKS } from '../../constants';
import ProfileModal from '../../ui/Modal/ProfileModal';
import pescadorImg from '../../assets/pescador.png';
import { 
  HomeStyled, 
  ContactContainer, 
  HeroSection,
  AvatarContainer,
  TerminalWindow,
  TerminalHeader,
  TerminalBody,
  TerminalLine,
  Cursor,
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
  icon: any;
  title: string;
  subtitle: string;
  link: string;
  color: string;
  status: 'online' | 'active' | 'available';
  response: string;
}

const ContactPage: React.FC = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [commandIndex, setCommandIndex] = useState<number | null>(null);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const storageKey = 'contact-terminal-history-v1';

  const terminalLines = [
    '> Iniciando sistema de comunicação...',
    '> Carregando canais de contato...',
    '> Status: ONLINE ✓',
    '> Todos os sistemas operacionais',
    '> Aguardando conexão...',
  ];

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
    return `pablo@ipablo.dev:${path}$`;
  };

  const resolveNode = () => {
    let node: any = skillTree;
    for (const segment of currentPath) {
      node = node?.[segment];
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
    const lines = ['Filesystem            Size  Used  Avail  Use%  Mounted on'];
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
          'Comandos disponíveis:',
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
        return ['use: df -lh'];
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
        return [`comando não encontrado: ${cmd}`, 'use: help'];
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
      title: 'E-mail',
      subtitle: 'Resposta em 24h',
      link: `mailto:${SOCIAL_LINKS.EMAIL}`,
      color: '#EA4335',
      status: 'active',
      response: 'Resposta profissional',
    },
    {
      id: 'github',
      icon: faGithub,
      title: 'GitHub',
      subtitle: 'Veja meus projetos',
      link: SOCIAL_LINKS.GITHUB,
      color: '#333',
      status: 'online',
      response: 'Código & Colaboração',
    },
    {
      id: 'instagram',
      icon: faInstagram,
      title: 'Instagram',
      subtitle: 'Conteúdo casual',
      link: SOCIAL_LINKS.INSTAGRAM,
      color: '#E4405F',
      status: 'available',
      response: 'DM aberta',
    },
    {
      id: 'linkedin',
      icon: faLinkedin,
      title: 'LinkedIn',
      subtitle: 'Networking profissional',
      link: SOCIAL_LINKS.LINKEDIN || '#',
      color: '#0A66C2',
      status: 'active',
      response: 'Conexões business',
    },
  ];

  const stats = [
    { label: 'Tempo de Resposta', value: '< 24h' },
    { label: 'Taxa de Resposta', value: '98%' },
    { label: 'Conexões Ativas', value: '500+' },
  ];

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
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
        // ignore invalid storage
      }
    }

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
  }, []);

  useEffect(() => {
    if (!terminalHistory.length && !commandHistory.length && !currentPath.length) return;
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        history: terminalHistory,
        commands: commandHistory,
        path: currentPath,
      })
    );
  }, [terminalHistory, commandHistory, currentPath]);

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

  return (
    <>
      <HomeStyled>
        <Header />
        <ContactContainer>
          {/* Hero Section */}
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
            <h1>Vamos Construir Algo Incrível?</h1>
            <p>Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades.</p>
          </HeroSection>

          {/* Terminal Window */}
          <TerminalWindow>
            <TerminalHeader>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
              </div>
              <span>contact@pablo.dev</span>
              <div style={{ width: '60px' }}></div>
            </TerminalHeader>
            <TerminalBody ref={terminalRef}>
              {terminalHistory.map((line, index) => (
                <TerminalLine key={`${line}-${index}`}>{line}</TerminalLine>
              ))}
              <TerminalRow>
                <TerminalPrompt>{getPrompt()}</TerminalPrompt>
                <TerminalInput
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={isReady ? 'digite um comando… (help)' : ''}
                  disabled={!isReady}
                />
                <Cursor>█</Cursor>
              </TerminalRow>
            </TerminalBody>
          </TerminalWindow>

          {/* Quick Stats */}
          <QuickStats>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </StatItem>
            ))}
          </QuickStats>

          {/* Contact Cards */}
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

          {/* Social Links Footer */}
          <SocialLinks>
            <h3>Outras Formas de Conexão</h3>
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
    </>
  );
};

export default ContactPage;
