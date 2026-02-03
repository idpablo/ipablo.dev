export interface ProfileStat {
  name: string;
  level: number;
  maxLevel: number;
  experience: number;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'soft-skills';
  icon?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  level: number;
  class: string;
  bio: string;
  stats: ProfileStat[];
}

export const profileData: ProfileData = {
  name: 'Pablo Bento Soares',
  title: 'Backend & DevOps Engineer',
  level: 28,
  class: 'Infrastructure Specialist',
  bio: 'Desenvolvedor backend e especialista em infraestrutura com forte experiência em DevOps. Apaixonado por automação, escalabilidade e arquitetura de sistemas. Domínio completo de Linux e Windows, com expertise em containerização e orquestração. Quando não estou otimizando pipelines ou configurando clusters, estou explorando hardware, redes ou jogando RPG.',
  stats: [
    {
      name: 'Linux & Unix Systems',
      level: 100,
      maxLevel: 100,
      experience: 100,
      category: 'devops',
    },
    {
      name: 'Windows Server & Desktop',
      level: 100,
      maxLevel: 100,
      experience: 100,
      category: 'devops',
    },
    {
      name: 'Docker & Containerization',
      level: 90,
      maxLevel: 100,
      experience: 90,
      category: 'devops',
    },
    {
      name: 'Kubernetes & Orchestration',
      level: 85,
      maxLevel: 100,
      experience: 85,
      category: 'devops',
    },
    {
      name: 'AWS Cloud Services',
      level: 80,
      maxLevel: 100,
      experience: 80,
      category: 'devops',
    },
    {
      name: 'CI/CD & Automation',
      level: 88,
      maxLevel: 100,
      experience: 88,
      category: 'devops',
    },
    {
      name: 'Java & Spring Boot',
      level: 75,
      maxLevel: 100,
      experience: 75,
      category: 'backend',
    },
    {
      name: 'Python & Automation Scripts',
      level: 78,
      maxLevel: 100,
      experience: 78,
      category: 'backend',
    },
    {
      name: 'JavaScript & Node.js',
      level: 72,
      maxLevel: 100,
      experience: 72,
      category: 'backend',
    },
    {
      name: 'Networking & Protocols',
      level: 92,
      maxLevel: 100,
      experience: 92,
      category: 'tools',
    },
    {
      name: 'Hardware & Architecture',
      level: 88,
      maxLevel: 100,
      experience: 88,
      category: 'tools',
    },
    {
      name: 'Bash & Shell Scripting',
      level: 95,
      maxLevel: 100,
      experience: 95,
      category: 'devops',
    },
    {
      name: 'Git & Version Control',
      level: 90,
      maxLevel: 100,
      experience: 90,
      category: 'tools',
    },
    {
      name: 'SQL & Database Admin',
      level: 82,
      maxLevel: 100,
      experience: 82,
      category: 'backend',
    },
    {
      name: 'Monitoring & Observability',
      level: 85,
      maxLevel: 100,
      experience: 85,
      category: 'devops',
    },
    {
      name: 'Infrastructure as Code',
      level: 83,
      maxLevel: 100,
      experience: 83,
      category: 'devops',
    },
    {
      name: 'Problem Solving',
      level: 92,
      maxLevel: 100,
      experience: 92,
      category: 'soft-skills',
    },
    {
      name: 'System Troubleshooting',
      level: 95,
      maxLevel: 100,
      experience: 95,
      category: 'soft-skills',
    },
  ],
};
