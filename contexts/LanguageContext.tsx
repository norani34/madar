import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Direction } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations['ar']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default to Arabic
  const [language, setLanguage] = useState<Language>('ar');
  const [direction, setDirection] = useState<Direction>('rtl');

  useEffect(() => {
    // Update HTML attributes when language changes
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const toggleLanguage = () => {
    if (language === 'ar') {
      setLanguage('en');
      setDirection('ltr');
    } else {
      setLanguage('ar');
      setDirection('rtl');
    }
  };

  const t = (key: keyof typeof translations['ar']) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
