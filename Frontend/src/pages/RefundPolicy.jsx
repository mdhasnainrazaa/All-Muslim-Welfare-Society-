import React, { useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Donation & Refund Policy | All Muslim Welfare Society India";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Donation & Refund Policy", path: "/refund-policy" }]} />

      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card space-y-6">
            
            <div className="border-b border-brand-border pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                Financial Governance
              </span>
              <h1 className="text-3xl font-extrabold font-heading text-brand-dark">
                Donation & Refund Policy
              </h1>
              <p className="text-xs text-brand-secondaryText mt-1">
                Effective: 2026 • All Muslim Welfare Society India (AMWSI)
              </p>
            </div>

            <div className="space-y-6 text-sm text-brand-darkText leading-relaxed">
              <p>
                All Muslim Welfare Society India ("AMWSI") is committed to total accountability and transparency regarding voluntary public contributions.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                1. Voluntary Contributions
              </h3>
              <p>
                All contributions made to AMWSI are voluntary gifts dedicated to supporting community education, public health awareness, and social relief initiatives.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                2. Live Payment Gateway Status
              </h3>
              <p>
                Please note that live online payment processing is currently in pre-operational testing pending statutory banking validations. No direct payments are processed on this portal without authorized banking gateways.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                3. Refund Policy
              </h3>
              <p>
                As a standard non-profit practice, voluntary donations are generally non-refundable once allocated to field relief or educational materials. However, if a donation has been processed erroneously (such as an accidental duplicate transaction or technical error), the donor may request a refund within 7 working days by providing transaction proofs to <strong>contact@amwsi.org.in</strong>.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                4. Statutory Tax Exemptions (Section 80G Notice)
              </h3>
              <p>
                Donors should note that 80G tax deductibility status is pending formal notification. AMWSI makes no representations of tax exemptions until the official documentation is published in our Transparency registry.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
