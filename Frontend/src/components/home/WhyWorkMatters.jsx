import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BookOpen, HeartPulse, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: BookOpen,
    title: "Educational Opportunities",
    desc: "Quality education breaks multi-generational cycles of poverty. Fostering learning access, school retention, and scholarship literacy empowers underprivileged youth to build dignified futures."
  },
  {
    icon: HeartPulse,
    title: "Healthcare Awareness & Literacy",
    desc: "Preventable illnesses and delayed medical interventions strain marginalized families. Health awareness circles empower communities with life-saving hygiene practices and preventive knowledge."
  },
  {
    icon: Users,
    title: "Grassroots Community Participation",
    desc: "Sustainable social change requires active community leadership. Encouraging citizens to participate in civic problem-solving creates resilient and self-sustaining neighborhoods."
  },
  {
    icon: ShieldCheck,
    title: "Social Welfare & Inclusive Development",
    desc: "True societal progress is measured by the protection extended to the most vulnerable—ensuring widows, orphans, senior citizens, and marginalized individuals are treated with equity and dignity."
  }
];

const WhyWorkMatters = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text / Pillars Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-deep text-xs font-semibold uppercase tracking-wider">
              <span>Societal Impact</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-dark tracking-tight leading-tight">
              {t('whyWorkMatters.title')}
            </h2>

            <p className="text-base sm:text-lg text-brand-secondaryText leading-relaxed">
              {t('whyWorkMatters.subtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-5 rounded-2xl bg-brand-cream/40 border border-brand-border flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-deep flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold font-heading text-brand-dark mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-secondaryText leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Editorial Image Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-brand-border">
              <img
                src="/images/human-rights-day-award-2018.jpg"
                alt="Community Empowerment & Human Rights Felicitation"
                className="w-full h-72 sm:h-80 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent flex items-end p-6">
                <span className="text-white text-sm font-semibold">
                  Promoting equality, human rights, and social welfare across diverse communities.
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-brand-light/70 border border-brand-deep/20 text-xs text-brand-darkText">
              <span className="font-bold text-brand-deep block mb-1">
                Ethical Organisational Commitment:
              </span>
              <p className="text-brand-secondaryText leading-relaxed">
                AMWSI prioritizes verifiable institutional integrity over decorative numbers. We refrain from claiming unverified impact metrics or fabricated statistics, focusing strictly on transparent community engagement.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyWorkMatters;
