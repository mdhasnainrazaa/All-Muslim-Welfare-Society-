import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import { galleryItems, galleryCategories } from '../data/gallery';
import { 
  Image, 
  Calendar, 
  MapPin, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  Info,
  ShieldCheck 
} from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    document.title = "Photo Gallery & Visual Archive | AMWSI";
  }, []);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const currentImage = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Gallery", path: "/gallery" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Visual Archive
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Community Gallery & Archival Moments
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              Photographic documentation of civic meetings, community assemblies, educational conventions, and public health awareness drives.
            </p>
          </div>
        </div>
      </section>

      {/* Archival Privacy & Captioning Disclosure */}
      <section className="bg-white border-b border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-2.5 text-xs text-brand-secondaryText">
            <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <span>
              <strong>Archival Captioning Notice:</strong> Event photographs are preserved for historical record. Captions reflect community activities; unidentified individuals are respectfully kept unlabelled pending official archival cataloging.
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-deep text-white shadow-sm'
                    : 'bg-white text-brand-secondaryText hover:bg-brand-cream border border-brand-border'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group bg-white rounded-2xl overflow-hidden shadow-card border border-brand-border cursor-pointer flex flex-col justify-between editorial-card"
              >
                <div className="relative h-60 overflow-hidden bg-brand-dark">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute top-3 right-3">
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors inline-block">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold block mb-0.5">
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="text-base font-bold font-heading text-brand-dark group-hover:text-brand-deep transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-secondaryText line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {currentImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Navigation Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content Card */}
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-border flex flex-col z-10"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-black max-h-[65vh] flex items-center justify-center overflow-hidden">
              <img
                src={currentImage.imageUrl}
                alt={currentImage.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 bg-white space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-brand-secondaryText pb-2 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-bold text-brand-forest">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentImage.date}</span>
                  </span>
                  {currentImage.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{currentImage.location}</span>
                      </span>
                    </>
                  )}
                </div>

                <span className="text-xs font-semibold text-brand-secondaryText">
                  {selectedImageIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">
                {currentImage.title}
              </h3>

              <p className="text-sm text-brand-secondaryText leading-relaxed">
                {currentImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
