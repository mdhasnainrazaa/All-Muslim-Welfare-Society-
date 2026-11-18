import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { campaigns } from '../data/campaigns';
import { Landmark, Calendar, ArrowRight, ShieldCheck, Info } from 'lucide-react';

const Campaigns = () => {
  useEffect(() => {
    document.title = "Our Campaigns | All Muslim Welfare Society India (AMWSI)";
  }, []);

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Campaigns", path: "/campaigns" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Civic & Educational Advocacy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Advocacy & Public Campaigns
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              Historical and ongoing community campaigns advancing educational opportunities, healthcare awareness, and social equity in underserved regions.
            </p>
          </div>
        </div>
      </section>

      {/* Neutral Non-Partisan Disclaimer */}
      <section className="bg-white border-b border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-2.5 text-xs text-brand-secondaryText">
            <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <span>
              <strong>Non-Partisan Advocacy Principle:</strong> All advocacy initiatives highlighted are documented as public civic engagement for educational and social development. AMWSI maintains strict non-partisan neutrality and does not endorse or affiliate with any political party.
            </span>
          </div>
        </div>
      </section>

      {/* Campaigns Listing */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          {campaigns.map((camp) => (
            <div
              key={camp.id}
              className="bg-white rounded-3xl overflow-hidden border border-brand-border shadow-card editorial-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Image */}
                <div className="lg:col-span-5 relative min-h-[300px] bg-brand-dark">
                  <img
                    src={camp.bannerImage}
                    alt={camp.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-brand-deep text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                      {camp.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-dark tracking-tight mb-1">
                      {camp.title}
                    </h2>
                    <p className="text-xs font-semibold text-brand-forest uppercase tracking-wider mb-4">
                      {camp.subtitle}
                    </p>

                    <p className="text-sm text-brand-darkText leading-relaxed mb-6">
                      {camp.summary}
                    </p>

                    {/* Timeline Highlights */}
                    <div className="space-y-3 pt-2 border-t border-brand-border/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-goldHover flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Key Historical Milestones</span>
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {camp.timeline.slice(0, 2).map((item, i) => (
                          <div key={i} className="p-3 rounded-xl bg-brand-cream/60 border border-brand-border">
                            <span className="font-bold text-brand-forest block">{item.year} ({item.month})</span>
                            <span className="text-brand-dark font-medium block truncate">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                    <Button
                      to={`/campaigns/${camp.slug}`}
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                    >
                      Explore Campaign & Timeline
                    </Button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
