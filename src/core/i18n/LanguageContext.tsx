import React, { createContext, useState, useCallback } from 'react';
import { LanguageCode, translations, Translations } from './translations';

interface LanguageContextType {
  currentLanguage: LanguageCode;
  currentTranslations: Translations;
  setLanguage: (lang: LanguageCode) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'preferred-language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): LanguageCode => {
    if (typeof window === 'undefined') return 'pt-BR';
    
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;
    if (savedLanguage) return savedLanguage;
    
    const browserLanguage = navigator.language;
    return browserLanguage?.startsWith('en') ? 'en-US' : 'pt-BR';
  };

  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(getInitialLanguage);

  const handleSetLanguage = useCallback((lang: LanguageCode) => {
    setCurrentLanguage(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }, []);

  const value = {
    currentLanguage,
    currentTranslations: translations[currentLanguage],
    setLanguage: handleSetLanguage,
    t: translations[currentLanguage],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
