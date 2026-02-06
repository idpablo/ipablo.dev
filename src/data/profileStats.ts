export interface ProfileStat {
  nameKey: string; // Translation key for the stat name
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
      nameKey: 'linux',
      level: 100,
      maxLevel: 100,
      experience: 100,
      category: 'devops',
    },
    {
      nameKey: 'windows',
      level: 100,
      maxLevel: 100,
      experience: 100,
      category: 'devops',
    },
    {
      nameKey: 'docker',
      level: 90,
      maxLevel: 100,
      experience: 90,
      category: 'devops',
    },
    {
      nameKey: 'kubernetes',
      level: 85,
      maxLevel: 100,
      experience: 85,
      category: 'devops',
    },
    {
      nameKey: 'aws',
      level: 80,
      maxLevel: 100,
      experience: 80,
      category: 'devops',
    },
    {
      nameKey: 'cicd',
      level: 88,
      maxLevel: 100,
      experience: 88,
      category: 'devops',
    },
    {
      nameKey: 'java',
      level: 75,
      maxLevel: 100,
      experience: 75,
      category: 'backend',
    },
    {
      nameKey: 'python',
      level: 78,
      maxLevel: 100,
      experience: 78,
      category: 'backend',
    },
    {
      nameKey: 'javascript',
      level: 72,
      maxLevel: 100,
      experience: 72,
      category: 'backend',
    },
    {
      nameKey: 'networking',
      level: 92,
      maxLevel: 100,
      experience: 92,
      category: 'tools',
    },
    {
      nameKey: 'hardware',
      level: 88,
      maxLevel: 100,
      experience: 88,
      category: 'tools',
    },
    {
      nameKey: 'bash',
      level: 95,
      maxLevel: 100,
      experience: 95,
      category: 'devops',
    },
    {
      nameKey: 'git',
      level: 90,
      maxLevel: 100,
      experience: 90,
      category: 'tools',
    },
    {
      nameKey: 'sql',
      level: 82,
      maxLevel: 100,
      experience: 82,
      category: 'backend',
    },
    {
      nameKey: 'monitoring',
      level: 85,
      maxLevel: 100,
      experience: 85,
      category: 'devops',
    },
    {
      nameKey: 'iac',
      level: 83,
      maxLevel: 100,
      experience: 83,
      category: 'devops',
    },
    {
      nameKey: 'problemSolving',
      level: 92,
      maxLevel: 100,
      experience: 92,
      category: 'soft-skills',
    },
    {
      nameKey: 'troubleshooting',
      level: 95,
      maxLevel: 100,
      experience: 95,
      category: 'soft-skills',
    },
  ],
};

