import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { articles } from '../data/articles';
import { 
  Calendar, 
  User, 
  Newspaper, 
  Share2, 
  Copy, 
  Check, 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  Info,
  BookOpen,
  Facebook,
  Twitter
} from 'lucide-react';

const ArticleDetails = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | AMWSI Archive`;
      window.scrollTo(0, 0);
    }
  }, [article]);

  if (!article || !article.published) {
    return <Navigate to="/news" replace />;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.published)
    .slice(0, 2);

  return (
    <div className={`bg-brand-subtle/30 min-h-screen ${article.isRtl ? 'rtl' : ''}`}>
      <Breadcrumb
        items={[
          { label: "News & Media", path: "/news" },
          { label: article.category, path: "/news" },
          { label: article.title, path: `/news/${article.slug}` }
        ]}
      />

      {/* Article Header Banner */}
      <section className="bg-brand-deep text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-bold uppercase tracking-wider border border-white/20">
              {article.category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-brand-gold text-brand-dark text-xs font-bold uppercase tracking-wider">
              {article.language.toUpperCase()}
            </span>
          </div>

          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight ${
            article.isRtl ? 'font-urdu text-right text-3xl sm:text-4xl leading-loose' : ''
          }`}>
            {article.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-brand-light/80 pt-2 border-t border-white/15">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>{article.displayDate}</span>
            </div>

            <div className="flex items-center gap-1.5 font-medium">
              <Newspaper className="w-4 h-4 text-brand-gold" />
              <span>{article.publication}</span>
            </div>

            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>{article.readTime}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Article Body */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-brand-border bg-white">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="p-3 bg-brand-cream/60 border-t border-brand-border text-[11px] text-brand-secondaryText text-center">
                  * Archival image documentation accompanying article publication records.
                </div>
              </div>

              {/* Archival Context Disclosure */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-amber-900 block">
                    Historical Publication Notice:
                  </span>
                  <p className="leading-relaxed">
                    {article.historicalNotice}
                  </p>
                </div>
              </div>

              {/* Author Attribution Card */}
              <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-deep flex items-center justify-center shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-secondaryText font-bold block">
                    Author / Columnist
                  </span>
                  <h4 className="text-base font-bold text-brand-dark">
                    {article.author.name}
                  </h4>
                  <p className="text-xs text-brand-secondaryText mt-0.5 leading-relaxed">
                    {article.author.note}
                  </p>
                </div>
              </div>

              {/* Article Content Render */}
              <article 
                className={`bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-brand-border shadow-card prose max-w-none text-brand-darkText leading-relaxed ${
                  article.isRtl ? 'font-urdu text-right text-xl leading-loose' : 'font-sans'
                }`}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share & Back Controls */}
              <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-deep hover:text-brand-dark transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  <span>Back to All Articles</span>
                </Link>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-brand-secondaryText uppercase tracking-wider">
                    Share:
                  </span>

                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-lg bg-brand-cream hover:bg-brand-border text-brand-dark text-xs flex items-center gap-1.5 transition-colors border border-brand-border"
                    title="Copy Article Link"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-brand-forest" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-brand-cream hover:bg-brand-border text-brand-dark transition-colors border border-brand-border"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5 text-blue-600" />
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-brand-cream hover:bg-brand-border text-brand-dark transition-colors border border-brand-border"
                    title="Share on X / Twitter"
                  >
                    <Twitter className="w-3.5 h-3.5 text-sky-500" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: TOC & Related */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Table of Contents */}
              {article.toc && article.toc.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-card space-y-3 sticky top-24">
                  <div className="flex items-center gap-2 pb-2 border-b border-brand-border text-brand-forest">
                    <BookOpen className="w-4 h-4" />
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-dark">
                      Table of Contents
                    </h4>
                  </div>
                  <nav className="space-y-2">
                    {article.toc.map((tocItem) => (
                      <a
                        key={tocItem.id}
                        href={`#${tocItem.id}`}
                        className="block text-xs text-brand-secondaryText hover:text-brand-deep hover:translate-x-1 rtl:hover:-translate-x-1 transition-all py-1"
                      >
                        {tocItem.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Related Articles */}
              <div className="bg-brand-cream/40 rounded-3xl p-6 border border-brand-border space-y-4">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-dark pb-2 border-b border-brand-border">
                  Related Historical Articles
                </h4>
                <div className="space-y-4">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/news/${rel.slug}`}
                      className="block p-3.5 rounded-xl bg-white border border-brand-border hover:border-brand-deep transition-all group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold block mb-1">
                        {rel.publication} • {rel.displayDate}
                      </span>
                      <h5 className="text-xs font-bold text-brand-dark group-hover:text-brand-deep transition-colors line-clamp-2">
                        {rel.title}
                      </h5>
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

export default ArticleDetails;
