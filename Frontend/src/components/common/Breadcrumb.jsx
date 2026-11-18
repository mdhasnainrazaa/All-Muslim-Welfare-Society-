import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-brand-cream/50 border-b border-brand-border text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 rtl:space-x-reverse text-brand-secondaryText">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-deep transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-brand-border shrink-0 rtl:rotate-180" />
              {isLast ? (
                <span className="font-semibold text-brand-dark truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-brand-deep transition-colors truncate max-w-[150px]">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
