import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Button from './Button';
import { navItems } from '../../data/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Heart, 
  ShieldCheck, 
  Mail, 
  Leaf
} from 'lucide-react';

const Header = () => {
  const { t, isRtl } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  return (
    <>
      {/* Top Institutional Micro-Bar - Visible above the header on both Mobile & Desktop */}
      <div className="relative z-50 bg-[#0B3B24] text-white text-[11px] py-1.5 px-3 sm:px-6 lg:px-8 border-b border-white/10 font-sans">
        <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-2">
          
          {/* Desktop/Tablet Left Tagline */}
          <div className="hidden md:flex items-center gap-4 text-brand-light/90">
            <span className="flex items-center gap-1.5 font-medium">
              <Leaf className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>National Social Welfare Initiative</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="text-white/80 font-normal">
              Education • Healthcare Awareness • Community Welfare
            </span>
          </div>

          {/* Mobile Left Indicator */}
          <div className="flex md:hidden items-center gap-1 text-[11px] font-medium text-brand-light/90">
            <Leaf className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span className="font-bold tracking-wider text-white text-[11px]">AMWSI</span>
          </div>

          {/* Right: Language Selector & Donate Now Button - Always visible on mobile & desktop */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <LanguageSwitcher />

            <Link
              to="/donate"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-lg bg-[#0E4A28] hover:bg-[#08331B] text-white text-xs sm:text-[13px] font-bold shadow-sm border border-white/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span>{t('nav.donateNow')}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 ${
          scrolled 
            ? 'shadow-md border-b border-brand-border py-2' 
            : 'border-b border-brand-border py-2.5'
        }`}
      >
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand: Logo + Divider + Name */}
          <Link to="/" className="flex items-center group focus:outline-none shrink-0 mr-3">
            <img 
              src="/logo.png" 
              alt="All Muslim Welfare Society India" 
              className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full object-contain shadow-sm border border-brand-border/80 bg-white transition-transform duration-300 group-hover:scale-105" 
            />

            {/* Vertical hairline divider */}
            <div className="hidden sm:block h-10 w-[1.5px] bg-brand-border mx-3 shrink-0" />

            <div className="flex flex-col justify-center text-left rtl:text-right">
              <span className="font-heading font-extrabold text-[14px] sm:text-[15px] lg:text-[16px] text-brand-dark leading-tight tracking-tight uppercase group-hover:text-brand-deep transition-colors">
                ALL MUSLIM WELFARE
              </span>
              <span className="font-heading font-extrabold text-[14px] sm:text-[15px] lg:text-[16px] text-brand-dark leading-tight tracking-tight uppercase group-hover:text-brand-deep transition-colors">
                SOCIETY INDIA
              </span>
              <span className="text-[9px] sm:text-[9.5px] lg:text-[10px] font-bold text-brand-gold tracking-[0.16em] uppercase mt-0.5">
                EDUCATION • HEALTHCARE • COMMUNITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: SINGLE LINE FOR EACH TERM */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse text-[13px] font-medium text-brand-darkText">
            {navItems.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isActive = location.pathname === item.path || 
                (item.children && item.children.some(child => location.pathname === child.path));

              if (hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative py-2"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors focus:outline-none ${
                        isActive 
                          ? 'text-brand-deep font-bold' 
                          : 'text-brand-darkText hover:text-brand-deep hover:bg-brand-cream/60'
                      }`}
                      aria-expanded={openDropdown === item.label}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                        openDropdown === item.label ? 'rotate-180 text-brand-deep' : 'text-brand-secondaryText'
                      }`} />

                      {/* Active indicator underline matching screenshot */}
                      {isActive && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-brand-deep rounded-full" />
                      )}
                    </button>

                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 rtl:right-0 rtl:left-auto pt-1 w-56 z-50">
                        <div className="bg-white rounded-xl shadow-card border border-brand-border py-2 animate-in fade-in zoom-in-95 duration-100">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 text-xs whitespace-nowrap transition-colors ${
                                location.pathname === subItem.path
                                  ? 'bg-brand-light text-brand-deep font-bold'
                                  : 'text-brand-darkText hover:bg-brand-cream/80 hover:text-brand-deep'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-2.5 py-2.5 whitespace-nowrap transition-colors flex flex-col items-center ${
                      isActive 
                        ? 'text-brand-deep font-bold' 
                        : 'text-brand-darkText hover:text-brand-deep hover:bg-brand-cream/60 rounded-lg'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="whitespace-nowrap">{item.label}</span>
                      {/* Active green line underneath */}
                      {isActive && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-brand-deep rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Right Controls: Hamburger Toggle */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-dark hover:bg-brand-cream/80 focus:outline-none focus:ring-2 focus:ring-brand-deep"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 rtl:left-0 rtl:right-auto max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-cream/40">
              <div className="flex items-center gap-2.5">
                <img src="/logo.png" alt="AMWSI Emblem" className="w-9 h-9 rounded-full object-contain bg-white border border-brand-border shadow-sm" />
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-xs text-brand-dark leading-tight">
                    AMWSI
                  </span>
                  <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider">
                    Social Welfare India
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-brand-secondaryText hover:text-brand-dark hover:bg-brand-border/40"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = mobileExpandedSection === item.label;

                if (hasChildren) {
                  return (
                    <div key={item.label} className="border-b border-brand-border/50 pb-1">
                      <button
                        onClick={() => setMobileExpandedSection(isExpanded ? null : item.label)}
                        className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-brand-dark hover:bg-brand-cream/80"
                      >
                        <span className="whitespace-nowrap">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 text-brand-secondaryText transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="pl-4 rtl:pr-4 rtl:pl-0 space-y-1 py-1 bg-brand-cream/30 rounded-lg">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block py-2 px-3 text-xs rounded-md whitespace-nowrap ${
                                location.pathname === subItem.path
                                  ? 'bg-brand-light text-brand-deep font-bold'
                                  : 'text-brand-secondaryText hover:text-brand-dark hover:bg-brand-border/30'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                        isActive 
                          ? 'bg-brand-light text-brand-deep font-bold' 
                          : 'text-brand-dark hover:bg-brand-cream/80'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}

              <div className="pt-4 border-t border-brand-border mt-4">
                <Link
                  to="/transparency"
                  className="flex items-center gap-2 py-2 px-3 text-xs font-medium text-brand-secondaryText hover:text-brand-dark whitespace-nowrap"
                >
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>Trust & Transparency</span>
                </Link>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-brand-border bg-brand-cream/50 space-y-3">
              <Button
                to="/donate"
                variant="primary"
                size="md"
                icon={Heart}
                iconPosition="left"
                className="w-full text-center whitespace-nowrap"
              >
                {t('nav.donateNow')}
              </Button>
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
