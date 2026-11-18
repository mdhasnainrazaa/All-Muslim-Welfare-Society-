import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Target, Compass, Sparkles } from 'lucide-react';
import { organisation } from '../../data/organisation';

const MissionVision = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-brand-forest text-white relative overflow-hidden">
      {/* Background Subtle Motifs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C6A45C_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {t('missionVision.tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
            Guiding Our Purpose & Aspirations
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto my-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 hover:border-brand-gold/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-brand-gold text-brand-dark shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {t('missionVision.missionTitle')}
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg text-brand-light leading-relaxed font-medium italic border-l-2 border-brand-gold pl-4 my-4">
                "{organisation.mission.statement}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <span className="text-xs text-brand-light/70 block">
                Proposed institutional draft statement defining our daily operational commitment.
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 hover:border-brand-gold/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-brand-gold text-brand-dark shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {t('missionVision.visionTitle')}
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg text-brand-light leading-relaxed font-medium italic border-l-2 border-brand-gold pl-4 my-4">
                "{organisation.vision.statement}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <span className="text-xs text-brand-light/70 block">
                Proposed strategic vision mapping our long-term societal aspirations.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;
