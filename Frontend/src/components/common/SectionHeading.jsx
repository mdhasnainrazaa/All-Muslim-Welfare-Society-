import React from 'react';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 border ${
          light 
            ? 'bg-white/10 text-brand-gold border-white/20' 
            : 'bg-brand-light text-brand-deep border-brand-deep/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
          {badge}
        </span>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading tracking-tight leading-tight mb-4 ${
          light ? 'text-white' : 'text-brand-dark'
        }`}>
          {title}
        </h2>
      )}

      {/* Decorative hairline */}
      <div className={`w-12 h-1 rounded-full mb-4 ${light ? 'bg-brand-gold' : 'bg-brand-gold'} ${
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
      }`} />

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-brand-light/90' : 'text-brand-secondaryText'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
