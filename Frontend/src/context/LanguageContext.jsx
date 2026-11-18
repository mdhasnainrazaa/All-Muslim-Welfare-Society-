import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import ur from '../locales/ur.json';

const translations = { en, hi, ur };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('amwsi_lang') || 'en';
  });

  const isRtl = language === 'ur';

  useEffect(() => {
    localStorage.setItem('amwsi_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    
    // Switch font classes on body
    document.body.classList.remove('font-sans', 'font-devanagari', 'font-urdu');
    if (language === 'ur') {
      document.body.classList.add('font-urdu');
    } else if (language === 'hi') {
      document.body.classList.add('font-devanagari');
    } else {
      document.body.classList.add('font-sans');
    }
  }, [language, isRtl]);

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English
        let fallback = translations['en'];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl, t }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-urdu' : language === 'hi' ? 'font-devanagari' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
