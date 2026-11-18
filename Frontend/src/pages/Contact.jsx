import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { organisation } from '../data/organisation';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building,
  Facebook,
  ShieldCheck 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = "Contact & Inquiries | All Muslim Welfare Society India";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Subject, and Message).');
      setStatus('error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setErrorMsg('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 700);
  };

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Contact Us", path: "/contact" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Secretariat Desk
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Contact & Inquiries
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              We welcome inquiries regarding community welfare initiatives, educational partnerships, volunteer opportunities, and institutional collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-heading text-brand-dark mb-1">
                    Official Secretariat
                  </h3>
                  <p className="text-xs text-brand-secondaryText">
                    All Muslim Welfare Society India (AMWSI)
                  </p>
                </div>

                <div className="space-y-5 text-xs text-brand-secondaryText">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-light text-brand-deep shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-brand-dark block text-xs mb-0.5">
                        Registered Office / Secretariat:
                      </strong>
                      <p className="leading-relaxed">
                        {organisation.contact.address.displayPlaceholder}
                      </p>
                      <span className="text-[10px] text-brand-forest mt-1 block font-medium">
                        * Exact postal premise address undergoing formal compliance notification.
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-light text-brand-deep shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-brand-dark block text-xs mb-0.5">
                        Electronic Correspondence:
                      </strong>
                      <p className="text-brand-dark font-medium">
                        {organisation.contact.email.primary}
                      </p>
                      <p className="text-[11px] text-brand-secondaryText">
                        {organisation.contact.email.inquiries}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-light text-brand-deep shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-brand-dark block text-xs mb-0.5">
                        Secretariat Telephony:
                      </strong>
                      <p className="leading-relaxed">
                        {organisation.contact.phone.displayPlaceholder}
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-light text-brand-deep shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-brand-dark block text-xs mb-0.5">
                        Inquiry Desk Hours:
                      </strong>
                      <p className="leading-relaxed">
                        {organisation.contact.workingHours}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Social channels */}
                <div className="pt-4 border-t border-brand-border">
                  <span className="text-xs font-bold text-brand-dark block mb-2">
                    Verified Social Channel:
                  </span>
                  <a
                    href={organisation.social.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-cream border border-brand-border text-xs font-semibold text-brand-dark hover:text-brand-deep hover:border-brand-deep transition-all"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Official Facebook Page</span>
                  </a>
                </div>

              </div>

              {/* Google Maps / Geolocation Placeholder */}
              <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-card space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-forest block">
                  Geographical Outreach Map
                </span>
                <div className="relative h-48 rounded-2xl bg-brand-cream border border-brand-border overflow-hidden flex flex-col items-center justify-center text-center p-6">
                  <Building className="w-10 h-10 text-brand-forest/60 mb-2" />
                  <span className="text-xs font-bold text-brand-dark">
                    National Outreach Hub
                  </span>
                  <p className="text-[11px] text-brand-secondaryText mt-1 max-w-xs">
                    New Delhi Secretariat & State Chapters (Bihar, UP, Eastern Zonal Coordination).
                  </p>
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-card space-y-6">
              <div className="border-b border-brand-border pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                  Direct Message
                </span>
                <h2 className="text-2xl font-bold font-heading text-brand-dark">
                  Send an Official Inquiry
                </h2>
                <p className="text-xs text-brand-secondaryText mt-1">
                  Please complete the form below. Messages are routed directly to the appropriate executive committee desk.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-brand-light/70 border border-brand-deep/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-sm text-brand-secondaryText max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to All Muslim Welfare Society India. A secretariat representative will review your message and reply via your registered email address.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Subject of Inquiry *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Educational Scholarship Question"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      Message / Communication *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details regarding your inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === 'submitting'}
                      icon={Send}
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      {status === 'submitting' ? 'Transmitting Message...' : 'Transmit Inquiry'}
                    </Button>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
