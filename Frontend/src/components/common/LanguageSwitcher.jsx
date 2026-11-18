import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi', native: 'हिंदी', flag: '🇮🇳' },
  { code: 'ur', label: 'Urdu', native: 'اردو', flag: '🇵🇰' }
];

const LanguageSwitcher = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border bg-white text-xs sm:text-[13px] font-semibold text-[#145A32] hover:bg-brand-cream/80 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold whitespace-nowrap"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-[#145A32] shrink-0" />
        <span>{currentLang.native}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#145A32] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-36 rounded-xl bg-white shadow-card border border-brand-border py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-secondaryText border-b border-brand-border mb-1">
            Language / زبان
          </div>
          {languages.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors ${
                  isSelected 
                    ? 'bg-brand-light text-brand-deep font-bold' 
                    : 'text-brand-dark hover:bg-brand-cream/70'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang.native}</span>
                  <span className="text-[10px] text-brand-secondaryText font-normal">({lang.label})</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-deep shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
