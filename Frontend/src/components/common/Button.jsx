import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  target,
  rel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: "bg-brand-deep text-white hover:bg-brand-dark focus:ring-brand-deep shadow-sm hover:shadow active:translate-y-px",
    secondary: "bg-brand-light text-brand-dark hover:bg-brand-light/80 border border-brand-deep/20 focus:ring-brand-deep",
    outline: "bg-transparent text-brand-deep border-2 border-brand-deep hover:bg-brand-deep hover:text-white focus:ring-brand-deep",
    gold: "bg-brand-gold text-brand-dark hover:bg-brand-goldHover font-semibold shadow-sm hover:shadow focus:ring-brand-gold",
    ghost: "bg-transparent text-brand-dark hover:bg-brand-light/60 focus:ring-brand-deep",
    white: "bg-white text-brand-deep hover:bg-brand-cream border border-brand-border shadow-sm focus:ring-white"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon className={`w-4 h-4 shrink-0 transition-transform ${props.iconClassName || ''}`} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={`w-4 h-4 shrink-0 transition-transform ${props.iconClassName || ''}`} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} className={combinedClasses} onClick={onClick} {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled} {...props}>
      {renderContent()}
    </button>
  );
};

export default Button;
