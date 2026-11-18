import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, BookOpen, HeartPulse, Users } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-brand-cream/40 pt-10 pb-16 lg:py-20 border-b border-brand-border">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-light/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Institutional Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-deep/20 text-brand-deep text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span>All Muslim Welfare Society India</span>
              <span className="text-brand-border">|</span>
              <span className="text-brand-forest">Non-Profit Organisation</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold font-heading text-brand-dark tracking-tight leading-[1.18]">
              {t('hero.headline')}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-brand-secondaryText leading-relaxed max-w-2xl">
              {t('hero.subtext')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                to="/programmes"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="font-semibold shadow-md hover:shadow-lg"
              >
                {t('hero.exploreWork')}
              </Button>

              <Button
                to="/get-involved"
                variant="outline"
                size="lg"
                icon={HeartHandshake}
                iconPosition="left"
                className="font-semibold"
              >
                {t('hero.becomeVolunteer')}
              </Button>
            </div>

            {/* Pillar Badges */}
            <div className="pt-6 border-t border-brand-border/80 grid grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/70 border border-brand-border/60">
                <div className="p-1.5 rounded-md bg-brand-light text-brand-deep">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-brand-dark block">Education</span>
                  <span className="text-[11px] text-brand-secondaryText">Learning access</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/70 border border-brand-border/60">
                <div className="p-1.5 rounded-md bg-brand-light text-brand-forest">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-brand-dark block">Healthcare</span>
                  <span className="text-[11px] text-brand-secondaryText">Public health</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/70 border border-brand-border/60">
                <div className="p-1.5 rounded-md bg-brand-light text-brand-goldHover">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-brand-dark block">Community</span>
                  <span className="text-[11px] text-brand-secondaryText">Welfare relief</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Hero Image Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card border */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white bg-white">
                <img
                  src="/images/cgc-educational-award.jpg"
                  alt="Educational and Social Welfare Leadership Felicitation"
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover object-top transform hover:scale-102 transition-transform duration-700"
                />

                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />

                {/* Floating highlight badge on image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-brand-border/80 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-light text-brand-deep">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-dark block">
                        Grassroots Leadership & Advocacy
                      </span>
                      <span className="text-[11px] text-brand-secondaryText block leading-tight">
                        Advancing educational excellence, community health, and social equity.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gold decorative stamp */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-brand-dark px-3 py-1.5 rounded-lg shadow-md text-xs font-bold tracking-wider uppercase border border-white">
                AMWSI
              </div>

              {/* Contextual caption note */}
              <span className="block text-[10px] text-center text-brand-secondaryText/70 mt-2">
                * Archival photograph from institutional educational felicitation.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
