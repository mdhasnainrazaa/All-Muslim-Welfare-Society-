import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { programmes } from '../data/programmes';
import { 
  GraduationCap, 
  HeartPulse, 
  Users, 
  CheckCircle2, 
  Target, 
  Calendar, 
  MapPin, 
  Info, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

const categoryIcons = {
  Education: GraduationCap,
  Healthcare: HeartPulse,
  "Community Welfare": Users
};

const ProgrammeDetails = () => {
  const { slug } = useParams();
  const programme = programmes.find(p => p.slug === slug);

  useEffect(() => {
    if (programme) {
      document.title = `${programme.title} | AMWSI Programmes`;
      window.scrollTo(0, 0);
    }
  }, [programme]);

  if (!programme) {
    return <Navigate to="/programmes" replace />;
  }

  const Icon = categoryIcons[programme.category] || Users;

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb
        items={[
          { label: "Programmes", path: "/programmes" },
          { label: programme.category, path: `/programmes#${programme.category.toLowerCase().replace(/\s+/g, '-')}` },
          { label: programme.title, path: `/programmes/${programme.slug}` }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold border border-brand-gold/30 text-xs font-semibold">
              <Icon className="w-3.5 h-3.5" />
              <span>{programme.category} Priority</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {programme.title}
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              {programme.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-brand-border bg-white">
                <img
                  src={programme.heroImage}
                  alt={programme.title}
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>

              {/* Programme Overview */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">
                  Programme Overview & Vision
                </h3>
                <div className="w-12 h-1 bg-brand-gold rounded-full" />
                <p className="text-base text-brand-darkText leading-relaxed">
                  {programme.overview}
                </p>
              </div>

              {/* Core Objectives */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">
                  Key Strategic Objectives
                </h3>
                <div className="w-12 h-1 bg-brand-gold rounded-full" />
                
                <div className="space-y-3 pt-2">
                  {programme.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-brand-darkText">
                      <CheckCircle2 className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planned Activities */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">
                  Key Activities & Interventions
                </h3>
                <div className="w-12 h-1 bg-brand-gold rounded-full" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {programme.activities.map((act, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-brand-cream/50 border border-brand-border text-xs text-brand-darkText leading-relaxed flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-brand-light text-brand-deep font-bold flex items-center justify-center shrink-0 text-[11px]">
                        {i + 1}
                      </span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Info Box */}
              <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-card space-y-4">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-dark pb-2 border-b border-brand-border">
                  Programme Details
                </h4>

                <div className="space-y-3 text-xs text-brand-secondaryText">
                  <div>
                    <span className="font-bold text-brand-dark block">Sector Category:</span>
                    <span>{programme.category}</span>
                  </div>

                  <div>
                    <span className="font-bold text-brand-dark block">Target Demographics:</span>
                    <span>{programme.targetCommunity}</span>
                  </div>

                  <div>
                    <span className="font-bold text-brand-dark block">Geographical Outreach:</span>
                    <span>{programme.location}</span>
                  </div>

                  <div className="pt-2 border-t border-brand-border">
                    <span className="font-bold text-brand-forest block mb-1">Administrative Note:</span>
                    <p className="text-[11px] leading-relaxed text-brand-secondaryText">
                      {programme.verificationNote}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border space-y-2">
                  <Button
                    to="/get-involved#volunteer"
                    variant="primary"
                    size="md"
                    className="w-full text-center"
                    icon={HeartHandshake}
                    iconPosition="left"
                  >
                    Volunteer for Initiative
                  </Button>

                  <Button
                    to="/donate"
                    variant="gold"
                    size="md"
                    className="w-full text-center"
                  >
                    Support this Initiative
                  </Button>
                </div>
              </div>

              {/* Other Programmes links */}
              <div className="bg-brand-cream/50 rounded-3xl p-6 border border-brand-border space-y-3">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-dark">
                  Other Focus Areas
                </h4>
                <div className="space-y-2">
                  {programmes.filter(p => p.id !== programme.id).map(p => (
                    <Link
                      key={p.id}
                      to={`/programmes/${p.slug}`}
                      className="block p-3 rounded-xl bg-white border border-brand-border hover:border-brand-deep transition-all text-xs font-semibold text-brand-dark hover:text-brand-deep"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammeDetails;
