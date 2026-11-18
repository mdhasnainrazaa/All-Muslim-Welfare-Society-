import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';
import ScrollToTopOnRoute from './components/common/ScrollToTopOnRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Programmes from './pages/Programmes';
import ProgrammeDetails from './pages/ProgrammeDetails';
import Campaigns from './pages/Campaigns';
import CampaignDetails from './pages/CampaignDetails';
import News from './pages/News';
import ArticleDetails from './pages/ArticleDetails';
import Gallery from './pages/Gallery';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTopOnRoute />
        <div className="min-h-screen flex flex-col bg-[#FCFAF5]">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/programmes" element={<Programmes />} />
              <Route path="/programmes/:slug" element={<ProgrammeDetails />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/campaigns/:slug" element={<CampaignDetails />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<ArticleDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
