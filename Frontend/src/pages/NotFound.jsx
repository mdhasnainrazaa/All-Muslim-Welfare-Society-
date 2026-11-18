import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-brand-cream/30 min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-deep flex items-center justify-center mx-auto text-2xl font-extrabold font-heading">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold font-heading text-brand-dark">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
            The page you are looking for may have been moved, updated, or is undergoing archival verification.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Return to Home
          </Button>

          <Button
            to="/contact"
            variant="outline"
            size="md"
            className="w-full sm:w-auto"
          >
            Contact Secretariat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
