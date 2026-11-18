import React, { useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { 
  ShieldCheck, 
  FileText, 
  Clock, 
  AlertCircle, 
  Download, 
  CheckCircle2, 
  Info,
  Lock,
  Building
} from 'lucide-react';

const complianceDocuments = [
  {
    id: "reg-cert",
    title: "Society Registration Certificate",
    authority: "Registrar of Societies / Competent State Authority",
    status: "Pending Archival Upload",
    available: false,
    description: "Statutory legal incorporation certificate under the Societies Registration Act."
  },
  {
    id: "pan-card",
    title: "Permanent Account Number (PAN)",
    authority: "Income Tax Department, Government of India",
    status: "Verification In Progress",
    available: false,
    description: "Statutory tax identification record of the society entity."
  },
  {
    id: "tax-12a",
    title: "Section 12A / 12AB Registration",
    authority: "Income Tax Department",
    status: "Pending Administrative Filing",
    available: false,
    description: "Exemption certificate for non-profit and charitable institutions."
  },
  {
    id: "tax-80g",
    title: "Section 80G Tax Exemption Certificate",
    authority: "Income Tax Department",
    status: "Pending Statutory Approval",
    available: false,
    description: "Donor tax deductibility approval. Strictly no 80G claims are made until formally granted."
  },
  {
    id: "darpan",
    title: "NGO Darpan Unique ID",
    authority: "NITI Aayog, Government of India",
    status: "Registration Under Compilation",
    available: false,
    description: "Centralized government portal mapping of verified non-governmental organisations."
  },
  {
    id: "csr-1",
    title: "MCA CSR-1 Form Filing",
    authority: "Ministry of Corporate Affairs",
    status: "Pending Filing",
    available: false,
    description: "Eligibility certification for undertaking Corporate Social Responsibility (CSR) projects."
  },
  {
    id: "fcra",
    title: "FCRA Compliance Status",
    authority: "Ministry of Home Affairs",
    status: "Not Applicable (Domestic Only)",
    available: false,
    description: "AMWSI accepts domestic contributions only; no foreign contributions are accepted."
  },
  {
    id: "annual-reports",
    title: "Annual Activity & Social Audit Reports",
    authority: "Internal Governance Council",
    status: "Under Annual Compilation",
    available: false,
    description: "Annual reports summarizing programmatic outcomes, field drives, and community welfare initiatives."
  },
  {
    id: "financial-audit",
    title: "Audited Financial Statements & Balance Sheets",
    authority: "Statutory Chartered Accountants",
    status: "Audit Pending Executive Finalization",
    available: false,
    description: "Independent audit reports documenting audited accounts, balance sheets, and expenditure ledgers."
  },
  {
    id: "bylaws",
    title: "Memorandum of Association & Society By-laws",
    authority: "Secretariat Legal Council",
    status: "Pending Digital Archival",
    available: false,
    description: "Official institutional charter, foundational objectives, and operational governance rules."
  }
];

const Transparency = () => {
  useEffect(() => {
    document.title = "Trust & Governance (Transparency) | AMWSI";
  }, []);

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Trust & Transparency", path: "/transparency" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Institutional Accountability
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Trust, Governance & Transparency
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              We believe public trust is earned through uncompromising transparency. Here we openly share the statutory status of our institutional records and certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Transparency Protocol Notice */}
      <section className="bg-white border-b border-brand-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-brand-light/70 border border-brand-deep/20 text-xs sm:text-sm text-brand-darkText flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-brand-deep shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-brand-deep block text-sm">
                Strict Anti-Misrepresentation Protocol:
              </span>
              <p className="text-brand-secondaryText leading-relaxed">
                In strict compliance with our governance ethics, All Muslim Welfare Society India (AMWSI) strictly refrains from publishing fabricated registration IDs, unverified statutory certificates, or false tax-exemption claims. Each document listed below reflects its genuine administrative verification status. When finalized, certified digital copies will be downloadable directly from this portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-dark">
              Statutory Documentation Registry
            </h2>
            <p className="text-xs sm:text-sm text-brand-secondaryText mt-2">
              Public tracking of society registrations, filings, and financial transparency audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-card flex flex-col justify-between space-y-4 editorial-card"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-cream text-brand-forest flex items-center justify-center shrink-0 border border-brand-border">
                      <FileText className="w-5 h-5" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                      {doc.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-dark mb-1">
                    {doc.title}
                  </h3>

                  <span className="text-[11px] font-semibold text-brand-forest block mb-2">
                    Issuing Authority: {doc.authority}
                  </span>

                  <p className="text-xs text-brand-secondaryText leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-brand-secondaryText">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Archival Verification Pending</span>
                  </div>

                  <button
                    disabled
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-cream text-brand-secondaryText/60 text-xs font-semibold cursor-not-allowed border border-brand-border"
                    title="Document pending administrative publication"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Unavailable</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Commitment Note */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card max-w-4xl mx-auto space-y-4 text-center">
            <h3 className="text-2xl font-bold font-heading text-brand-dark">
              Audited Financial Disclosures Coming Soon
            </h3>
            <p className="text-sm text-brand-secondaryText max-w-2xl mx-auto leading-relaxed">
              Upon conclusion of statutory accounting verifications, full annual ledgers, programmatic expenditures, and balance sheets will be published for complete public inspection.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="outline" size="md">
                Inquire with Secretariat
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Transparency;
