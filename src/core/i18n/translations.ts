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
    skills: {
      title: string;
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
      message1: string;
      message2: string;
    };
    secretUnlocked: {
      title: string;
      message: string;
    };
  };
  contact: {
    title: string;
    email: string;
    github: string;
    instagram: string;
    linkedin: string;
    terminalCommands: {
      help: string;
      skillsDescription: string;
      contactsDescription: string;
      courseProgress: string;
      invalidCommand: string;
    };
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
        'Desenvolvedor de software que começou do lado "dark" - infraestrutura. Scripts, servidores, escalabilidade e monitoramento é meu playground. Java, Python e JavaScript rodando nas veias. Alguém que ama tecnologia desde sempre, criando bots, customizando Android e fazendo scripts para pagar as contas.',
      description2:
        'Documentação é meu melhor amigo. Estudo paradigmas e estruturas de algoritmo, mexo com matemática e estatística por trás de IA e treinamento de modelos.',
      devopsMessage: '#DevOPS é cultura.',
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
        title: '🎯 A Odisseia Técnica',
        origin: {
          title: 'Origem da Jornada',
          description: 'O aventureiro nasce. A odisseia técnica começa sem ele saber.',
        },
        infrastructure_guardian: {
          title: 'Guardião da Infraestrutura',
          description: 'Pandemia, estágio em infraestrutura. Linux virou rotina. Tá aí até hoje.',
        },
        infrastructure_analyst: {
          title: 'Analista de Infraestrutura',
          description: 'Efetivado. Redes, servidores, networking. Documentação é meu melhor amigo aqui.',
        },
        java_junior: {
          title: 'Java Junior',
          description: 'Começou a real. Agora tenho que fazer 10 linhas de código fazer sentido em meetings.',
        },
        devops_era: {
          title: 'DevOps Era',
          description: 'Ensinando devs que seu laptop não é servidor e ambiente não é sentimento.',
        },
        eternal_learner: {
          title: 'Eterno Aprendiz',
          description: 'Descobri que quanto mais sênior, menos você sabe. DevOps ainda é meu favorito problema.',
        },
        odyssey_continues: {
          title: 'A Odisseia Continua',
          description: 'Construindo systems, debuggando. Perguntando por que tudo tá broken.',
        },
      },
      story: {
        title: '📖 A História',
        paragraph1:
          'Pablo é um desenvolvedor que começou sua jornada na infraestrutura, aprendendo desde cedo que a base sólida é essencial. Com o passar do tempo, expandiu seus horizontes, dominando múltiplas linguagens de programação e se tornando especialista em automação e escalabilidade.',
        paragraph2:
          'Mas além de código, ele carrega paixões genuínas: a competição saudável do futebol e a paciência meditativa da pesca. Essas experiências moldaram seu caráter como desenvolvedor - disciplina, foco e criatividade.',
      },
      skills: {
        title: '⚽ Paixões',
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
        title: '✨ TESOURO ENCONTRADO! ✨',
        message1: 'Você descobriu que Pablo ama desafios!',
        message2: 'Se você chegou até aqui, você também é um explorador 🗺️',
      },
      secretUnlocked: {
        title: '🔓 SEGREDO DESBLOQUEADO! 🔓',
        message: 'Você é persistente! Essa é a qualidade que mais define bons desenvolvedores.',
      },
    },
    contact: {
      title: 'Contato',
      email: 'Email',
      github: 'GitHub',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      terminalCommands: {
        help: 'Comandos disponíveis: ls, cd, pwd, df, tree, clear, help',
        skillsDescription: 'Estrutura de skills e especialidades técnicas',
        contactsDescription: 'Canais de contato disponíveis',
        courseProgress: 'Progresso em cursos e certificações',
        invalidCommand: 'Comando não encontrado. Digite "help" para ver comandos disponíveis.',
      },
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
        'Software developer who started on the "dark" side - infrastructure. Scripts, servers, scalability and monitoring is my playground. Java, Python and JavaScript running through my veins. Someone who has loved technology since forever, creating bots, customizing Android and writing scripts to pay the bills.',
      description2:
        'Documentation is my best friend. I study paradigms and algorithm structures, diving into the math and statistics behind AI and model training.',
      devopsMessage: '#DevOPS is a culture.',
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
        title: '🎯 The Technical Odyssey',
        origin: {
          title: 'Journey Origins',
          description: 'The adventurer is born. The technical odyssey begins without him knowing.',
        },
        infrastructure_guardian: {
          title: 'Infrastructure Guardian',
          description: 'Pandemic, infrastructure internship. Linux became routine. Still there today.',
        },
        infrastructure_analyst: {
          title: 'Infrastructure Analyst',
          description: 'Made permanent. Networks, servers, networking. Documentation is my best friend here.',
        },
        java_junior: {
          title: 'Java Junior',
          description: 'Things got real. Now I have to make 10 lines of code make sense in meetings.',
        },
        devops_era: {
          title: 'DevOps Era',
          description: 'Teaching devs that their laptop is not a server and environment is not a feeling.',
        },
        eternal_learner: {
          title: 'Eternal Learner',
          description: 'I discovered that the more senior you are, the less you know. DevOps is still my favorite problem.',
        },
        odyssey_continues: {
          title: 'The Odyssey Continues',
          description: 'Building systems, debugging. Asking why everything is broken.',
        },
      },
      story: {
        title: '📖 The Story',
        paragraph1:
          'Pablo is a developer who started his journey in infrastructure, learning early that a solid foundation is essential. Over time, he expanded his horizons, mastering multiple programming languages and becoming an expert in automation and scalability.',
        paragraph2:
          'But beyond code, he carries genuine passions: the healthy competition of soccer and the meditative patience of fishing. These experiences shaped his character as a developer - discipline, focus and creativity.',
      },
      skills: {
        title: '⚽ Passions',
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
        title: '✨ TREASURE FOUND! ✨',
        message1: 'You discovered that Pablo loves challenges!',
        message2: 'If you got here, you\'re an explorer too 🗺️',
      },
      secretUnlocked: {
        title: '🔓 SECRET UNLOCKED! 🔓',
        message: 'You are persistent! That\'s the quality that most defines good developers.',
      },
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      github: 'GitHub',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      terminalCommands: {
        help: 'Available commands: ls, cd, pwd, df, tree, clear, help',
        skillsDescription: 'Structure of skills and technical specialties',
        contactsDescription: 'Available contact channels',
        courseProgress: 'Progress in courses and certifications',
        invalidCommand: 'Command not found. Type "help" to see available commands.',
      },
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
        '从"黑暗"一侧开始的软件开发者 - 基础设施。脚本、服务器、可扩展性和监控是我的游乐场。Java、Python 和 JavaScript 在我的血管中流淌。一个一直热爱技术的人，创建机器人、自定义 Android 并编写脚本来支付账单。',
      description2:
        '文档是我最好的朋友。我研究范例和算法结构，深入研究 AI 和模型训练背后的数学和统计学。',
      devopsMessage: '#DevOPS 是一种文化。',
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
        title: '🎯 技术奥德赛',
        origin: {
          title: '旅程起源',
          description: '冒险家诞生。技术奥德赛在他不知情的情况下开始。',
        },
        infrastructure_guardian: {
          title: '基础设施守护者',
          description: '大流行，基础设施实习。Linux 成为日常。至今仍在这里。',
        },
        infrastructure_analyst: {
          title: '基础设施分析师',
          description: '被永久录用。网络、服务器、网络。文档是我这里最好的朋友。',
        },
        java_junior: {
          title: 'Java 初级开发者',
          description: '现在开始真正工作。现在我必须让 10 行代码在会议中有意义。',
        },
        devops_era: {
          title: 'DevOps 时代',
          description: '教导开发人员他们的笔记本电脑不是服务器，环境不是感受。',
        },
        eternal_learner: {
          title: '永恒的学习者',
          description: '我发现你越资深，你知道的越少。DevOps 仍然是我最喜欢的问题。',
        },
        odyssey_continues: {
          title: '奥德赛继续',
          description: '构建系统，调试。问为什么一切都坏了。',
        },
      },
      story: {
        title: '📖 故事',
        paragraph1:
          'Pablo 是一位开发者，他从基础设施开始了他的旅程，很早就学到了牢固的基础是必不可少的。随着时间的推移，他拓展了视野，掌握了多种编程语言，成为自动化和可扩展性方面的专家。',
        paragraph2:
          '但除了代码之外，他还怀有真挚的热情：足球的健康竞争和钓鱼的冥想式耐心。这些经历塑造了他作为开发者的品格 - 纪律、专注和创意。',
      },
      skills: {
        title: '⚽ 热情',
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
        title: '✨ 发现宝藏! ✨',
        message1: '你发现了 Pablo 喜欢挑战!',
        message2: '如果你来到这里，你也是一个探险家 🗺️',
      },
      secretUnlocked: {
        title: '🔓 秘密已解锁! 🔓',
        message: '你很执着！这是最能定义优秀开发者的品质。',
      },
    },
    contact: {
      title: '联系',
      email: '电子邮件',
      github: 'GitHub',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      terminalCommands: {
        help: '可用命令：ls, cd, pwd, df, tree, clear, help',
        skillsDescription: '技能和技术专长的结构',
        contactsDescription: '可用的联系渠道',
        courseProgress: '课程和认证的进度',
        invalidCommand: '找不到命令。输入 "help" 查看可用命令。',
      },
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
    },
  },
};
