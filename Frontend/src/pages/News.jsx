import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { articles } from '../data/articles';
import { 
  Newspaper, 
  Calendar, 
  User, 
  ArrowRight, 
  Filter, 
  Languages, 
  Info,
  Clock
} from 'lucide-react';

const categories = [
  "All",
  "Articles",
  "Press Coverage",
  "News",
  "Awareness"
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLang, setActiveLang] = useState("all");

  useEffect(() => {
    document.title = "News, Articles & Media Archive | AMWSI";
  }, []);

  // Filter only published articles (no unapproved partisan commentary)
  const publishedArticles = articles.filter(a => a.published);

  const filteredArticles = publishedArticles.filter(art => {
    const matchesCat = activeCategory === "All" || art.category === activeCategory;
    const matchesLang = activeLang === "all" || art.language === activeLang;
    return matchesCat && matchesLang;
  });

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "News & Media", path: "/news" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Media Archive & Publications
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              News, Articles & Media Records
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              Archival opinion articles, public health reports, press coverage, and educational discourse published across English, Hindi, and Urdu media outlets.
            </p>
          </div>
        </div>
      </section>

      {/* Archival & Permissions Notice */}
      <section className="bg-white border-b border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-2.5 text-xs text-brand-secondaryText">
            <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <span>
              <strong>Archival Context Notice:</strong> Articles featured in this archive were published in historical news outlets (2011–2021). They are catalogued for public reference and educational research. Politically partisan content is withheld pending legal review.
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Content Controls */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-brand-border">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-brand-secondaryText uppercase tracking-wider mr-2 hidden md:inline-block">
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-deep text-white shadow-sm'
                      : 'bg-white text-brand-secondaryText hover:bg-brand-cream border border-brand-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Language Filter */}
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-brand-forest shrink-0" />
              <span className="text-xs font-bold text-brand-secondaryText uppercase tracking-wider">
                Language:
              </span>
              <select
                value={activeLang}
                onChange={(e) => setActiveLang(e.target.value)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-brand-border text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-deep"
              >
                <option value="all">All Languages</option>
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="ur">اردو (Urdu)</option>
              </select>
            </div>

          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
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
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-brand-deep text-white shadow-sm">
                        {article.category}
                      </span>
                      <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-dark shadow-sm">
                        {article.language.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-brand-secondaryText mb-3">
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-brand-forest" />
                        <span>{article.displayDate}</span>
                      </span>
                      <span>•</span>
                      <span className="truncate max-w-[120px] font-medium text-brand-forest">
                        {article.publication}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold font-heading text-brand-dark mb-2 group-hover:text-brand-deep transition-colors ${
                      article.isRtl ? 'font-urdu text-right text-xl leading-relaxed' : ''
                    }`}>
                      {article.title}
                    </h3>

                    <p className={`text-xs text-brand-secondaryText leading-relaxed line-clamp-3 mb-4 ${
                      article.isRtl ? 'font-urdu text-right text-sm' : ''
                    }`}>
                      {article.summary}
                    </p>

                    <div className="text-[11px] text-brand-secondaryText font-medium pt-2 border-t border-brand-border/60">
                      Author: {article.author.name}
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 pb-6 pt-2 border-t border-brand-border/60 flex items-center justify-between">
                  <Link
                    to={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-deep group-hover:text-brand-goldHover transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-brand-secondaryText">
                    {article.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-brand-border p-8">
              <Newspaper className="w-12 h-12 text-brand-border mx-auto mb-3" />
              <h3 className="text-base font-bold text-brand-dark">No articles match your selected filter</h3>
              <p className="text-xs text-brand-secondaryText mt-1">Please try choosing another category or language filter.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default News;
