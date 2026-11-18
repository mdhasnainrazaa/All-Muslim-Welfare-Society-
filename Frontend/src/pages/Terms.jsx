import React, { useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | All Muslim Welfare Society India";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      <Breadcrumb items={[{ label: "Terms & Conditions", path: "/terms" }]} />

      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card space-y-6">
            
            <div className="border-b border-brand-border pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                Legal & Governance
              </span>
              <h1 className="text-3xl font-extrabold font-heading text-brand-dark">
                Terms and Conditions of Use
              </h1>
              <p className="text-xs text-brand-secondaryText mt-1">
                Effective: 2026 • All Muslim Welfare Society India (AMWSI)
              </p>
            </div>

            <div className="space-y-6 text-sm text-brand-darkText leading-relaxed">
              <p>
                Welcome to the official website of All Muslim Welfare Society India ("AMWSI"). By accessing or using this website, you agree to be bound by the following terms and conditions.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                1. Institutional Mission & Use of Content
              </h3>
              <p>
                All materials, articles, research summaries, and visual records published on this portal are provided for informational, educational, and social welfare awareness purposes. You may read, print, and reference content for non-commercial educational advocacy, provided appropriate attribution is given to AMWSI.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                2. Historical Materials & Archival Articles
              </h3>
              <p>
                Certain articles and reports documented on this site reflect historical publications and opinion pieces from 2011–2021. These archival records reflect contemporary community perspectives and are preserved for educational and historical awareness.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                3. Non-Partisan Civil Society Standard
              </h3>
              <p>
                AMWSI is an independent, non-partisan social welfare society. Users must not use the AMWSI name, logos, or publications to endorse or oppose any political candidate or party.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                4. External Links
              </h3>
              <p>
                This website may contain links to external governmental portals, educational institutions, or news sources. AMWSI does not assume responsibility for third-party contents or privacy policies.
              </p>

              <h3 className="text-lg font-bold font-heading text-brand-dark pt-2">
                5. Revisions to Terms
              </h3>
              <p>
                AMWSI reserves the right to update these terms to reflect ongoing legal and administrative updates. Continued use of the website signifies acceptance of updated terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
