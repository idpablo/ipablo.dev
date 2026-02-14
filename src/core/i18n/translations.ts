export type LanguageCode = 'pt-BR' | 'en-US' | 'zh-CN';

export interface Translations {
  header: {
    home: string;
    about: string;
    contact: string;
  };
  footer: {
    copyright: string;
  };
  home: {
    title: string;
    description1: string;
    description2: string;
    devopsMessage: string;
    languageIcon: string;
    loadingMessage: string;
  };
  about: {
    title: string;
    blocks: {
      constructor: {
        title: string;
        description: string;
      };
      digital_explorer: {
        title: string;
        description: string;
      };
      automation_maestro: {
        title: string;
        description: string;
      };
      scalability_guardian: {
        title: string;
        description: string;
      };
      soccer_passion: {
        title: string;
        description: string;
      };
      calm_fisherman: {
        title: string;
        description: string;
      };
      dream_creator: {
        title: string;
        description: string;
      };
    };
    timeline: {
      title: string;
      origin: {
        title: string;
        description: string;
      };
      infrastructure_guardian: {
        title: string;
        description: string;
      };
      infrastructure_analyst: {
        title: string;
        description: string;
      };
      java_junior: {
        title: string;
        description: string;
      };
      devops_era: {
        title: string;
        description: string;
      };
      eternal_learner: {
        title: string;
        description: string;
      };
      odyssey_continues: {
        title: string;
        description: string;
      };
    };
    story: {
      title: string;
      paragraph1: string;
      paragraph2: string;
    };
    welcome: string;
    skills: {
      title: string;
      code: {
        title: string;
        description: string;
      };
      soccer: {
        title: string;
        description: string;
      };
      fishing: {
        title: string;
        description: string;
      };
    };
    treasureUnlocked: {
      title: string;
      message: string;
      blockCount: string;
    };
    treasureCount: string;
    secretUnlocked: {
      title: string;
      message: string;
      extraMessage: string;
    };
  };
  contact: {
    title: string;
    email: string;
    github: string;
    instagram: string;
    linkedin: string;
    otherConnectionMethods: string;
    hero: {
      title: string;
      description: string;
    };
    terminal: {
      initializing: string;
      loadingChannels: string;
      statusOnline: string;
      allSystemsOperational: string;
      awaitingConnection: string;
      prompt: string;
      df_header: string;
      placeholder: string;
    };
    terminalCommands: {
      help: string;
      helpLs: string;
      helpCd: string;
      helpCdBack: string;
      helpDf: string;
      helpTree: string;
      helpClear: string;
      helpPwd: string;
      skillsDescription: string;
      contactsDescription: string;
      courseProgress: string;
      invalidCommand: string;
      df: string;
      use: string;
      cdInvalidDir: string;
      cdNotDir: string;
      opening: string;
    };
    contactMethods: {
      email: {
        title: string;
        subtitle: string;
        response: string;
      };
      github: {
        title: string;
        subtitle: string;
        response: string;
      };
      instagram: {
        title: string;
        subtitle: string;
        response: string;
      };
      linkedin: {
        title: string;
        subtitle: string;
        response: string;
      };
    };
    statsLabels: {
      responseTime: string;
      responseRate: string;
      activeConnections: string;
    };
    stats: {
      responseTime: string;
      responseRate: string;
      activeConnections: string;
    };
  };
  rootEasterEgg: {
    emoji: string;
    title: string;
    message: string;
  };
  sudoSuEasterEgg: {
    emoji: string;
    title: string;
    message: string;
  };
  notFound: {
    error: string;
    code: string;
    message: string;
  };
  modal: {
    skills: string;
    backend: string;
    devops: string;
    frontend: string;
    tools: string;
    close: string;
    stars: string;
    visitGithub: string;
    profileUrl: string;
    characterStats: string;
    skillsDescription: string;
    categoryNames: {
      backend: string;
      devops: string;
      tools: string;
      softSkills: string;
    };
    projectModal: {
      language: string;
      forks: string;
      featuresTitle: string;
      previewTitle: string;
      minimize: string;
      maximize: string;
    };
  };
  profile: {
    name: string;
    title: string;
    class: string;
    bio: string;
  };
  common: {
    close: string;
  };
  projects: Record<string, {
    title: string;
    description: string;
    features: string[];
  }>;
  stats: {
    linux: string;
    windows: string;
    docker: string;
    kubernetes: string;
    aws: string;
    cicd: string;
    java: string;
    python: string;
    javascript: string;
    networking: string;
    hardware: string;
    bash: string;
    git: string;
    sql: string;
    monitoring: string;
    iac: string;
    problemSolving: string;
    troubleshooting: string;
  };
}

