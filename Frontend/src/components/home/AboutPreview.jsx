import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Community Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card border border-brand-border">
                <img
                  src="/images/human-rights-day-felicitation-2018.jpg"
                  alt="AMWSI Community Advocates at World Human Rights Day Felicitation"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                />
              </div>

              {/* Inset Credibility Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-cream border border-brand-gold/40 p-4 rounded-xl shadow-md max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-dark block">
                      Dedicated to Humanity
                    </span>
                    <span className="text-[11px] text-brand-secondaryText">
                      Inclusive community development without discrimination.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-deep text-xs font-semibold uppercase tracking-wider">
              <span>Organisation Profile</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-dark tracking-tight leading-tight">
              {t('intro.heading')}
            </h2>

            <div className="w-12 h-1 bg-brand-gold rounded-full" />

            <p className="text-base sm:text-lg text-brand-secondaryText leading-relaxed">
              {t('intro.text')}
            </p>

            <p className="text-sm text-brand-secondaryText leading-relaxed">
              Our initiatives prioritize long-term empowerment by combining educational advocacy, preventive health communication, and humanitarian community relief. We believe that lasting societal transformation starts by nurturing children's education and strengthening community solidarity.
            </p>

            {/* Three Key Focus Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-brand-dark">
                  Encouraging educational access, student mentorship, and scholarship awareness for underserved youth.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-brand-dark">
                  Disseminating preventive public health information and organizing medical awareness circles.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-brand-dark">
                  Coordinating community solidarity and dignified humanitarian support for families in distress.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                to="/about"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                {t('intro.readMore')}
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
