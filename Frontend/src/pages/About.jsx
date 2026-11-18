import React, { useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { organisation } from '../data/organisation';
import { 
  Target, 
  Compass, 
  Heart, 
  BookOpen, 
  Scale, 
  ShieldCheck, 
  Handshake, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  AlertCircle
} from 'lucide-react';

const valueIcons = {
  Heart: Heart,
  BookOpen: BookOpen,
  Scale: Scale,
  ShieldCheck: ShieldCheck,
  Handshake: Handshake,
  Sparkles: Sparkles
};

const About = () => {
  useEffect(() => {
    document.title = "About Us | All Muslim Welfare Society India (AMWSI)";
  }, []);

  return (
    <div className="bg-brand-subtle/30 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "About Us", path: "/about" }]} />

      {/* Hero Banner */}
      <section className="bg-brand-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-deep to-brand-forest/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-gold border border-brand-gold/30">
              Institutional Profile
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              About All Muslim Welfare Society India
            </h1>
            <p className="text-base sm:text-lg text-brand-light/90 leading-relaxed">
              Committed to promoting social welfare through education, public healthcare awareness, and grassroots community-focused welfare initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-16 sm:py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-dark tracking-tight">
                A National Platform for Social Upliftment & Educational Equality
              </h2>
              <div className="w-12 h-1 bg-brand-gold rounded-full" />
              
              <p className="text-base text-brand-secondaryText leading-relaxed">
                All Muslim Welfare Society India (AMWSI) is an independent non-governmental social welfare organisation established with the primary objective of serving underprivileged and underserved populations across India. 
              </p>

              <p className="text-sm text-brand-secondaryText leading-relaxed">
                Recognizing that real, sustainable empowerment requires a multi-dimensional foundation, AMWSI directs its efforts toward three interrelated priorities: educational advancement, healthcare awareness, and community solidarity. We believe that when educational pathways are unlocked and health risks are mitigated, families can build dignified, self-reliant futures.
              </p>

              <div className="p-4 rounded-xl bg-brand-cream border border-brand-border text-xs text-brand-secondaryText flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                <span>
                  <strong>Ethical Governance Principle:</strong> AMWSI operates strictly as a social welfare entity without affiliation to any political party. Our programs are designed to serve citizens in need with utmost transparency and accountability.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-card border border-brand-border">
                <img
                  src="/images/amu-kishanganj-delegation-outdoor.jpg"
                  alt="AMWSI Civil Society & Community Delegation"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Our History & Archival Background */}
      <section className="py-16 sm:py-20 bg-brand-cream/40 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-forest block mb-2">
              Origins & Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-dark">
              Our History & Grassroots Emergence
            </h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto my-3 rounded-full" />
            <p className="text-sm text-brand-secondaryText leading-relaxed">
              Rooted in grassroots community engagement and civil advocacy for higher education and healthcare accessibility.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-brand-border shadow-card space-y-6">
            <p className="text-sm sm:text-base text-brand-darkText leading-relaxed">
              The genesis of the society stems from collective deliberations among community activists, educators, and social advocates who witnessed persistent disparities in literacy, healthcare infrastructure, and civic support across northern and eastern regions of India, notably in educational hubs and backward districts such as Seemanchal, Bihar.
            </p>

            <p className="text-sm sm:text-base text-brand-darkText leading-relaxed">
              Over the past decade, members associated with the society's network engaged in significant civic campaigns—including the historical community advocacy surrounding the establishment of the Aligarh Muslim University (AMU) Kishanganj Centre—and contributed analytical perspectives on healthcare reform and rural economic relief during the COVID-19 pandemic.
            </p>

            {/* Note regarding founding year and records */}
            <div className="p-4 rounded-xl bg-brand-light/70 border border-brand-deep/20 text-xs text-brand-secondaryText flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-deep shrink-0 mt-0.5" />
              <span>
                <strong>Archival Status Note:</strong> Formal statutory registration records and detailed institutional timelines are being compiled for the public transparency registry. In accordance with strict compliance guidelines, unverified founding dates or registration claims are withheld from the public interface.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Mission & Vision */}
      <section id="mission" className="py-16 sm:py-20 bg-brand-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Institutional Direction"
            title="Mission & Vision"
            subtitle="The strategic principles guiding AMWSI's welfare agenda"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-gold text-brand-dark">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">Our Mission</h3>
              </div>
              <p className="text-base text-brand-light leading-relaxed italic border-l-2 border-brand-gold pl-4 py-1">
                "{organisation.mission.statement}"
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-gold text-brand-dark">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">Our Vision</h3>
              </div>
              <p className="text-base text-brand-light leading-relaxed italic border-l-2 border-brand-gold pl-4 py-1">
                "{organisation.vision.statement}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Objectives */}
      <section className="py-16 sm:py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Goals & Mandates"
            title="Our Strategic Objectives"
            subtitle="Key measurable focus areas driving our community initiatives"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-cream/40 border border-brand-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-brand-light text-brand-deep shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-brand-dark mb-1">
                  1. Educational Retention
                </h4>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Support school attendance and reduce dropout rates among first-generation learners from economically vulnerable communities.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream/40 border border-brand-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-brand-light text-brand-deep shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-brand-dark mb-1">
                  2. Higher Education Guidance
                </h4>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Provide structured career counseling and scholarship dissemination for minority youth pursuing tertiary degrees.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream/40 border border-brand-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-brand-light text-brand-forest shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-brand-dark mb-1">
                  3. Preventative Healthcare
                </h4>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Conduct community health awareness sessions focusing on seasonal diseases, hygiene, sanitation, and nutrition.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream/40 border border-brand-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-brand-light text-brand-forest shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-brand-dark mb-1">
                  4. Rural Health Advocacy
                </h4>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Advocate for improved primary healthcare infrastructure and medical personnel availability in underserved rural belts.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream/40 border border-brand-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-brand-light text-brand-goldHover shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-brand-dark mb-1">
                  5. Vulnerable Family Aid
                </h4>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Facilitate social relief for distressed households, widows, senior citizens, and differently-abled community members.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream/40 border border-brand-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-brand-light text-brand-goldHover shrink-0">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-brand-dark mb-1">
                  6. Community Harmony
                </h4>
                <p className="text-xs text-brand-secondaryText leading-relaxed">
                  Foster social harmony, civic responsibility, and mutual cooperation across diverse cultural and religious sections of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Core Values */}
      <section className="py-16 sm:py-20 bg-brand-cream/30 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Institutional Ethos"
            title="Our Core Values"
            subtitle="The enduring principles that define our service to society"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {organisation.values.map((val, idx) => {
              const Icon = valueIcons[val.icon] || Sparkles;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-border shadow-card editorial-card flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-deep flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold font-heading text-brand-dark mb-2">
                      {val.name}
                    </h4>
                    <p className="text-xs text-brand-secondaryText leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Our Approach */}
      <section className="py-16 sm:py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-card border border-brand-border">
                <img
                  src="/images/community-indoor-gathering.jpg"
                  alt="Community Consultative Approach"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-forest block">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-dark tracking-tight">
                Community-Led, Dignity-First Approach
              </h2>
              <div className="w-12 h-1 bg-brand-gold rounded-full" />
              
              <div className="space-y-4 text-sm text-brand-secondaryText leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark">Grassroots Consultation:</strong> We do not impose top-down solutions. Welfare initiatives begin with direct dialogues with local elders, teachers, and community members to identify genuine needs.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark">Dignified Assistance:</strong> Humanitarian aid is delivered with unconditional respect for individual dignity, avoiding intrusive or exploitative media documentation.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark">Multi-Sectoral Collaboration:</strong> Working synergistically with existing public institutions, government welfare directorates, and partner civil society bodies to maximize sustainable impact.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 8: Leadership Message */}
      <section className="py-16 sm:py-20 bg-brand-subtle/50 border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-forest">
                Secretariat Communiqué
              </span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-brand-dark mb-4">
              "Building Bridges of Hope and Knowledge"
            </h3>

            <blockquote className="text-sm sm:text-base text-brand-darkText leading-relaxed italic border-l-4 border-brand-gold pl-6 py-2 mb-6">
              "A society achieves true advancement not merely when its most privileged prosper, but when the humblest citizen is endowed with knowledge, protected in sickness, and treated with equity. Our journey is driven by the conviction that education is the single most potent equalizer bestowed upon humankind. We invite every conscientious citizen to walk alongside us in this mission of service and solidarity."
            </blockquote>

            <div className="flex items-center justify-between pt-6 border-t border-brand-border text-xs text-brand-secondaryText">
              <div>
                <span className="font-bold text-brand-dark block">Advisory & Executive Council</span>
                <span>All Muslim Welfare Society India</span>
              </div>
              <span className="italic text-brand-forest font-medium">New Delhi / National Chapter</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Call to Action */}
      <section className="py-16 bg-brand-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Join Our Welfare Mission Today
          </h2>
          <p className="text-base text-brand-light/90 max-w-xl mx-auto">
            Whether as an active volunteer, a member, or a supporter, your involvement strengthens our collective capacity to make an enduring impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              to="/get-involved"
              variant="gold"
              size="lg"
            >
              Get Involved
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-brand-deep"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
