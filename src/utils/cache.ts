interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // em milissegundos
}

/**
 * Sistema de cache com localStorage
 * Permite persistir dados com TTL configurável
 */
export const cacheManager = {
  /**
   * Armazena dados no cache
   * @param key - Chave do cache
   * @param data - Dados a serem armazenados
   * @param ttlHours - TTL em horas (padrão: 24 horas = 1 dia)
   */
  set<T>(key: string, data: T, ttlHours: number = 24): void {
    const ttlMs = ttlHours * 60 * 60 * 1000;
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttlMs,
    };
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify(entry));
    } catch (error) {
      console.warn(`Erro ao armazenar cache para ${key}:`, error);
    }
  },

  /**
   * Recupera dados do cache se ainda forem válidos
   * @param key - Chave do cache
   * @returns Dados do cache ou null se expirado/não encontrado
   */
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(`cache_${key}`);
      if (!item) return null;

      const entry: CacheEntry<T> = JSON.parse(item);
      const now = Date.now();
      const isExpired = now - entry.timestamp > entry.ttl;

      if (isExpired) {
        localStorage.removeItem(`cache_${key}`);
        return null;
      }

      return entry.data;
    } catch (error) {
      console.warn(`Erro ao recuperar cache para ${key}:`, error);
      return null;
    }
  },

  /**
   * Remove um item do cache
   */
  remove(key: string): void {
    try {
      localStorage.removeItem(`cache_${key}`);
    } catch (error) {
      console.warn(`Erro ao remover cache para ${key}:`, error);
    }
  },

  /**
   * Limpa todo o cache (todos os itens com prefixo cache_)
   */
  clear(): void {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Erro ao limpar cache:', error);
    }
  },

  /**
   * Obtém info sobre um cache específico
   */
  getInfo(key: string): { expiresIn: number; isExpired: boolean } | null {
    try {
      const item = localStorage.getItem(`cache_${key}`);
      if (!item) return null;

      const entry = JSON.parse(item);
      const now = Date.now();
      const elapsed = now - entry.timestamp;
      const expiresIn = entry.ttl - elapsed;
      const isExpired = expiresIn <= 0;

      return { expiresIn: Math.max(0, expiresIn), isExpired };
    } catch (error) {
      return null;
    }
  },
};

/**
 * Hook para usar cache com dados assincronos
 * Exemplo de uso:
 * const data = useCache('github-repos', () => fetchGitHubProjects(), 24);
 */
export const useCache = <T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttlHours: number = 24,
  dependencies: any[] = []
): { data: T | null; loading: boolean; error: Error | null; refetch: () => Promise<void> } => {
  const [data, setData] = React.useState<T | null>(() => cacheManager.get<T>(key));
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const fetchAndCache = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      cacheManager.set(key, result, ttlHours);
      setData(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      console.error(`Erro ao buscar ${key}:`, error);
    } finally {
      setLoading(false);
    }
  }, [key, fetchFn, ttlHours]);

  React.useEffect(() => {
    const cachedData = cacheManager.get<T>(key);
    if (cachedData) {
      setData(cachedData);
      return;
    }
    fetchAndCache();
  }, [key, ...dependencies]);

  return { data, loading, error, refetch: fetchAndCache };
};

// Necesário importar React para useCache
import React from 'react';
