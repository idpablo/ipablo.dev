export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export interface ProjectDescription {
  enhancedDescription: string;
  features: string[];
  technologies: string[];
  hasPreview: boolean;
  githubPages?: boolean;
  previewUrl?: string;
}

export interface ProjectData extends Record<string, ProjectDescription> {}
