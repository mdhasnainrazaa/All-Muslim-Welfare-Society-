import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeading from '../common/SectionHeading';
import { organisation } from '../../data/organisation';
import { GraduationCap, HeartPulse, Users, ArrowRight } from 'lucide-react';

const iconMap = {
  GraduationCap: GraduationCap,
  HeartPulse: HeartPulse,
  Users: Users
};

const imageMap = {
  education: "/images/indian-education-classroom.jpg",
  healthcare: "/images/indian-healthcare-awareness.jpg",
  "community-welfare": "/images/indian-community-welfare.jpg"
};

const FocusAreas = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-brand-cream/30 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Core Pillars"
          title={t('focusAreas.title')}
          subtitle={t('focusAreas.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organisation.focusAreas.map((area) => {
            const Icon = iconMap[area.icon] || Users;
            const image = imageMap[area.id];

            return (
              <div 
                key={area.id}
                className="bg-white rounded-2xl overflow-hidden shadow-card border border-brand-border flex flex-col editorial-card group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-brand-dark">
                  <img
                    src={image}
                    alt={area.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-white text-brand-deep shadow-md">
                    <Icon className="w-5 h-5 text-brand-deep" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-brand-dark mb-2 group-hover:text-brand-deep transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-sm text-brand-secondaryText leading-relaxed mb-6">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-border/60">
                    <Link
                      to={area.path}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-deep group-hover:text-brand-goldHover transition-colors"
                    >
                      <span>{t('focusAreas.exploreMore')}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-brand-secondaryText">
            * Proposed programme categories subject to ongoing refinement and community advisory feedback.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FocusAreas;
