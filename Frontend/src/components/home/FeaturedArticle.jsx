import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { articles } from '../../data/articles';
import { Newspaper, Calendar, User, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const FeaturedArticle = () => {
  const { t } = useLanguage();
  const article = articles.find(a => a.id === "the-way-forward-in-covid-19-era") || articles[0];

  return (
    <section className="py-16 sm:py-24 bg-brand-subtle/50 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl border border-brand-border shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image Section */}
            <div className="lg:col-span-5 relative bg-brand-dark min-h-[300px]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-gold text-brand-dark text-xs font-bold uppercase tracking-wider">
                  Archival Publication
                </span>
                <p className="text-xs text-brand-light/90">
                  Published in {article.publication} • {article.displayDate}
                </p>
              </div>
            </div>

            {/* Right Editorial Summary */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-brand-secondaryText pb-2 border-b border-brand-border">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-brand-forest" />
                    <span>{article.displayDate}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-brand-forest" />
                    <span>{article.author.name}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 font-medium text-brand-forest">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{article.publication}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-dark tracking-tight leading-tight">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-base text-brand-secondaryText leading-relaxed">
                  {article.summary}
                </p>

                {/* 3 Priorities highlighted */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-brand-light/60 border border-brand-deep/15">
                    <span className="text-xs font-bold text-brand-deep block mb-1">Priority 1</span>
                    <span className="text-xs text-brand-darkText font-medium block">
                      Healthcare Infrastructure & PHCs
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-light/60 border border-brand-deep/15">
                    <span className="text-xs font-bold text-brand-deep block mb-1">Priority 2</span>
                    <span className="text-xs text-brand-darkText font-medium block">
                      Agriculture & Rural Economy
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-light/60 border border-brand-deep/15">
                    <span className="text-xs font-bold text-brand-deep block mb-1">Priority 3</span>
                    <span className="text-xs text-brand-darkText font-medium block">
                      Education & Learning Recovery
                    </span>
                  </div>
                </div>

                {/* Archival Note */}
                <div className="p-3 rounded-lg bg-brand-cream border border-brand-border text-xs text-brand-secondaryText flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>
                    <strong>Archival Context:</strong> This 2021 historical opinion article reflects contemporary pandemic analysis. Author affiliation with AMWSI is pending formal confirmation, and contents are presented for archival reading.
                  </span>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between">
                <Button
                  to={`/news/${article.slug}`}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {t('featuredArticle.readArticle')}
                </Button>

                <span className="text-xs text-brand-secondaryText hidden sm:inline-block">
                  {article.readTime}
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedArticle;
