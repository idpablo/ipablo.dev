import { useState, useEffect, useCallback } from 'react';
import { cacheManager } from '../utils/cache';

interface UseCacheAsyncOptions {
  ttlHours?: number;
  onError?: (error: Error) => void;
}

/**
 * Hook para gerenciar dados com cache automático
 * @param key - Chave única para o cache
 * @param fetchFn - Função assincronous para buscar dados
 * @param options - Opções de configuração
 */
export const useCacheAsync = <T,>(
  key: string,
  fetchFn: () => Promise<T>,
  options: UseCacheAsyncOptions = {}
) => {
  const { ttlHours = 24, onError } = options;
  const [data, setData] = useState<T | null>(() => cacheManager.get<T>(key));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async (forceRefresh = false) => {
    if (forceRefresh) {
      cacheManager.remove(key);
      setData(null);
    } else {
      const cached = cacheManager.get<T>(key);
      if (cached) {
        setData(cached);
        return;
      }
    }

    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      cacheManager.set(key, result, ttlHours);
      setData(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, [key, fetchFn, ttlHours, onError]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data,
    isLoading,
    error,
    refetch: () => fetch(true),
    clearCache: () => cacheManager.remove(key),
  };
};
