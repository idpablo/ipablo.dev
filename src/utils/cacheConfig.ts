import { cacheManager } from './cache';

export const CACHE_KEYS = {
  GITHUB_PROJECTS: 'github_projects',
  PROFILE_DATA: 'profile_data',
  PROJECT_DESCRIPTIONS: 'project_descriptions',
  ABOUT_TIMELINE: 'about_timeline_events',
  ABOUT_BLOCKS: 'about_blocks',
  CONTACT_SKILL_TREE: 'contact_skill_tree',
  CONTACT_STATS: 'contact_stats',
  THEME: 'theme',
  LANGUAGE: 'language',
};

export const CACHE_TTL = {
  API_DATA: 24,
  STATIC_DATA: 365,
  USER_PREFERENCES: 365,
};

export interface CacheConfig {
  key: string;
  ttlHours: number;
}

export const getCacheConfig = (type: keyof typeof CACHE_KEYS): CacheConfig => {
  const key = CACHE_KEYS[type];
  let ttlHours = CACHE_TTL.STATIC_DATA;

  if (type === 'GITHUB_PROJECTS') {
    ttlHours = CACHE_TTL.API_DATA;
  } else if (type.includes('STATIC')) {
    ttlHours = CACHE_TTL.STATIC_DATA;
  }

  return { key, ttlHours };
};

export const getCachedData = <T,>(key: string, fallback: T): T => {
  const cached = cacheManager.get<T>(key);
  return cached || fallback;
};

export const setCachedData = <T,>(key: string, data: T, ttlHours: number = CACHE_TTL.STATIC_DATA) => {
  cacheManager.set(key, data, ttlHours);
};
