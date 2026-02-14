export const GITHUB_API = {
  BASE_URL: 'https://api.github.com',
  USER: 'idpablo',
  getReposUrl: (user: string) => `${GITHUB_API.BASE_URL}/users/${user}/repos?sort=updated&per_page=6`,
};

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/idpablo',
  LINKEDIN: 'https://www.linkedin.com/in/idpablo/',
  INSTAGRAM: 'https://www.instagram.com/ipablo.dev',
  EMAIL: 'pablo.soares.dev@gmail.com',
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
};

export const THEME_STORAGE_KEY = 'theme';

