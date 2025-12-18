import React, { createContext, useContext, useState, useEffect } from 'react';
import { CONFIG } from '../config/config-english';
import { CONFIG_SINHALA } from '../config/config-sinhala';
import { SiteConfig } from '../types';

type Language = 'en' | 'si';

interface LanguageContextType {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  config: SiteConfig;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language | null>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('bizsense_lang') as Language;
    if (savedLang) {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    } else {
      // Default to 'en' but don't set language state yet so selector shows
      document.documentElement.lang = 'en';
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('bizsense_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'si' ? 'en' : 'si';
    setLanguage(nextLang);
  };

  const config = language === 'si' ? CONFIG_SINHALA : CONFIG;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, config }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};