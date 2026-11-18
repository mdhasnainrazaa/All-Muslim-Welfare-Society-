import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { programmes } from '../data/programmes';
import { 
  GraduationCap, 
  HeartPulse, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Target, 
  AlertCircle 
} from 'lucide-react';

const categoryIcons = {
  Education: GraduationCap,
  Healthcare: HeartPulse,
  "Community Welfare": Users
};

const Programmes = () => {
  useEffect(() => {
    document.title = "Our Programmes | All Muslim Welfare Society India (AMWSI)";
  }, []);

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Programmes", path: "/programmes" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Welfare Initiatives
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Community Programmes & Initiatives
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              Targeted social welfare interventions spanning educational access, public health education, and dignified community support across India.
            </p>
          </div>
        </div>
      </section>

      {/* Audit & Compliance Disclaimer */}
      <section className="bg-white border-b border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-brand-secondaryText">
            <AlertCircle className="w-4 h-4 text-brand-gold shrink-0" />
            <span>
              <strong>Transparency Note:</strong> All program metrics, target locations, and beneficiary numbers represent proposed institutional frameworks subject to executive verification before formal publication.
            </span>
          </div>
        </div>
      </section>

      {/* Programme Listing */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {programmes.map((prog, index) => {
            const Icon = categoryIcons[prog.category] || Users;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={prog.id}
                id={prog.category.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white rounded-3xl overflow-hidden border border-brand-border shadow-card editorial-card"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[340px] bg-brand-dark ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={prog.heroImage}
                      alt={prog.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-deep text-white text-xs font-semibold shadow-sm">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{prog.category}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block">
                        Target Focus
                      </span>
                      <p className="text-xs text-brand-light/90">
                        {prog.targetCommunity}
                      </p>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-brand-forest uppercase tracking-wider mb-2">
                        <Target className="w-3.5 h-3.5" />
                        <span>{prog.badge}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-dark tracking-tight">
                        {prog.title}
                      </h2>
                      <p className="text-sm font-medium text-brand-secondaryText mt-1">
                        {prog.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-brand-darkText leading-relaxed">
                      {prog.overview}
                    </p>

                    {/* Objectives Checklist */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                        Key Strategic Objectives:
                      </h4>
                      {prog.objectives.slice(0, 3).map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-brand-secondaryText">
                          <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>

                    {/* Location & Status note */}
                    <div className="p-3 rounded-xl bg-brand-cream border border-brand-border text-xs text-brand-secondaryText flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                      <span><strong>Outreach:</strong> {prog.location}</span>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Button
                        to={`/programmes/${prog.slug}`}
                        variant="primary"
                        size="md"
                        icon={ArrowRight}
                        iconPosition="right"
                      >
                        Detailed Programme Overview
                      </Button>

                      <Button
                        to="/get-involved#volunteer"
                        variant="outline"
                        size="md"
                      >
                        Volunteer for Initiative
                      </Button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Support Our Community Initiatives
          </h2>
          <p className="text-sm sm:text-base text-brand-light/90 max-w-xl mx-auto">
            Your voluntary contribution assists in providing educational materials, public health guidance, and emergency community aid.
          </p>
          <div className="pt-2">
            <Button to="/donate" variant="gold" size="lg">
              Support Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;
