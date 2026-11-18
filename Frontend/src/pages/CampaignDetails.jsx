import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { campaigns } from '../data/campaigns';
import { 
  Landmark, 
  Calendar, 
  Info, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  FileText,
  AlertTriangle 
} from 'lucide-react';

const CampaignDetails = () => {
  const { slug } = useParams();
  const campaign = campaigns.find(c => c.slug === slug);

  useEffect(() => {
    if (campaign) {
      document.title = `${campaign.title} | AMWSI Campaigns`;
      window.scrollTo(0, 0);
    }
  }, [campaign]);

  if (!campaign) {
    return <Navigate to="/campaigns" replace />;
  }

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb
        items={[
          { label: "Campaigns", path: "/campaigns" },
          { label: campaign.title, path: `/campaigns/${campaign.slug}` }
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              <Landmark className="w-3.5 h-3.5" />
              <span>{campaign.category}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {campaign.title}
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              {campaign.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Campaign Details */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Featured Banner */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-brand-border bg-white">
                <img
                  src={campaign.bannerImage}
                  alt={campaign.title}
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>

              {/* Historical Context Notice (CRITICAL COMPLIANCE NOTICE) */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3 shadow-sm">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-amber-900 block">
                    Important Compliance & Historical Ownership Clarification:
                  </span>
                  <p className="leading-relaxed">
                    {campaign.historicalDisclaimer}
                  </p>
                </div>
              </div>

              {/* Campaign Background */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card space-y-4">
                <h3 className="text-2xl font-bold font-heading text-brand-dark">
                  Historical Background & Regional Context
                </h3>
                <div className="w-12 h-1 bg-brand-gold rounded-full" />
                <p className="text-base text-brand-darkText leading-relaxed">
                  {campaign.summary}
                </p>
                <p className="text-sm text-brand-secondaryText leading-relaxed">
                  The Seemanchal belt in northeastern Bihar has historically endured some of the lowest human development and higher educational participation indicators in India. When the Union Government and Aligarh Muslim University explored the establishment of regional off-campus study centres, civil society members recognized the transformative potential for minority and rural youth across Bihar, West Bengal, and surrounding eastern states.
                </p>
              </div>

              {/* Interactive Timeline */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-light text-brand-deep">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-brand-dark">
                      Campaign & Allotment Timeline
                    </h3>
                    <p className="text-xs text-brand-secondaryText">Chronological milestones of community advocacy and state sanction</p>
                  </div>
                </div>

                <div className="relative border-l-2 border-brand-deep/30 ml-4 space-y-8 pl-6 pt-2">
                  {campaign.timeline.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Node circle */}
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-deep border-4 border-white shadow-sm group-hover:bg-brand-gold transition-colors" />

                      <div className="bg-brand-cream/40 p-5 rounded-2xl border border-brand-border group-hover:border-brand-deep/30 transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-light text-brand-deep">
                            {item.year}
                          </span>
                          <span className="text-xs font-semibold text-brand-forest">
                            {item.month}
                          </span>
                        </div>

                        <h4 className="text-base font-bold font-heading text-brand-dark mb-1">
                          {item.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Civil Society Advocacy Role */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card space-y-4">
                <h3 className="text-2xl font-bold font-heading text-brand-dark">
                  Community Advocacy & Civil Participation
                </h3>
                <div className="w-12 h-1 bg-brand-gold rounded-full" />
                <p className="text-sm text-brand-darkText leading-relaxed">
                  {campaign.advocacyRole}
                </p>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Advocacy efforts were carried out through peaceful delegations, public seminars, educational conventions, and representations to relevant statutory departments. AMWSI upholds the collective memory of this public movement as an inspiring example of constructive, democratic civil advocacy for institutional learning.
                </p>
              </div>

              {/* Newspaper References */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card space-y-4">
                <div className="flex items-center gap-2 text-brand-forest">
                  <FileText className="w-5 h-5" />
                  <h4 className="font-heading font-bold text-base uppercase tracking-wider text-brand-dark">
                    Archival Press References
                  </h4>
                </div>
                <div className="space-y-3">
                  {campaign.newspaperReferences?.map((ref, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-brand-cream/60 border border-brand-border text-xs">
                      <span className="font-bold text-brand-dark block">{ref.source} ({ref.period})</span>
                      <span className="text-brand-secondaryText">{ref.note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Archival Press Scans & Contemporary Media */}
              {campaign.archivalClippings && (
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-card space-y-6">
                  <div className="flex items-center gap-2 text-brand-forest">
                    <BookOpen className="w-5 h-5" />
                    <h4 className="font-heading font-bold text-base uppercase tracking-wider text-brand-dark">
                      Archival Press Scans & Contemporary Records
                    </h4>
                  </div>
                  <p className="text-xs text-brand-secondaryText">
                    Photographic documentation of published news reports covering the 15-member civic delegation meetings in New Delhi.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {campaign.archivalClippings.map((clip, idx) => (
                      <div key={idx} className="group rounded-2xl overflow-hidden border border-brand-border bg-brand-cream/30 flex flex-col justify-between shadow-sm">
                        <div className="overflow-hidden bg-black/5">
                          <img
                            src={clip.image}
                            alt={clip.caption}
                            className="w-full h-60 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 bg-white border-t border-brand-border">
                          <p className="text-xs text-brand-secondaryText leading-relaxed">
                            {clip.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-card space-y-4">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-dark pb-2 border-b border-brand-border">
                  Campaign Information
                </h4>

                <div className="space-y-3 text-xs text-brand-secondaryText">
                  <div>
                    <span className="font-bold text-brand-dark block">Sector:</span>
                    <span>Higher Education Infrastructure</span>
                  </div>

                  <div>
                    <span className="font-bold text-brand-dark block">Region:</span>
                    <span>Kishanganj / Seemanchal, Bihar</span>
                  </div>

                  <div>
                    <span className="font-bold text-brand-dark block">Status:</span>
                    <span>Historical Movement Documentation</span>
                  </div>

                  <div className="pt-2 border-t border-brand-border">
                    <span className="font-bold text-brand-forest block mb-1">Non-Partisan Affiliation:</span>
                    <p className="text-[11px] leading-relaxed text-brand-secondaryText">
                      Documentation reflects civic and educational rights advocacy, without affiliation to any political party.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    className="w-full text-center"
                  >
                    Campaign Inquiries
                  </Button>
                </div>
              </div>

              {/* Related campaigns list */}
              <div className="bg-brand-cream/50 rounded-3xl p-6 border border-brand-border space-y-3">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-dark">
                  All Campaigns
                </h4>
                <div className="space-y-2">
                  {campaigns.map(c => (
                    <Link
                      key={c.id}
                      to={`/campaigns/${c.slug}`}
                      className={`block p-3 rounded-xl border transition-all text-xs font-semibold ${
                        c.id === campaign.id
                          ? 'bg-brand-deep text-white border-brand-deep'
                          : 'bg-white text-brand-dark border-brand-border hover:border-brand-deep'
                      }`}
                    >
                      {c.title}
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

export default CampaignDetails;
