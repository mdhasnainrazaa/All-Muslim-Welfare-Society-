import React, { useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | All Muslim Welfare Society India";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Privacy Policy", path: "/privacy-policy" }]} />

      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card space-y-6">
            
            <div className="border-b border-brand-border pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                Legal & Governance
              </span>
              <h1 className="text-3xl font-extrabold font-heading text-brand-dark">
                Privacy Policy
              </h1>
              <p className="text-xs text-brand-secondaryText mt-1">
                Last updated: 2026 • All Muslim Welfare Society India (AMWSI)
              </p>
            </div>

            <div className="space-y-6 text-sm text-brand-darkText leading-relaxed">
              <p>
                All Muslim Welfare Society India ("AMWSI", "we", "our") is dedicated to upholding the highest standards of privacy and data protection for all visitors, volunteers, members, and supporters. This Privacy Policy details how we collect, handle, and safeguard your personal information.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                1. Information We Collect
              </h3>
              <p>
                We only collect information voluntarily submitted by you through our official online forms, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                <li>Contact Information: Full name, email address, phone number, city, and state.</li>
                <li>Volunteer & Membership Information: Relevant occupational backgrounds, areas of welfare interest, and communications.</li>
                <li>Feedback & Inquiries: Messages sent through our official contact portal.</li>
              </ul>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                2. Use of Information
              </h3>
              <p>
                Collected data is used exclusively for non-profit organizational administration, coordinating volunteer activities, responding to official correspondence, and processing membership registrations. We never sell, rent, monetize, or lease your personal information to third parties.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                3. Data Security & Storage
              </h3>
              <p>
                We implement robust electronic safeguards and administrative access controls to preserve the confidentiality of submitted details. Access is restricted strictly to authorized secretariat personnel.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                4. Cookies and Analytical Tools
              </h3>
              <p>
                Our website uses basic operational session tokens and non-invasive cookies strictly to remember language preferences and optimize page navigation speeds. No tracking or ad-profiling mechanisms are deployed.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                5. Contact Regarding Privacy
              </h3>
              <p>
                For any questions regarding your personal information, or to request data removal from our voluntary registers, please write to our secretariat at <strong>contact@amwsi.org.in</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
