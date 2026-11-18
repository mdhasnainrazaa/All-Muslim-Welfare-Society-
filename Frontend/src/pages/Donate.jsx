import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { 
  Heart, 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  CreditCard, 
  Building2, 
  Smartphone, 
  CheckCircle2, 
  Info,
  BookOpen,
  HeartPulse,
  Users
} from 'lucide-react';

const donationCategories = [
  { id: "general", name: "General Donation", desc: "Supports general welfare, outreach, and operational continuity" },
  { id: "education", name: "Education Support", desc: "Aids student learning materials and awareness drives" },
  { id: "healthcare", name: "Healthcare Support", desc: "Aids community health literacy and preventative health drives" },
  { id: "community", name: "Community Welfare", desc: "Aids humanitarian assistance for distressed households" },
  { id: "zakat", name: "Zakat Voluntary Fund", desc: "Subject to administrative verification & statutory guidelines" },
  { id: "sadaqah", name: "Sadaqah (Voluntary Charity)", desc: "Voluntary charity for underprivileged community members" }
];

const presetAmounts = [500, 1000, 2500, 5000, 10000];

const Donate = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [amount, setAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [simulatedStatus, setSimulatedStatus] = useState("idle");

  useEffect(() => {
    document.title = "Support Our Mission (Donation UI) | AMWSI";
  }, []);

  const effectiveAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handleSimulateDonation = (e) => {
    e.preventDefault();
    if (!consentChecked) {
      alert("Please accept the terms and donor consent conditions.");
      return;
    }
    setSimulatedStatus("submitting");
    setTimeout(() => {
      setSimulatedStatus("simulated");
    }, 800);
  };

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Support Our Mission", path: "/donate" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Voluntary Giving & Support
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Support Our Welfare Mission
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              Transparent, voluntary contributions enabling educational access, community health awareness, and dignified humanitarian relief.
            </p>
          </div>
        </div>
      </section>

      {/* CRITICAL STATUTORY DISCLAIMER BANNER */}
      <section className="bg-amber-50 border-b border-amber-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 text-xs sm:text-sm text-amber-950">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-amber-900 block text-sm">
                Compliance & Payment Processing Notice (Preview Interface):
              </span>
              <p className="leading-relaxed">
                Live payment gateway processing is intentionally <strong>disabled</strong> pending formal submission and verification of the organisation's statutory banking and registration credentials. In compliance with strict transparency rules:
              </p>
              <ul className="list-disc list-inside space-y-0.5 text-xs text-amber-900 pt-1">
                <li>No claim of Section 80G tax exemption is made until verified statutory approvals are formally published.</li>
                <li>Foreign contributions (FCRA) are NOT accepted. Only domestic contributions are supported.</li>
                <li>Zakat allocation segregation will follow formal advisory council approval prior to financial transactions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Donation Layout */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Cols: Donation Form */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-card space-y-8">
              
              {simulatedStatus === 'simulated' ? (
                <div className="p-8 text-center space-y-4 bg-brand-light/50 rounded-2xl border border-brand-deep/20">
                  <div className="w-16 h-16 rounded-full bg-brand-deep text-brand-gold flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark font-heading">
                    Donation Simulation Completed
                  </h3>
                  <p className="text-sm text-brand-secondaryText max-w-lg mx-auto leading-relaxed">
                    This demonstrates the donor workflow interface. Once our verified banking and payment gateway credentials are functionally connected, live donations will be securely processed through official banking channels.
                  </p>
                  <Button
                    onClick={() => setSimulatedStatus("idle")}
                    variant="primary"
                    size="md"
                  >
                    Reset Donation Form
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSimulateDonation} className="space-y-8">
                  
                  {/* Step 1: Category Selection */}
                  <div>
                    <h3 className="text-base font-bold font-heading text-brand-dark mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-deep text-white text-xs flex items-center justify-center">1</span>
                      <span>Select Donation Cause</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {donationCategories.map((cat) => {
                        const isSelected = selectedCategory === cat.id;
                        return (
                          <div
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              isSelected
                                ? 'border-brand-deep bg-brand-light/60 shadow-sm'
                                : 'border-brand-border bg-white hover:border-brand-deep/30'
                            }`}
                          >
                            <span className="text-xs font-bold text-brand-dark block">
                              {cat.name}
                            </span>
                            <span className="text-[11px] text-brand-secondaryText leading-tight mt-0.5 block">
                              {cat.desc}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Amount Selection */}
                  <div>
                    <h3 className="text-base font-bold font-heading text-brand-dark mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-deep text-white text-xs flex items-center justify-center">2</span>
                      <span>Select or Enter Amount (INR ₹)</span>
                    </h3>

                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
                      {presetAmounts.map((amt) => {
                        const isSelected = !customAmount && amount === amt;
                        return (
                          <button
                            type="button"
                            key={amt}
                            onClick={() => {
                              setAmount(amt);
                              setCustomAmount("");
                            }}
                            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                              isSelected
                                ? 'bg-brand-deep text-white shadow-sm'
                                : 'bg-brand-cream/80 text-brand-dark border border-brand-border hover:bg-brand-border/40'
                            }`}
                          >
                            ₹{amt.toLocaleString('en-IN')}
                          </button>
                        );
                      })}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-secondaryText mb-1">
                        Or Enter Custom Amount (₹)
                      </label>
                      <input
                        type="number"
                        min="100"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                        }}
                        placeholder="e.g. 15000"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Step 3: Donor Details */}
                  <div>
                    <h3 className="text-base font-bold font-heading text-brand-dark mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-deep text-white text-xs flex items-center justify-center">3</span>
                      <span>Donor Information</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-dark mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={donorPhone}
                          onChange={(e) => setDonorPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-deep focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Payment Method Placeholders */}
                  <div>
                    <h3 className="text-base font-bold font-heading text-brand-dark mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-deep text-white text-xs flex items-center justify-center">4</span>
                      <span>Payment Method (Preview Interface)</span>
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 rounded-xl border border-brand-border bg-brand-cream/40 flex items-center gap-2 opacity-80 cursor-not-allowed">
                        <Smartphone className="w-4 h-4 text-brand-forest" />
                        <span className="text-xs font-semibold text-brand-dark">UPI / QR</span>
                      </div>

                      <div className="p-3 rounded-xl border border-brand-border bg-brand-cream/40 flex items-center gap-2 opacity-80 cursor-not-allowed">
                        <Building2 className="w-4 h-4 text-brand-forest" />
                        <span className="text-xs font-semibold text-brand-dark">Net Banking</span>
                      </div>

                      <div className="p-3 rounded-xl border border-brand-border bg-brand-cream/40 flex items-center gap-2 opacity-80 cursor-not-allowed">
                        <CreditCard className="w-4 h-4 text-brand-forest" />
                        <span className="text-xs font-semibold text-brand-dark">Cards</span>
                      </div>

                      <div className="p-3 rounded-xl border border-brand-border bg-brand-cream/40 flex items-center gap-2 opacity-80 cursor-not-allowed">
                        <Lock className="w-4 h-4 text-brand-forest" />
                        <span className="text-xs font-semibold text-brand-dark">Bank Transfer</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-brand-secondaryText mt-1.5 block">
                      * Live gateways will be unlocked upon receipt of authorized merchant accounts.
                    </span>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-brand-secondaryText cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        className="mt-0.5 rounded border-brand-border text-brand-deep focus:ring-brand-deep"
                        required
                      />
                      <span>
                        I understand that this interface preview tests donation workflows. I affirm that contributions are voluntary, made from domestic funds, and acknowledge the transparency terms.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={simulatedStatus === 'submitting'}
                    >
                      {simulatedStatus === 'submitting'
                        ? 'Simulating Workflow...'
                        : `Preview Donation Workflow (₹${effectiveAmount.toLocaleString('en-IN')})`}
                    </Button>
                  </div>

                </form>
              )}

            </div>

            {/* Right 4 Cols: Summary & Trust */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Summary Card */}
              <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-card space-y-4">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-dark pb-2 border-b border-brand-border">
                  Donation Summary
                </h4>

                <div className="space-y-3 text-xs text-brand-secondaryText">
                  <div className="flex justify-between">
                    <span>Selected Cause:</span>
                    <span className="font-bold text-brand-dark">
                      {donationCategories.find(c => c.id === selectedCategory)?.name}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Donation Amount:</span>
                    <span className="font-bold text-brand-forest text-sm">
                      ₹{effectiveAmount.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Frequency:</span>
                    <span className="font-bold text-brand-dark">One-Time Voluntary</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Currency:</span>
                    <span className="font-bold text-brand-dark">INR (Indian Rupee)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-brand-border">
                  <div className="p-3 rounded-xl bg-brand-light/60 border border-brand-deep/20 text-[11px] text-brand-darkText">
                    <span className="font-bold text-brand-deep block mb-0.5">Direct Inquiry:</span>
                    For institutional partnerships or verified bank RTGS/NEFT guidance, please reach our official inquiry desk.
                  </div>
                </div>
              </div>

              {/* Statutory Note */}
              <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-card space-y-3">
                <div className="flex items-center gap-2 text-brand-forest">
                  <ShieldCheck className="w-5 h-5 text-brand-deep" />
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-dark">
                    Statutory Ethics
                  </h4>
                </div>
                <p className="text-[11px] text-brand-secondaryText leading-relaxed">
                  AMWSI maintains zero-tolerance for financial opacity. All welfare expenditures will be audited annually and made available in public disclosures.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
