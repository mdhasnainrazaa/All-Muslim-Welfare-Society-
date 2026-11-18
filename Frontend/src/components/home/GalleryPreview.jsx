import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { galleryItems } from '../../data/gallery';
import { Image, ArrowRight, Eye, X, Calendar, MapPin } from 'lucide-react';

const GalleryPreview = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const previewItems = galleryItems.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-brand-cream/30 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-deep text-xs font-semibold uppercase tracking-wider mb-3">
              <Image className="w-3.5 h-3.5" />
              <span>Visual Archive</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-dark tracking-tight">
              {t('galleryPreview.title')}
            </h2>
            <p className="text-base text-brand-secondaryText mt-2">
              {t('galleryPreview.subtitle')}
            </p>
          </div>

          <Button
            to="/gallery"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0 self-start md:self-auto"
          >
            {t('galleryPreview.viewFull')}
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-card border border-brand-border bg-white cursor-pointer h-64"
            >
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="self-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors inline-block">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold block mb-1">
                    {item.date}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal / Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-brand-border"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-white space-y-2">
                <div className="flex items-center gap-4 text-xs text-brand-secondaryText">
                  <span className="flex items-center gap-1 font-semibold text-brand-forest">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedImage.date}</span>
                  </span>
                  {selectedImage.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{selectedImage.location}</span>
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-dark">
                  {selectedImage.title}
                </h3>

                <p className="text-sm text-brand-secondaryText leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default GalleryPreview;