export const translations: Record<LanguageCode, Translations> = {
  'pt-BR': {
    header: {
      home: 'Home',
      about: 'Sobre',
      contact: 'Contatos',
    },
    footer: {
      copyright: 'Aplicação React. Todos os direitos reservados.',
    },
    home: {
      title: 'Meu Nome é Pablo Bento Soares',
      description1:
        'Desenvolvedor de software que começou pelo lado “dark” — infraestrutura. Scripts, servidores, escalabilidade e monitoramento me moldaram como profissional. Java, Python e JavaScript resolvem qualquer coisa (porém, depende).',
      description2:
        'Alguém que ama tecnologia desde sempre: criando bots, customizando Android e escrevendo scripts por puro ódio a tarefas repetitivas.\n\nDocumentação é o caminho da salvação.',
      devopsMessage: '#DevOPS é cultura.',
      languageIcon: '📌',
      loadingMessage: 'Carregando projetos...',
    },
    about: {
      title: 'Sobre',
      blocks: {
        constructor: {
          title: 'Construtor',
          description: 'Começou da infraestrutura, aprendendo a construir os alicerces que sustentam tudo',
        },
        digital_explorer: {
          title: 'Explorador Digital',
          description: 'Java, Python, JavaScript - linguagens que abrem novos mundos de possibilidades',
        },
        automation_maestro: {
          title: 'Maestro da Automação',
          description: 'Scripts que automatizam tarefas e liberam tempo para novas aventuras',
        },
        scalability_guardian: {
          title: 'Guardião da Escalabilidade',
          description: 'Kubernetes, Docker - ferramentas para expandir impérios digitais',
        },
        soccer_passion: {
          title: 'Paixão pelo Futebol',
          description: 'Quando não está codando, está no campo buscando o gol perfeito',
        },
        calm_fisherman: {
          title: 'Pescador Tranquilo',
          description: 'Paciência, precisão e timing - os mesmos atributos do bom desenvolvedor',
        },
        dream_creator: {
          title: 'Criador de Sonhos',
          description: 'Bots, customizações Android e desafios pessoais - sempre criando algo novo',
        },
      },
      timeline: {
        title: 'A Odisseia Técnica',
        origin: {
          title: 'Origem da Jornada',
          description: 'Eis que aqui nasce uma lenda!',
        },
        infrastructure_guardian: {
          title: 'Guardião da Infraestrutura',
          description: 'Pandemia, caos global, mas foi quando a oportunidade apareceu; a infraestrutura é um ótimo lugar para ter contato com a tech.',
        },
        infrastructure_analyst: {
          title: 'Analista de Infraestrutura',
          description: 'Efetivado. Redes, servidores, networking. Documentação, documentação e mais documentação.',
        },
        java_junior: {
          title: 'Java Junior',
          description: 'Então você faz sites? Tenho uma ideia milionária para a gente!',
        },
        devops_era: {
          title: 'DevOps Era',
          description: 'Ensinando devs que seu laptop não é servidor e ambiente não é sentimento.',
        },
        eternal_learner: {
          title: 'Eterno Aprendiz',
          description: 'Só sei que nada sei.',
        },
        odyssey_continues: {
          title: 'A Odisseia Continua',
          description: 'Construindo sistemas, debuggando a vida; a curiosidade move o mundo!',
        },
      },
      story: {
        title: '📖 A História',
        paragraph1:
          'Pablo é um desenvolvedor que começou sua jornada na infraestrutura, aprendendo desde cedo que a base sólida é essencial. Com o passar do tempo, expandiu seus horizontes, dominando múltiplas linguagens de programação e se tornando especialista em automação e escalabilidade.',
        paragraph2:
          'Mas além de código, ele carrega paixões genuínas: a competição saudável do futebol e a paciência meditativa da pesca. Essas experiências moldaram seu caráter como desenvolvedor - disciplina, foco e criatividade.',
      },
      welcome: 'Não sou estrada nem destino, mas me atravessam histórias. Quem sou eu?',
      skills: {
        title: '⚽ Paixões',
        code: {
          title: 'Código',
          description: 'O meio onde expressa sua criatividade técnica',
        },
        soccer: {
          title: 'Futebol',
          description: 'Competição, estratégia e movimento',
        },
        fishing: {
          title: 'Pesca',
          description: 'Contemplação, paciência e conexão com a natureza',
        },
      },
      treasureUnlocked: {
        title: '💜 Hito Hito no Mi ENCONTRADA! 💜',
        message: 'O ONE PIECE é o network que fizemos pelo caminho!',
        blockCount: 'Blocos movidos: {count}',
      },
      treasureCount: 'Blocos movidos: {count}',
      secretUnlocked: {
        title: '🔓 SEGREDO DESBLOQUEADO! 🔓',
        message: 'Você é persistente! Essa é a qualidade que mais define bons desenvolvedores.',
        extraMessage: 'Continue clicando, talvez haja mais... 👀',
      },
    },
    contact: {
      title: 'Contato',
      email: 'Email',
      github: 'GitHub',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      otherConnectionMethods: 'Outras Formas de Conexão',
      hero: {
        title: '📬 Vamos Conversar?',
        description: 'ou tomar uma cervejinha!',
      },
      terminal: {
        initializing: 'Inicializando sistema',
        loadingChannels: 'Carregando canais de contato',
        statusOnline: 'Status: online',
        allSystemsOperational: 'Todos os sistemas operacionais',
        awaitingConnection: 'Aguardando conexão...',
        prompt: 'pablo@dev',
        df_header: 'FILESYSTEM         SIZE  USED AVAIL USE%',
        placeholder: 'Digite um comando ou "help"...',
      },
      terminalCommands: {
        help: 'Comandos disponíveis: ls, cd, pwd, df, tree, clear, help',
        helpLs: '  ls              lista skills/contatos/cursos',
        helpCd: '  cd <dir>        entra em uma skill ou contato',
        helpCdBack: '  cd ..           volta um nível',
        helpDf: '  df -lh          mostra progresso técnico',
        helpTree: '  tree            mostra a árvore de skills',
        helpClear: '  clear           limpa o terminal',
        helpPwd: '  pwd             mostra o caminho atual',
        skillsDescription: 'Estrutura de skills e especialidades técnicas',
        contactsDescription: 'Canais de contato disponíveis',
        courseProgress: 'Progresso em cursos e certificações',
        invalidCommand: 'Comando não encontrado. Digite "help" para ver comandos disponíveis.',
        df: '/dev/main          1.0T  512M  512M  50%',
        use: 'Use "help" para ver comandos disponíveis',
        cdInvalidDir: 'diretório inválido',
        cdNotDir: 'não é um diretório',
        opening: 'abrindo',
      },
      contactMethods: {
        email: {
          title: 'Email',
          subtitle: 'Direto para a caixa de entrada',
          response: '⏱️ Respondo em menos de 24h',
        },
        github: {
          title: 'GitHub',
          subtitle: 'Veja meus projetos',
          response: '⭐ Sempre aberto a colaborações',
        },
        instagram: {
          title: 'Instagram',
          subtitle: 'Acompanhe minha jornada',
          response: '📸 Stories em tempo real',
        },
        linkedin: {
          title: 'LinkedIn',
          subtitle: 'Profissional e conectado',
          response: '🔗 Mensagem profissional',
        },
      },
      statsLabels: {
        responseTime: 'Tempo de Resposta',
        responseRate: 'Taxa de Resposta',
        activeConnections: 'Conexões Ativas',
      },
      stats: {
        responseTime: '< 24h',
        responseRate: '100%',
        activeConnections: '24/7',
      },
    },
    rootEasterEgg: {
      emoji: '🔐',
      title: 'Acesso Root Desbloqueado!',
      message: 'Parabéns! Você encontrou um easter egg secreto. Isso mostra que você é persistente e observador - exatamente as qualidades que procuro em um colega de desenvolvimento!',
    },
    sudoSuEasterEgg: {
      emoji: '⚠️',
      title: 'Acesso Root Negado!',
      message: 'Acha que vai aonde rapaz? 👀',
    },
    notFound: {
      error: 'Ops! Algo deu errado.',
      code: '404',
      message: 'Supera man...',
    },
    modal: {
      skills: 'Skills',
      backend: 'Backend',
      devops: 'DevOps',
      frontend: 'Frontend',
      tools: 'Ferramentas',
      close: 'Fechar',
      stars: 'Stars',
      visitGithub: 'Visitar GitHub',
      profileUrl: 'profile.pablo.dev',
      characterStats: 'Estatísticas do Personagem',
      skillsDescription: 'Estrutura de habilidades e atributos técnicos',
      categoryNames: {
        backend: 'Backend',
        devops: 'DevOps',
        tools: 'Ferramentas',
        softSkills: 'Soft Skills',
      },
      projectModal: {
        language: 'Linguagem',
        forks: 'Forks',
        featuresTitle: 'Principais Features',
        previewTitle: 'Prévia do Projeto',
        minimize: 'Minimizar',
        maximize: 'Maximizar',
      },
    },
    profile: {
      name: 'Pablo Bento Soares',
      title: 'Dev & DevOps Enthusiast',
      class: 'Full-Stack Developer',
      bio: 'Desenvolvedor apaixonado por automação, escalabilidade e código limpo. Sempre buscando aprender e compartilhar conhecimento.',
    },
    common: {
      close: 'Fechar',
    },
    projects: {
      api_backend_login: {
        title: 'API Backend Login',
        description: 'API de autenticação JWT robusta desenvolvida em Node.js, servindo como template pronto para produção. Implementa segurança moderna com tokens JWT, validação de senhas com bcrypt, e endpoints RESTful bem estruturados. Ideal para projetos que necessitam de um sistema de login seguro e escalável.',
        features: ['Autenticação com JWT', 'Criptografia bcrypt', 'RESTful API', 'Validação de dados', 'Template reutilizável'],
      },
      ipablo: {
        title: 'ipablo',
        description: 'Repositório pessoal com documentação de projetos, scripts de automação e experimentos. Serve como arquivo de aprendizado contínuo e referência de boas práticas em desenvolvimento.',
        features: ['Documentação de projetos', 'Scripts de automação', 'Boas práticas', 'Referência técnica'],
      },
      ipablo_dev: {
        title: 'ipablo.dev',
        description: 'Portfólio moderno e interativo desenvolvido em React com TypeScript. Apresenta projetos em um design elegante com tema Midnight Purple, scroll infinito de cards, infinite scroll de projetos e modal de detalhes com simulação de navegador macOS. Implementa boas práticas de UX/UI com animações fluidas.',
        features: ['Portfólio interativo', 'Scroll infinito', 'Modal de projetos', 'Tema dark/light', 'Design responsivo', 'Simulador de navegador macOS'],
      },
      crud_with_jpa: {
        title: 'CRUD with JPA',
        description: 'Implementação de padrão CRUD completo utilizando JPA (Java Persistence API). Demonstra boas práticas em persistência de dados, mapeamento objeto-relacional e operações de banco de dados com Java.',
        features: ['CRUD completo', 'JPA/Hibernate', 'ORM mapping', 'Operações BD', 'Design patterns'],
      },
      imerssao_alura_consumindo_api: {
        title: 'Imersão Alura - Consumindo API',
        description: 'Projeto educacional da imersão Alura focado em consumir APIs externas. Implementa requisições HTTP, tratamento de dados JSON e integração com serviços web. Exemplifica as melhores práticas de integração com APIs RESTful em Java.',
        features: ['Consumo de APIs', 'Requisições HTTP', 'Tratamento JSON', 'Integração web', 'Educacional'],
      },
      imerssao_alura_criando_api: {
        title: 'Imersão Alura - Criando API',
        description: 'Projeto educacional da imersão Alura que foca na criação de uma API RESTful. Demonstra princípios de design de API, estruturação de endpoints, validação de dados e boas práticas de arquitetura em Java.',
        features: ['Criação de API', 'RESTful design', 'Endpoints estruturados', 'Validação de dados', 'Arquitetura limpa'],
      },
    },
    stats: {
      linux: 'Linux & Unix Systems',
      windows: 'Windows Server & Desktop',
      docker: 'Docker & Containerization',
      kubernetes: 'Kubernetes & Orchestration',
      aws: 'AWS Cloud Services',
      cicd: 'CI/CD & Automation',
      java: 'Java & Spring Boot',
      python: 'Python & Automation Scripts',
      javascript: 'JavaScript & Node.js',
      networking: 'Networking & Protocols',
      hardware: 'Hardware & Architecture',
      bash: 'Bash & Shell Scripting',
      git: 'Git & Version Control',
      sql: 'SQL & Database Admin',
      monitoring: 'Monitoring & Observability',
      iac: 'Infrastructure as Code',
      problemSolving: 'Problem Solving',
      troubleshooting: 'System Troubleshooting',
    },
  },
  'en-US': {
    header: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
    },
    footer: {
      copyright: 'React Application. All rights reserved.',
    },
    home: {
      title: 'My Name is Pablo Bento Soares',
      description1:
        'Software developer who started on the “dark” side — infrastructure. Scripts, servers, scalability, and monitoring shaped me as a professional. Java, Python, and JavaScript solve anything (but it depends).',
      description2:
        'Someone who has loved technology forever: creating bots, customizing Android, and writing scripts out of pure hatred for repetitive tasks.\n\nDocumentation is the path to salvation.',
      devopsMessage: '#DevOPS is a culture.',
      languageIcon: '📌',
      loadingMessage: 'Loading projects...',
    },
    about: {
      title: 'About',
      blocks: {
        constructor: {
          title: 'Constructor',
          description: 'Started from infrastructure, learning to build the foundations that support everything',
        },
        digital_explorer: {
          title: 'Digital Explorer',
          description: 'Java, Python, JavaScript - languages that open new worlds of possibilities',
        },
        automation_maestro: {
          title: 'Automation Maestro',
          description: 'Scripts that automate tasks and free up time for new adventures',
        },
        scalability_guardian: {
          title: 'Scalability Guardian',
          description: 'Kubernetes, Docker - tools to expand digital empires',
        },
        soccer_passion: {
          title: 'Soccer Passion',
          description: 'When not coding, he\'s on the field searching for the perfect goal',
        },
        calm_fisherman: {
          title: 'Calm Fisherman',
          description: 'Patience, precision and timing - the same attributes of a good developer',
        },
        dream_creator: {
          title: 'Dream Creator',
          description: 'Bots, Android customizations and personal challenges - always creating something new',
        },
      },
      timeline: {
        title: 'The Technical Odyssey',
        origin: {
          title: 'Journey Origins',
          description: 'And so, a legend is born!',
        },
        infrastructure_guardian: {
          title: 'Infrastructure Guardian',
          description: 'Pandemic, global chaos, but opportunity emerged; infrastructure is where you get real tech exposure.',
        },
        infrastructure_analyst: {
          title: 'Infrastructure Analyst',
          description: 'Made permanent. Networks, servers, networking. Documentation, documentation, and more documentation.',
        },
        java_junior: {
          title: 'Java Junior',
          description: 'So you build websites? I have a million-dollar idea for us!',
        },
        devops_era: {
          title: 'DevOps Era',
          description: 'Teaching devs that their laptop is not a server and environment is not a feeling.',
        },
        eternal_learner: {
          title: 'Eternal Learner',
          description: 'I know that I know nothing.',
        },
        odyssey_continues: {
          title: 'The Odyssey Continues',
          description: 'Building systems, debugging life, curiosity moves the world!',
        },
      },
      story: {
        title: '📖 The Story',
        paragraph1:
          'Pablo is a developer who started his journey in infrastructure, learning early that a solid foundation is essential. Over time, he expanded his horizons, mastering multiple programming languages and becoming an expert in automation and scalability.',
        paragraph2:
          'But beyond code, he carries genuine passions: the healthy competition of soccer and the meditative patience of fishing. These experiences shaped his character as a developer - discipline, focus and creativity.',
      },
      welcome: 'I am neither road nor destination, yet stories pass through me. What am I?',
      skills: {
        title: '⚽ Passions',
        code: {
          title: 'Code',
          description: 'The medium where he expresses his technical creativity',
        },
        soccer: {
          title: 'Soccer',
          description: 'Competition, strategy and movement',
        },
        fishing: {
          title: 'Fishing',
          description: 'Contemplation, patience and connection with nature',
        },
      },
      treasureUnlocked: {
        title: '💜 Hito Hito no Mi FOUND! 💜',
        message: 'The ONE PIECE is the network we made along the way!',
        blockCount: 'Blocks moved: {count}',
      },
      treasureCount: 'Blocks moved: {count}',
      secretUnlocked: {
        title: '🔓 SECRET UNLOCKED! 🔓',
        message: 'You are persistent! That\'s the quality that most defines good developers.',
        extraMessage: 'Keep clicking, maybe there\'s more... 👀',
      },
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      github: 'GitHub',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      otherConnectionMethods: 'Other Ways to Connect',
      hero: {
        title: '📬 Let\'s Talk?',
        description: 'or grab a beer!',
      },
      terminal: {
        initializing: 'Initializing system',
        loadingChannels: 'Loading contact channels',
        statusOnline: 'Status: online',
        allSystemsOperational: 'All systems operational',
        awaitingConnection: 'Awaiting connection...',
        prompt: 'pablo@dev',
        df_header: 'FILESYSTEM         SIZE  USED AVAIL USE%',
        placeholder: 'Type a command or "help"...',
      },
      terminalCommands: {
        help: 'Available commands: ls, cd, pwd, df, tree, clear, help',
        helpLs: '  ls              lists skills/contacts/courses',
        helpCd: '  cd <dir>        enters a skill or contact',
        helpCdBack: '  cd ..           goes back one level',
        helpDf: '  df -lh          shows technical progress',
        helpTree: '  tree            shows the skills tree',
        helpClear: '  clear           clears the terminal',
        helpPwd: '  pwd             shows current path',
        skillsDescription: 'Structure of skills and technical specialties',
        contactsDescription: 'Available contact channels',
        courseProgress: 'Progress in courses and certifications',
        invalidCommand: 'Command not found. Type "help" to see available commands.',
        df: '/dev/main          1.0T  512M  512M  50%',
        use: 'Use "help" to see available commands',
        cdInvalidDir: 'invalid directory',
        cdNotDir: 'not a directory',
        opening: 'opening',
      },
      contactMethods: {
        email: {
          title: 'Email',
          subtitle: 'Direct to inbox',
          response: '⏱️ I respond in less than 24h',
        },
        github: {
          title: 'GitHub',
          subtitle: 'Check out my projects',
          response: '⭐ Always open to collaborations',
        },
        instagram: {
          title: 'Instagram',
          subtitle: 'Follow my journey',
          response: '📸 Real-time stories',
        },
        linkedin: {
          title: 'LinkedIn',
          subtitle: 'Professional and connected',
          response: '🔗 Professional message',
        },
      },
      statsLabels: {
        responseTime: 'Response Time',
        responseRate: 'Response Rate',
        activeConnections: 'Active Connections',
      },
      stats: {
        responseTime: '< 24h',
        responseRate: '100%',
        activeConnections: '24/7',
      },
    },
    rootEasterEgg: {
      emoji: '🔐',
      title: 'Root Access Unlocked!',
      message: 'Congratulations! You found a secret easter egg. This shows you are persistent and observant - exactly the qualities I look for in a development colleague!',
    },
    sudoSuEasterEgg: {
      emoji: '⚠️',
      title: 'Root Access Denied!',
      message: 'Where do you think you\'re going, pal? 👀',
    },
    notFound: {
      error: 'Oops! Something went wrong.',
      code: '404',
      message: 'Come on, you got this...',
    },
    modal: {
      skills: 'Skills',
      backend: 'Backend',
      devops: 'DevOps',
      frontend: 'Frontend',
      tools: 'Tools',
      close: 'Close',
      stars: 'Stars',
      visitGithub: 'Visit GitHub',
      profileUrl: 'profile.pablo.dev',
      characterStats: 'Character Stats',
      skillsDescription: 'Structure of skills and technical attributes',
      categoryNames: {
        backend: 'Backend',
        devops: 'DevOps',
        tools: 'Tools',
        softSkills: 'Soft Skills',
      },
      projectModal: {
        language: 'Language',
        forks: 'Forks',
        featuresTitle: 'Main Features',
        previewTitle: 'Project Preview',
        minimize: 'Minimize',
        maximize: 'Maximize',
      },
    },
    profile: {
      name: 'Pablo Bento Soares',
      title: 'Dev & DevOps Enthusiast',
      class: 'Full-Stack Developer',
      bio: 'A developer passionate about automation, scalability, and clean code. Always seeking to learn and share knowledge.',
    },
    common: {
      close: 'Close',
    },
    projects: {
      api_backend_login: {
        title: 'API Backend Login',
        description: 'A robust JWT authentication API developed in Node.js, serving as a production-ready template. Implements modern security with JWT tokens, bcrypt password encryption, and well-structured RESTful endpoints. Ideal for projects requiring a secure and scalable login system.',
        features: ['JWT Authentication', 'Bcrypt Encryption', 'RESTful API', 'Data Validation', 'Reusable Template'],
      },
      ipablo: {
        title: 'ipablo',
        description: 'Personal repository with project documentation, automation scripts and experiments. Serves as a continuous learning archive and reference for development best practices.',
        features: ['Project Documentation', 'Automation Scripts', 'Best Practices', 'Technical Reference'],
      },
      ipablo_dev: {
        title: 'ipablo.dev',
        description: 'Modern and interactive portfolio developed in React with TypeScript. Showcases projects in an elegant design with Midnight Purple theme, infinite scroll of cards and project modal with macOS browser simulation. Implements UX/UI best practices with smooth animations.',
        features: ['Interactive Portfolio', 'Infinite Scroll', 'Project Modal', 'Dark/Light Theme', 'Responsive Design', 'macOS Browser Simulator'],
      },
      crud_with_jpa: {
        title: 'CRUD with JPA',
        description: 'Complete CRUD pattern implementation using JPA (Java Persistence API). Demonstrates best practices in data persistence, object-relational mapping and database operations with Java.',
        features: ['Complete CRUD', 'JPA/Hibernate', 'ORM Mapping', 'DB Operations', 'Design Patterns'],
      },
      imerssao_alura_consumindo_api: {
        title: 'Alura Immersion - Consuming APIs',
        description: 'Educational project from Alura immersion focused on consuming external APIs. Implements HTTP requests, JSON data handling and web service integration. Exemplifies best practices for REST API integration in Java.',
        features: ['API Consumption', 'HTTP Requests', 'JSON Handling', 'Web Integration', 'Educational'],
      },
      imerssao_alura_criando_api: {
        title: 'Alura Immersion - Creating APIs',
        description: 'Educational project from Alura immersion focused on creating a RESTful API. Demonstrates API design principles, endpoint structuring, data validation and architecture best practices in Java.',
        features: ['API Creation', 'RESTful Design', 'Structured Endpoints', 'Data Validation', 'Clean Architecture'],
      },
    },
    stats: {
      linux: 'Linux & Unix Systems',
      windows: 'Windows Server & Desktop',
      docker: 'Docker & Containerization',
      kubernetes: 'Kubernetes & Orchestration',
      aws: 'AWS Cloud Services',
      cicd: 'CI/CD & Automation',
      java: 'Java & Spring Boot',
      python: 'Python & Automation Scripts',
      javascript: 'JavaScript & Node.js',
      networking: 'Networking & Protocols',
      hardware: 'Hardware & Architecture',
      bash: 'Bash & Shell Scripting',
      git: 'Git & Version Control',
      sql: 'SQL & Database Admin',
      monitoring: 'Monitoring & Observability',
      iac: 'Infrastructure as Code',
      problemSolving: 'Problem Solving',
      troubleshooting: 'System Troubleshooting',
    },
  },
  'zh-CN': {
    header: {
      home: '主页',
      about: '关于',
      contact: '联系',
    },
    footer: {
      copyright: 'React 应用。版权所有。',
    },
    home: {
      title: '我是 Pablo Bento Soares',
      description1:
        '从“黑暗”一侧开始的软件开发者 — 基础设施。脚本、服务器、可扩展性和监控塑造了我的职业能力。Java、Python 和 JavaScript 能解决任何事情（不过，取决于情况）。',
      description2:
        '一个一直热爱技术的人：创建机器人、自定义 Android，并出于对重复性任务的纯粹厌恶而编写脚本。\n\n文档是通向救赎的道路。',
      devopsMessage: '#DevOPS 是一种文化。',
      languageIcon: '📌',
      loadingMessage: '加载项目中...',
    },
    about: {
      title: '关于',
      blocks: {
        constructor: {
          title: '构造者',
          description: '从基础设施开始，学习构建支撑一切的基础',
        },
        digital_explorer: {
          title: '数字探险家',
          description: 'Java、Python、JavaScript - 打开无限可能世界的语言',
        },
        automation_maestro: {
          title: '自动化大师',
          description: '自动化任务的脚本，为新冒险腾出时间',
        },
        scalability_guardian: {
          title: '可扩展性守护者',
          description: 'Kubernetes、Docker - 扩展数字帝国的工具',
        },
        soccer_passion: {
          title: '足球热情',
          description: '不编码时，在球场上寻求完美进球',
        },
        calm_fisherman: {
          title: '平静的渔夫',
          description: '耐心、精准和时机 - 优秀开发者的相同属性',
        },
        dream_creator: {
          title: '梦想创造者',
          description: '机器人、Android 定制和个人挑战 - 始终创造新事物',
        },
      },
      timeline: {
        title: '技术奥德赛',
        origin: {
          title: '旅程起源',
          description: '于是，一个传奇诞生了！',
        },
        infrastructure_guardian: {
          title: '基础设施守护者',
          description: '大流行，全球混乱，但机遇出现了；基础设施是与技术接触的绝佳场所。',
        },
        infrastructure_analyst: {
          title: '基础设施分析师',
          description: '被永久录用。网络、服务器、网络。文档、文档、更多文档。',
        },
        java_junior: {
          title: 'Java 初级开发者',
          description: '那么你做网站？我有个百万美元的想法给我们！',
        },
        devops_era: {
          title: 'DevOps 时代',
          description: '教导开发人员他们的笔记本电脑不是服务器，环境不是感受。',
        },
        eternal_learner: {
          title: '永恒的学习者',
          description: '我知道我一无所知。',
        },
        odyssey_continues: {
          title: '奥德赛继续',
          description: '构建系统，调试生活，好奇心推动世界！',
        },
      },
      story: {
        title: '📖 故事',
        paragraph1:
          'Pablo 是一位开发者，他从基础设施开始了他的旅程，很早就学到了牢固的基础是必不可少的。随着时间的推移，他拓展了视野，掌握了多种编程语言，成为自动化和可扩展性方面的专家。',
        paragraph2:
          '但除了代码之外，他还怀有真挚的热情：足球的健康竞争和钓鱼的冥想式耐心。这些经历塑造了他作为开发者的品格 - 纪律、专注和创意。',
      },
      welcome: '我不是道路也不是终点，却有故事从我身上经过。我是谁？',
      skills: {
        title: '⚽ 热情',
        code: {
          title: '代码',
          description: '表达他的技术创意的媒介',
        },
        soccer: {
          title: '足球',
          description: '竞争、策略和运动',
        },
        fishing: {
          title: '钓鱼',
          description: '沉思、耐心和与自然的联系',
        },
      },
      treasureUnlocked: {
        title: '💜 人人果实已找到! 💜',
        message: '海贼王是我们一路走来创造的网络！',
        blockCount: '已移动的块数：{count}',
      },
      treasureCount: '已移动的块数：{count}',
      secretUnlocked: {
        title: '🔓 秘密已解锁! 🔓',
        message: '你很执着！这是最能定义优秀开发者的品质。',
        extraMessage: '继续点击，也许还有更多... 👀',
      },
    },
    contact: {
      title: '联系',
      email: '电子邮件',
      github: 'GitHub',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      otherConnectionMethods: '其他联系方式',
      hero: {
        title: '📬 我们来聊天？',
        description: '或者来一杯啤酒！',
      },
      terminal: {
        initializing: '初始化系统',
        loadingChannels: '加载联系渠道',
        statusOnline: '状态：在线',
        allSystemsOperational: '所有系统正常运行',
        awaitingConnection: '等待连接...',
        prompt: 'pablo@dev',
        df_header: '文件系统          大小  已用 可用 用量%',
        placeholder: '输入命令或"help"...',
      },
      terminalCommands: {
        help: '可用命令：ls, cd, pwd, df, tree, clear, help',
        helpLs: '  ls              列出技能/联系人/课程',
        helpCd: '  cd <目录>       进入技能或联系人',
        helpCdBack: '  cd ..           返回上一级',
        helpDf: '  df -lh          显示技术进度',
        helpTree: '  tree            显示技能树',
        helpClear: '  clear           清除终端',
        helpPwd: '  pwd             显示当前路径',
        skillsDescription: '技能和技术专长的结构',
        contactsDescription: '可用的联系渠道',
        courseProgress: '课程和认证的进度',
        invalidCommand: '找不到命令。输入 "help" 查看可用命令。',
        df: '/dev/main          1.0T  512M  512M  50%',
        use: '使用 "help" 查看可用命令',
        cdInvalidDir: '无效的目录',
        cdNotDir: '不是目录',
        opening: '正在打开',
      },
      contactMethods: {
        email: {
          title: '电子邮件',
          subtitle: '直接发送到收件箱',
          response: '⏱️ 我在 24 小时内回复',
        },
        github: {
          title: 'GitHub',
          subtitle: '查看我的项目',
          response: '⭐ 始终开放合作',
        },
        instagram: {
          title: 'Instagram',
          subtitle: '跟随我的旅程',
          response: '📸 实时故事',
        },
        linkedin: {
          title: 'LinkedIn',
          subtitle: '专业且互联',
          response: '🔗 专业消息',
        },
      },
      statsLabels: {
        responseTime: '响应时间',
        responseRate: '响应率',
        activeConnections: '活跃连接',
      },
      stats: {
        responseTime: '< 24h',
        responseRate: '100%',
        activeConnections: '24/7',
      },
    },
    rootEasterEgg: {
      emoji: '🔐',
      title: '根访问权限已解锁！',
      message: '恭喜！你找到了一个秘密彩蛋。这表明你是有毅力和观察力的人——这正是我在开发同事身上寻找的品质！',
    },
    sudoSuEasterEgg: {
      emoji: '⚠️',
      title: '根访问权限被拒绝！',
      message: '你想去哪儿，伙计？ 👀',
    },
    notFound: {
      error: '哎呀！出错了。',
      code: '404',
      message: '加油，你能做到...',
    },
    modal: {
      skills: '技能',
      backend: '后端',
      devops: 'DevOps',
      frontend: '前端',
      tools: '工具',
      close: '关闭',
      stars: '星标',
      visitGithub: '访问 GitHub',
      profileUrl: 'profile.pablo.dev',
      characterStats: '角色统计',
      skillsDescription: '技能和技术属性结构',
      categoryNames: {
        backend: '后端',
        devops: 'DevOps',
        tools: '工具',
        softSkills: '软技能',
      },
      projectModal: {
        language: '语言',
        forks: '分支',
        featuresTitle: '主要功能',
        previewTitle: '项目预览',
        minimize: '最小化',
        maximize: '最大化',
      },
    },
    profile: {
      name: 'Pablo Bento Soares',
      title: 'Dev & DevOps 爱好者',
      class: '全栈开发者',
      bio: '一位热衷于自动化、可扩展性和清晰代码的开发者。始终寻求学习和分享知识。',
    },
    common: {
      close: '关闭',
    },
    projects: {
      api_backend_login: {
        title: 'API 后端登录',
        description: '使用 Node.js 开发的强大 JWT 身份验证 API，作为生产就绪的模板。采用现代安全机制实现 JWT 令牌、bcrypt 密码加密和结构良好的 RESTful 端点。适合需要安全且可扩展登录系统的项目。',
        features: ['JWT 身份验证', 'Bcrypt 加密', 'RESTful API', '数据验证', '可重用模板'],
      },
      ipablo: {
        title: 'ipablo',
        description: '个人项目库，包含项目文档、自动化脚本和实验项目。作为持续学习档案和开发最佳实践参考。',
        features: ['项目文档', '自动化脚本', '最佳实践', '技术参考'],
      },
      ipablo_dev: {
        title: 'ipablo.dev',
        description: '使用 React 和 TypeScript 开发的现代交互式作品集。采用午夜紫色主题展示项目，具有无限滚动卡片、项目模态窗口和 macOS 浏览器模拟。实现了 UX/UI 最佳实践和流畅动画效果。',
        features: ['交互式作品集', '无限滚动', '项目模态窗口', '深色/浅色主题', '响应式设计', 'macOS 浏览器模拟器'],
      },
      crud_with_jpa: {
        title: 'JPA 增删改查',
        description: '使用 JPA (Java 持久化 API) 的完整 CRUD 模式实现。演示数据持久化、对象关系映射和 Java 数据库操作的最佳实践。',
        features: ['完整 CRUD', 'JPA/Hibernate', 'ORM 映射', '数据库操作', '设计模式'],
      },
      imerssao_alura_consumindo_api: {
        title: 'Alura 沉浸式 - 消费 API',
        description: 'Alura 沉浸式项目，专注于消费外部 API。实现 HTTP 请求、JSON 数据处理和 Web 服务集成。展示 Java 中 REST API 集成的最佳实践。',
        features: ['API 消费', 'HTTP 请求', 'JSON 处理', 'Web 集成', '教育项目'],
      },
      imerssao_alura_criando_api: {
        title: 'Alura 沉浸式 - 创建 API',
        description: 'Alura 沉浸式项目，专注于创建 RESTful API。演示 API 设计原则、端点结构、数据验证和 Java 架构最佳实践。',
        features: ['API 创建', 'RESTful 设计', '结构化端点', '数据验证', '清洁架构'],
      },
    },
    stats: {
      linux: 'Linux & Unix 系统',
      windows: 'Windows 服务器与桌面',
      docker: 'Docker 与容器化',
      kubernetes: 'Kubernetes 与编排',
      aws: 'AWS 云服务',
      cicd: 'CI/CD 与自动化',
      java: 'Java 与 Spring Boot',
      python: 'Python 与自动化脚本',
      javascript: 'JavaScript 与 Node.js',
      networking: '网络与协议',
      hardware: '硬件与架构',
      bash: 'Bash 与 Shell 脚本',
      git: 'Git 与版本控制',
      sql: 'SQL 与数据库管理',
      monitoring: '监控与可观测性',
      iac: '基础设施即代码',
      problemSolving: '问题解决',
      troubleshooting: '系统故障排除',
    },
  },
};

