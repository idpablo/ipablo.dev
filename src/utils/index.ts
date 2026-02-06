export { cacheManager } from './cache';
export { initializeStaticCache, getProfileDataFromCache, getProjectDescriptionsFromCache } from './staticCache';
export { CACHE_KEYS, CACHE_TTL, getCacheConfig, getCachedData, setCachedData } from './cacheConfig';
export { 
  initializePageCache, 
  getAboutTimelineFromCache, 
  getAboutBlocksFromCache, 
  getContactSkillTreeFromCache, 
  getContactStatsFromCache 
} from './pageCache';


