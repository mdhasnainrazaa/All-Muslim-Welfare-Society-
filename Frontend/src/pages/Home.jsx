import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import FocusAreas from '../components/home/FocusAreas';
import MissionVision from '../components/home/MissionVision';
import CampaignPreview from '../components/home/CampaignPreview';
import FeaturedArticle from '../components/home/FeaturedArticle';
import WhyWorkMatters from '../components/home/WhyWorkMatters';
import GetInvolvedPreview from '../components/home/GetInvolvedPreview';
import NewsSection from '../components/home/NewsSection';
import GalleryPreview from '../components/home/GalleryPreview';
import NewsletterSection from '../components/home/NewsletterSection';

const Home = () => {
  useEffect(() => {
    document.title = "All Muslim Welfare Society India | Education, Healthcare & Social Welfare";
  }, []);

  return (
    <div className="space-y-0">
      {/* Section 1: Hero Banner */}
      <Hero />

      {/* Section 2: Organisation Introduction */}
      <AboutPreview />

      {/* Section 3: Our Focus Areas */}
      <FocusAreas />

      {/* Section 4: Our Mission and Vision */}
      <MissionVision />

      {/* Section 5: Our Campaigns (AMU Kishanganj Centre) */}
      <CampaignPreview />

      {/* Section 6: Featured Article */}
      <FeaturedArticle />

      {/* Section 7: Why Our Work Matters */}
      <WhyWorkMatters />

      {/* Section 8: Get Involved */}
      <GetInvolvedPreview />

      {/* Section 9: Latest News & Updates */}
      <NewsSection />

      {/* Section 10: Gallery Preview */}
      <GalleryPreview />

      {/* Section 11: Newsletter CTA */}
      <NewsletterSection />
    </div>
  );
};

export default Home;
