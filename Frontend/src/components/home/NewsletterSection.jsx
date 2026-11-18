import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react';

const NewsletterSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage(t('newsletter.error'));
      return;
    }

    setStatus('success');
    setErrorMessage('');
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-20 bg-brand-deep text-white relative overflow-hidden">
      {/* Decorative background arcs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-forest rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold rounded-full opacity-10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-gold flex items-center justify-center mx-auto mb-4 border border-white/20">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight mb-3">
          {t('newsletter.heading')}
        </h2>

        <p className="text-base text-brand-light/90 max-w-xl mx-auto mb-8">
          {t('newsletter.text')}
        </p>

        {status === 'success' ? (
          <div className="p-4 rounded-xl bg-white/10 border border-brand-gold/60 max-w-lg mx-auto flex items-center justify-center gap-3 text-brand-gold">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium text-white">{t('newsletter.success')}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder={t('newsletter.placeholder')}
                aria-label="Email address for subscription"
                className="flex-1 px-4 py-3 rounded-xl bg-white text-brand-darkText placeholder-brand-secondaryText/70 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold border-0 shadow-sm"
              />
              <Button
                type="submit"
                variant="gold"
                size="md"
                icon={Send}
                iconPosition="right"
                className="shrink-0"
              >
                {t('newsletter.button')}
              </Button>
            </div>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-rose-200 mt-2">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <p className="text-[11px] text-brand-light/60 mt-3">
              We respect your privacy. No spam. You may unsubscribe at any time.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};

export default NewsletterSection;
