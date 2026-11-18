import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-brand-deep text-white shadow-lg hover:bg-brand-dark hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-brand-gold/60 focus:outline-none focus:ring-2 focus:ring-brand-gold"
    >
      <ArrowUp className="w-5 h-5 text-brand-gold" />
    </button>
  );
};

export default BackToTop;
