import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { campaigns } from '../../data/campaigns';
import { Landmark, Calendar, ArrowRight, Info, CheckCircle } from 'lucide-react';

const CampaignPreview = () => {
  const { t } = useLanguage();
  const campaign = campaigns[0]; // AMU Kishanganj Centre Campaign

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-deep text-xs font-semibold uppercase tracking-wider mb-3">
              <Landmark className="w-3.5 h-3.5" />
              <span>{t('campaigns.featuredTitle')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-dark tracking-tight">
              {campaign.title}
            </h2>
            <p className="text-base text-brand-secondaryText mt-2 max-w-2xl">
              {campaign.subtitle}
            </p>
          </div>

          <Button
            to="/campaigns"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0 self-start md:self-auto"
          >
            All Campaigns
          </Button>
        </div>

        {/* Featured Campaign Container */}
        <div className="bg-brand-cream/40 rounded-3xl border border-brand-border p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-brand-darkText leading-relaxed">
                {campaign.summary}
              </p>

              {/* Timeline Milestones */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-goldHover flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span>Historical Movement Timeline</span>
                </h4>

                <div className="border-l-2 border-brand-gold/40 pl-4 space-y-4">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-forest"></div>
                    <span className="text-xs font-bold text-brand-forest">2011</span>
                    <p className="text-sm font-semibold text-brand-dark">Land Allotment Process & Public Mobilisation</p>
                    <p className="text-xs text-brand-secondaryText">Community stakeholders advocated for expanded higher educational opportunities in Seemanchal.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-forest"></div>
                    <span className="text-xs font-bold text-brand-forest">2011 (Cabinet Clearance)</span>
                    <p className="text-sm font-semibold text-brand-dark">Bihar Government Approved 224 Acres</p>
                    <p className="text-xs text-brand-secondaryText">Formal state sanction and land allocation in Kishanganj for the off-campus centre.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-forest"></div>
                    <span className="text-xs font-bold text-brand-forest">2014</span>
                    <p className="text-sm font-semibold text-brand-dark">Centre Officially Commenced Academic Sessions</p>
                    <p className="text-xs text-brand-secondaryText">Academic programs commenced, opening accessible university pathways for regional students.</p>
                  </div>
                </div>
              </div>

              {/* Historical Disclaimer Alert */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Historical Context Notice:</strong> The milestones listed above commemorate the collective public initiative and official establishment of the AMU Kishanganj Centre by public authorities and university administrations, in which community members and civil society participated. They are presented for public educational awareness, not as proprietary AMWSI achievements.
                </span>
              </div>

              <div className="pt-2">
                <Button
                  to={`/campaigns/${campaign.slug}`}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {t('campaigns.exploreCampaign')}
                </Button>
              </div>

            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-card border border-brand-border bg-white">
                <img
                  src={campaign.bannerImage}
                  alt="AMU Kishanganj Centre Higher Education"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="p-4 bg-white border-t border-brand-border">
                  <span className="text-xs font-semibold text-brand-dark block">
                    Higher Education Infrastructure in Bihar
                  </span>
                  <span className="text-[11px] text-brand-secondaryText block">
                    Documenting civic engagement for educational advancement in underserved regions.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CampaignPreview;
