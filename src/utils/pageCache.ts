import { cacheManager } from './cache';
import { CACHE_KEYS, CACHE_TTL } from './cacheConfig';

export const initializePageCache = (page: 'about' | 'contact') => {
  if (page === 'about') {
    const timelineEvents = [
      { date: '07/11/1997', year: 1997, icon: '👶', title: 'Origem da Jornada', description: 'O aventureiro nasce. A odisseia técnica começa sem ele saber.' },
      { date: '2021', year: 2021, icon: '🛡️', title: 'Guardião da Infraestrutura', description: 'Pandemia, estágio em infraestrutura. Linux virou rotina. Tá aí até hoje.' },
      { date: '2022', year: 2022, icon: '🌐', title: 'Analista de Infraestrutura', description: 'Efetivado. Redes, servidores, networking. Documentação é meu melhor amigo aqui.' },
      { date: '2023', year: 2023, icon: '☕', title: 'Java Junior', description: 'Começou a real. Agora tenho que fazer 10 linhas de código fazer sentido em meetings.' },
      { date: '2024', year: 2024, icon: '🐳', title: 'DevOps Era', description: 'Ensinando devs que seu laptop não é servidor e ambiente não é sentimento.' },
      { date: '2025', year: 2025, icon: '🎯', title: 'Aprendiz Eterno', description: 'Nunca paramos de aprender. Cada desafio é uma nova lição.' },
      { date: '2026+', year: 2026, icon: '🚀', title: 'A Odisseia Continua', description: 'O futuro é incerto, mas repleto de possibilidades e desafios emocionantes.' },
    ];

    const blocks = [
      { id: 1, bgColor: '#8B4513', icon: '🏗️', title: 'Construtor', description: 'Começou da infraestrutura, aprendendo a construir os alicerces que sustentam tudo', isSpecial: true },
      { id: 2, bgColor: '#1f4788', icon: '💻', title: 'Explorador Digital', description: 'Java, Python, JavaScript - linguagens que abrem novos mundos de possibilidades' },
      { id: 3, bgColor: '#2d5a2d', icon: '⚙️', title: 'Maestro da Automação', description: 'Scripts que automatizam tarefas e liberam tempo para novas aventuras' },
      { id: 4, bgColor: '#4a3728', icon: '📊', title: 'Guardião da Escalabilidade', description: 'Kubernetes, Docker - ferramentas para expandir impérios digitais' },
      { id: 6, bgColor: '#FF6B6B', icon: '⚽', title: 'Paixão pelo Futebol', description: 'Quando não está codando, está no campo buscando o gol perfeito' },
      { id: 7, bgColor: '#4ECDC4', icon: '🎣', title: 'Pescador Tranquilo', description: 'Paciência, precisão e timing - os mesmos atributos do bom desenvolvedor' },
      { id: 8, bgColor: '#95E1D3', icon: '🌟', title: 'Criador de Sonhos', description: 'Bots, customizações Android e desafios pessoais - sempre criando algo novo' },
    ];

    cacheManager.set(CACHE_KEYS.ABOUT_TIMELINE, timelineEvents, CACHE_TTL.STATIC_DATA);
    cacheManager.set(CACHE_KEYS.ABOUT_BLOCKS, blocks, CACHE_TTL.STATIC_DATA);
  } else if (page === 'contact') {
    const skillTree = {
      skills: { backend: [], devops: [], frontend: [], tools: [] },
      contacts: {
        email: 'mailto:pablo.soares.dev@gmail.com',
        github: 'https://github.com/idpablo',
        linkedin: 'https://www.linkedin.com/in/idpablo/',
        instagram: 'https://www.instagram.com/ipablo.dev',
      },
      courses: [{ name: 'Google Cloud Essentials', progress: 45, category: 'devops' }],
    };

    const stats = [
      { value: '5+', label: 'Anos em DevOps' },
      { value: '50+', label: 'Projetos' },
      { value: '24h', label: 'Suporte' },
    ];

    cacheManager.set(CACHE_KEYS.CONTACT_SKILL_TREE, skillTree, CACHE_TTL.STATIC_DATA);
    cacheManager.set(CACHE_KEYS.CONTACT_STATS, stats, CACHE_TTL.STATIC_DATA);
  }
};

export const getAboutTimelineFromCache = () => {
  return cacheManager.get(CACHE_KEYS.ABOUT_TIMELINE);
};

export const getAboutBlocksFromCache = () => {
  return cacheManager.get(CACHE_KEYS.ABOUT_BLOCKS);
};

export const getContactSkillTreeFromCache = () => {
  return cacheManager.get(CACHE_KEYS.CONTACT_SKILL_TREE);
};

export const getContactStatsFromCache = () => {
  return cacheManager.get(CACHE_KEYS.CONTACT_STATS);
};

