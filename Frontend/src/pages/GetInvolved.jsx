import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { 
  HeartHandshake, 
  UserCheck, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  ShieldCheck, 
  FileText,
  Heart
} from 'lucide-react';

const GetInvolved = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('volunteer');

  useEffect(() => {
    document.title = "Get Involved | All Muslim Welfare Society India (AMWSI)";
    if (location.hash === '#membership') {
      setActiveTab('membership');
    } else if (location.hash === '#volunteer') {
      setActiveTab('volunteer');
    }
  }, [location.hash]);

  // Volunteer Form State
  const [vFormData, setVFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    areaOfInterest: 'Education',
    skills: '',
    message: ''
  });
  const [vStatus, setVStatus] = useState('idle'); // idle | submitting | success | error
  const [vError, setVError] = useState('');

  // Membership Form State
  const [mFormData, setMFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    occupation: '',
    membershipInterest: 'Active Community Member'
  });
  const [mStatus, setMStatus] = useState('idle');
  const [mError, setMError] = useState('');

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (!vFormData.fullName.trim() || !vFormData.email.trim() || !vFormData.phone.trim()) {
      setVError('Please complete all required fields (Full Name, Email, and Phone Number).');
      setVStatus('error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(vFormData.email.trim())) {
      setVError('Please provide a valid email address.');
      setVStatus('error');
      return;
    }

    setVStatus('submitting');
    setTimeout(() => {
      setVStatus('success');
      setVError('');
      setVFormData({
        fullName: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        areaOfInterest: 'Education',
        skills: '',
        message: ''
      });
    }, 700);
  };

  const handleMembershipSubmit = (e) => {
    e.preventDefault();
    if (!mFormData.fullName.trim() || !mFormData.email.trim() || !mFormData.phone.trim() || !mFormData.city.trim()) {
      setMError('Please complete all mandatory fields marked with an asterisk (*).');
      setMStatus('error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mFormData.email.trim())) {
      setMError('Please provide a valid email address.');
      setMStatus('error');
      return;
    }

    setMStatus('submitting');
    setTimeout(() => {
      setMStatus('success');
      setMError('');
      setMFormData({
        fullName: '',
        dob: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        occupation: '',
        membershipInterest: 'Active Community Member'
      });
    }, 700);
  };

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Get Involved", path: "/get-involved" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Community Engagement
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Get Involved with AMWSI
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              Step forward as a volunteer or apply for official membership to strengthen education, healthcare awareness, and social welfare across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Interface */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Tab Selector */}
          <div className="flex rounded-2xl bg-white p-1.5 border border-brand-border shadow-sm mb-10">
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'volunteer'
                  ? 'bg-brand-deep text-white shadow-sm'
                  : 'text-brand-secondaryText hover:text-brand-dark'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Volunteer Registration</span>
            </button>

            <button
              onClick={() => setActiveTab('membership')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'membership'
                  ? 'bg-brand-deep text-white shadow-sm'
                  : 'text-brand-secondaryText hover:text-brand-dark'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Membership Application</span>
            </button>
          </div>

          {/* TAB 1: VOLUNTEER FORM */}
          {activeTab === 'volunteer' && (
            <div id="volunteer" className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-card space-y-6">
              <div className="border-b border-brand-border pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                  Grassroots Action
                </span>
                <h2 className="text-2xl font-bold font-heading text-brand-dark">
                  Volunteer Application Form
                </h2>
                <p className="text-xs text-brand-secondaryText mt-1">
                  Join our volunteer corps to support educational seminars, public health awareness drives, and community assistance.
                </p>
              </div>

              {vStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-brand-light/70 border border-brand-deep/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">
                    Volunteer Application Received!
                  </h3>
                  <p className="text-sm text-brand-secondaryText max-w-md mx-auto">
                    Thank you for stepping forward to serve the community. Our state coordinator will review your application and reach out to you via email or phone.
                  </p>
                  <Button
                    onClick={() => setVStatus('idle')}
                    variant="outline"
                    size="sm"
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  {vError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{vError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={vFormData.fullName}
                        onChange={(e) => setVFormData({ ...vFormData, fullName: e.target.value })}
                        placeholder="e.g. Mohammad Arif"
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
                        value={vFormData.email}
                        onChange={(e) => setVFormData({ ...vFormData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={vFormData.phone}
                        onChange={(e) => setVFormData({ ...vFormData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        value={vFormData.state}
                        onChange={(e) => setVFormData({ ...vFormData, state: e.target.value })}
                        placeholder="e.g. Bihar / Delhi / UP"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        City / District
                      </label>
                      <input
                        type="text"
                        value={vFormData.city}
                        onChange={(e) => setVFormData({ ...vFormData, city: e.target.value })}
                        placeholder="e.g. Kishanganj"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      Primary Area of Interest
                    </label>
                    <select
                      value={vFormData.areaOfInterest}
                      onChange={(e) => setVFormData({ ...vFormData, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none bg-white"
                    >
                      <option value="Education">Educational Awareness & Mentorship</option>
                      <option value="Healthcare">Public Health & Medical Camps</option>
                      <option value="Community Relief">Community Welfare & Relief</option>
                      <option value="Legal & Rights">Legal Literacy & Citizen Rights</option>
                      <option value="Communications">Media, Content & Social Outreach</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      Relevant Skills / Profession
                    </label>
                    <input
                      type="text"
                      value={vFormData.skills}
                      onChange={(e) => setVFormData({ ...vFormData, skills: e.target.value })}
                      placeholder="e.g. Teaching, Medicine, Law, Software, Social Work"
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      Why would you like to volunteer? (Message)
                    </label>
                    <textarea
                      rows={3}
                      value={vFormData.message}
                      onChange={(e) => setVFormData({ ...vFormData, message: e.target.value })}
                      placeholder="Share a brief note on your motivation or available hours..."
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={vStatus === 'submitting'}
                      icon={Send}
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      {vStatus === 'submitting' ? 'Submitting Application...' : 'Submit Volunteer Application'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: MEMBERSHIP FORM */}
          {activeTab === 'membership' && (
            <div id="membership" className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-card space-y-6">
              <div className="border-b border-brand-border pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                  Institutional Affiliation
                </span>
                <h2 className="text-2xl font-bold font-heading text-brand-dark">
                  Membership Registration Form
                </h2>
                <p className="text-xs text-brand-secondaryText mt-1">
                  Join our official membership body to participate in democratic consultations, society conventions, and organizational development.
                </p>
              </div>

              {mStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-brand-light/70 border border-brand-deep/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">
                    Membership Application Submitted!
                  </h3>
                  <p className="text-sm text-brand-secondaryText max-w-md mx-auto">
                    Thank you for applying for AMWSI membership. Your application has been logged with the secretariat for verification.
                  </p>
                  <Button
                    onClick={() => setMStatus('idle')}
                    variant="outline"
                    size="sm"
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleMembershipSubmit} className="space-y-6">
                  {mError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{mError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={mFormData.fullName}
                        onChange={(e) => setMFormData({ ...mFormData, fullName: e.target.value })}
                        placeholder="Full Legal Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={mFormData.dob}
                        onChange={(e) => setMFormData({ ...mFormData, dob: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={mFormData.email}
                        onChange={(e) => setMFormData({ ...mFormData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={mFormData.phone}
                        onChange={(e) => setMFormData({ ...mFormData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      value={mFormData.address}
                      onChange={(e) => setMFormData({ ...mFormData, address: e.target.value })}
                      placeholder="Street, locality, or landmark"
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        City / District *
                      </label>
                      <input
                        type="text"
                        value={mFormData.city}
                        onChange={(e) => setMFormData({ ...mFormData, city: e.target.value })}
                        placeholder="City"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        value={mFormData.state}
                        onChange={(e) => setMFormData({ ...mFormData, state: e.target.value })}
                        placeholder="State"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1">
                        Occupation
                      </label>
                      <input
                        type="text"
                        value={mFormData.occupation}
                        onChange={(e) => setMFormData({ ...mFormData, occupation: e.target.value })}
                        placeholder="Profession"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1">
                      Membership Category Interest
                    </label>
                    <select
                      value={mFormData.membershipInterest}
                      onChange={(e) => setMFormData({ ...mFormData, membershipInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none bg-white"
                    >
                      <option value="Active Community Member">Active General Member</option>
                      <option value="Academic Contributor">Academic & Education Advisor</option>
                      <option value="Healthcare Volunteer">Healthcare & Medical Contributor</option>
                      <option value="Youth Council">Youth Welfare Wing</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={mStatus === 'submitting'}
                      icon={Send}
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      {mStatus === 'submitting' ? 'Submitting Membership...' : 'Submit Membership Application'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Donation Callout Banner */}
          <div className="mt-12 bg-brand-cream/60 rounded-3xl p-8 border border-brand-gold/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold text-brand-dark flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-brand-dark">
                  Looking to Support Financially?
                </h4>
                <p className="text-xs text-brand-secondaryText">
                  Learn about our transparent voluntary donation procedures and guidelines.
                </p>
              </div>
            </div>

            <Button
              to="/donate"
              variant="gold"
              size="md"
              className="shrink-0"
            >
              Donation Guidelines & Interface
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
