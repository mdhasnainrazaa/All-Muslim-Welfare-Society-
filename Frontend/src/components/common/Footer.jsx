import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { organisation } from '../../data/organisation';
import { footerLinks } from '../../data/navigation';
import { 
  Facebook, 
  Youtube, 
  Instagram, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  ArrowRight,
  ArrowUpRight,
  Clock,
  Heart,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A2618] text-white relative">
      {/* Top Gold & Green Accent Border Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-gold via-emerald-500 to-brand-gold" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        
        {/* Main Grid: 4 Crisp Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
              <img 
                src="/logo.png" 
                alt="All Muslim Welfare Society India Emblem" 
                className="w-12 h-12 rounded-full bg-white p-0.5 border border-brand-gold/70 shadow-sm object-contain shrink-0" 
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight uppercase leading-tight group-hover:text-brand-gold transition-colors">
                  ALL MUSLIM WELFARE SOCIETY INDIA
                </span>
                <span className="text-[10px] font-bold text-brand-gold tracking-[0.14em] uppercase mt-0.5">
                  EDUCATION • HEALTHCARE • COMMUNITY
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed max-w-sm pt-1">
              A national non-profit social welfare organisation committed to promoting educational equity, public healthcare awareness, and dignified community welfare across India.
            </p>

            {/* Official Social Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold block mb-2.5">
                Official Channels
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={organisation.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 text-white/90"
                  aria-label="Official Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <span 
                  className="w-8 h-8 rounded-lg bg-white/5 text-white/30 flex items-center justify-center cursor-not-allowed border border-white/5" 
                  title="YouTube (Official Link Pending)"
                >
                  <Youtube className="w-4 h-4" />
                </span>

                <span 
                  className="w-8 h-8 rounded-lg bg-white/5 text-white/30 flex items-center justify-center cursor-not-allowed border border-white/5" 
                  title="Instagram (Official Link Pending)"
                >
                  <Instagram className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold border-b border-white/10 pb-2">
              Organisation
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-brand-gold transition-colors inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-gold/60" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/gallery" className="hover:text-brand-gold transition-colors inline-flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-gold/60" />
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-brand-gold transition-colors inline-flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-gold/60" />
                  <span>News & Publications</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Initiatives (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold border-b border-white/10 pb-2">
              Key Focus Areas
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {footerLinks.programmes.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-brand-gold transition-colors inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-gold/60" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <Link 
                to="/donate" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-gold/15 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all text-xs font-bold border border-brand-gold/40"
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Support Our Mission</span>
                <ArrowRight className="w-3 h-3 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Col 4: Secretariat & Governance (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold border-b border-white/10 pb-2">
              Secretariat Desk
            </h4>
            <div className="space-y-2.5 text-xs text-white/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Office Status:</span>
                  <span className="text-[11px] text-white/60 leading-tight block">
                    Central Secretariat address in verification.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Correspondence:</span>
                  <span className="text-[11px] text-white/60 block">
                    contact@amwsi.org.in
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Working Hours:</span>
                  <span className="text-[11px] text-white/60 block">
                    Mon – Sat: 10:00 AM – 5:00 PM IST
                  </span>
                </div>
              </div>

              <div className="pt-1.5">
                <Link 
                  to="/transparency"
                  className="inline-flex items-center gap-1.5 text-[11px] text-brand-gold hover:text-white font-medium transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>View Statutory Transparency Registry</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Crisp Bar: Copyright, Developer Credit & Legal Policies */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between text-[11px] text-white/60 gap-3 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
            <p>© 2026 All Muslim Welfare Society India (AMWSI). All Rights Reserved.</p>
            <span className="hidden sm:inline text-white/30">•</span>
            <p className="text-white/75 flex items-center gap-1.5">
              <span>Maintained & Developed by</span>
              <a 
                href="https://www.linkedin.com/in/md-hasnain-raza/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-white font-medium underline underline-offset-2 transition-colors inline-flex items-center gap-1 focus:outline-none"
              >
                <Linkedin className="w-3 h-3 text-[#0A66C2] bg-white rounded-[2px]" />
                <span>Md Hasnain Raza</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-80" />
              </a>
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white/60">
            <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-brand-gold transition-colors">Donation Policy</Link>
            <span>•</span>
            <Link to="/transparency" className="hover:text-brand-gold transition-colors">Governance</Link>
          </div>
        </div>

        {/* Crisp Non-Profit Disclaimer */}
        <div className="mt-3 pt-3 border-t border-white/5 text-[10px] text-center text-white/40">
          Disclaimer: All Muslim Welfare Society India is an independent, non-governmental, non-partisan social welfare society. Domestic contributions only.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
