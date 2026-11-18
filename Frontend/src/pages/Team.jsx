import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { teamMembers, teamCategories } from '../data/team';
import { 
  Users, 
  Linkedin, 
  Facebook, 
  Info, 
  ShieldCheck, 
  UserCheck, 
  Sparkles,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    document.title = "Our Team & Leadership | All Muslim Welfare Society India";
  }, []);

  const filteredMembers = selectedCategory === "all"
    ? teamMembers
    : teamMembers.filter(m => m.category === selectedCategory);

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Our Team", path: "/team" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Institutional Leadership & Governance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Our Leadership & Advisory Council
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              Committed individuals and community elders guiding our social welfare mandate with ethical stewardship and transparent governance.
            </p>
          </div>
        </div>
      </section>

      {/* Governance & Status Disclosure Alert */}
      <section className="bg-white border-b border-brand-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-4 rounded-2xl bg-brand-cream/80 border border-brand-gold/40 flex items-start gap-3.5 text-xs text-brand-secondaryText">
            <Info className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-brand-dark block text-sm">
                Administrative Verification Notice:
              </span>
              <p className="leading-relaxed">
                In strict adherence to governance and compliance transparency, executive designations and board member profiles are published upon receipt of verified legal appointments and signed affirmations. Danish Anwer's official executive designation and electoral committee records are undergoing archival confirmation. Unverified biographies or fictitious credentials are fully excluded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-16 sm:py-20 bg-brand-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? 'bg-brand-deep text-white shadow-sm'
                  : 'bg-white text-brand-secondaryText hover:bg-brand-cream border border-brand-border'
              }`}
            >
              All Profiles
            </button>
            {teamCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-deep text-white shadow-sm'
                    : 'bg-white text-brand-secondaryText hover:bg-brand-cream border border-brand-border'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-brand-border shadow-card flex flex-col sm:flex-row editorial-card"
              >
                {/* Photo */}
                <div className="sm:w-48 h-56 sm:h-auto shrink-0 relative bg-brand-dark">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-light text-brand-deep">
                        {member.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-brand-dark">
                      {member.name}
                    </h3>
                    {member.alternateSpelling && (
                      <span className="text-xs text-brand-secondaryText block">
                        (Also referenced as: {member.alternateSpelling})
                      </span>
                    )}

                    <p className="text-xs font-semibold text-brand-forest mt-1 mb-2">
                      {member.designation}
                    </p>

                    <p className="text-xs text-brand-secondaryText leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-border/60 space-y-2">
                    {member.statusNote && (
                      <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
                        {member.statusNote}
                      </div>
                    )}

                    <div className="flex items-center gap-3 pt-1">
                      {member.socialLinks?.facebook && (
                        <a
                          href={member.socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-secondaryText hover:text-brand-deep transition-colors"
                          aria-label={`${member.name} Facebook`}
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                      )}
                      {member.socialLinks?.linkedin && (
                        <span className="text-brand-secondaryText/40 cursor-not-allowed" title="LinkedIn Profile Pending">
                          <Linkedin className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Invitation to Join Volunteer Council */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card max-w-4xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-deep flex items-center justify-center mx-auto">
              <Users className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold font-heading text-brand-dark">
              Join Our National Volunteer Network
            </h3>

            <p className="text-sm text-brand-secondaryText max-w-2xl mx-auto leading-relaxed">
              We welcome educationists, medical professionals, legal scholars, and grassroots social workers who wish to volunteer their expertise for societal advancement.
            </p>

            <div className="pt-2">
              <Button
                to="/get-involved#volunteer"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Register as a Volunteer
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Team;
