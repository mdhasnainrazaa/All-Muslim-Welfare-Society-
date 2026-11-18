import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { HeartHandshake, UserCheck, Heart, ArrowRight } from 'lucide-react';

const GetInvolvedPreview = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: HeartHandshake,
      title: t('getInvolved.volunteerTitle'),
      desc: t('getInvolved.volunteerDesc'),
      btnText: t('getInvolved.volunteerBtn'),
      link: "/get-involved#volunteer",
      badge: "Grassroots Force",
      variant: "primary"
    },
    {
      icon: UserCheck,
      title: t('getInvolved.memberTitle'),
      desc: t('getInvolved.memberDesc'),
      btnText: t('getInvolved.memberBtn'),
      link: "/get-involved#membership",
      badge: "Institutional Growth",
      variant: "secondary"
    },
    {
      icon: Heart,
      title: t('getInvolved.donateTitle'),
      desc: t('getInvolved.donateDesc'),
      btnText: t('getInvolved.donateBtn'),
      link: "/donate",
      badge: "Voluntary Giving",
      variant: "gold"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-cream/30 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Participation"
          title={t('getInvolved.title')}
          subtitle={t('getInvolved.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-brand-border shadow-card flex flex-col justify-between editorial-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-deep flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-cream border border-brand-border text-brand-forest">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-brand-dark mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-brand-secondaryText leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <Button
                    to={card.link}
                    variant={card.variant === 'gold' ? 'gold' : card.variant === 'primary' ? 'primary' : 'outline'}
                    size="md"
                    className="w-full text-center"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    {card.btnText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GetInvolvedPreview;
