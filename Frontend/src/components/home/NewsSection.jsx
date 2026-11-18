import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { articles } from '../../data/articles';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

const NewsSection = () => {
  const { t } = useLanguage();
  // Filter only published articles (no unapproved partisan commentary)
  const publishedArticles = articles.filter(a => a.published).slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-deep text-xs font-semibold uppercase tracking-wider mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Media & Publications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-dark tracking-tight">
              {t('newsSection.title')}
            </h2>
            <p className="text-base text-brand-secondaryText mt-2">
              {t('newsSection.subtitle')}
            </p>
          </div>

          <Button
            to="/news"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0 self-start md:self-auto"
          >
            {t('newsSection.allNews')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publishedArticles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-brand-border flex flex-col justify-between editorial-card group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-brand-dark">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-brand-deep text-white shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-brand-secondaryText mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-forest" />
                      <span>{article.displayDate}</span>
                    </span>
                    <span>•</span>
                    <span className="truncate max-w-[120px] font-medium">
                      {article.author.name}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-deep transition-colors line-clamp-2 ${article.isRtl ? 'font-urdu text-right text-xl leading-relaxed' : ''}`}>
                    {article.title}
                  </h3>

                  <p className={`text-xs text-brand-secondaryText leading-relaxed line-clamp-3 mb-4 ${article.isRtl ? 'font-urdu text-right text-sm' : ''}`}>
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Footer link */}
              <div className="px-6 pb-6 pt-2 border-t border-brand-border/60">
                <Link
                  to={`/news/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-deep group-hover:text-brand-goldHover transition-colors"
                >
                  <span>{t('newsSection.readMore')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
