import { cacheManager } from './cache';
import { profileData } from '../data/profileStats';
import { projectDescriptions } from '../data/projectDescriptions';
import { CACHE_KEYS, CACHE_TTL } from './cacheConfig';

export const initializeStaticCache = () => {
  cacheManager.set(CACHE_KEYS.PROFILE_DATA, profileData, CACHE_TTL.STATIC_DATA);
  cacheManager.set(CACHE_KEYS.PROJECT_DESCRIPTIONS, projectDescriptions, CACHE_TTL.STATIC_DATA);
};

export const getProfileDataFromCache = () => {
  return cacheManager.get(CACHE_KEYS.PROFILE_DATA) || profileData;
};

export const getProjectDescriptionsFromCache = () => {
  return cacheManager.get(CACHE_KEYS.PROJECT_DESCRIPTIONS) || projectDescriptions;
};

