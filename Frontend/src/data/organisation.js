/**
 * Organisation Configuration & Profile for All Muslim Welfare Society India (AMWSI)
 * 
 * Internal Content Statuses:
 * - PROVIDED: Information or assets supplied by the client.
 * - RESEARCH: Information gathered from external sources and awaiting client approval.
 * - MISSING: Information that must be supplied by the client.
 * - DECISION: Information that requires client approval.
 * 
 * Public visitors will NOT see internal status codes; missing or unapproved
 * details are handled transparently with respectful, institutional placeholders.
 */

export const CONTENT_STATUS = {
  PROVIDED: 'PROVIDED',
  RESEARCH: 'RESEARCH',
  MISSING: 'MISSING',
  DECISION: 'DECISION'
};

export const organisation = {
  name: "All Muslim Welfare Society India",
  shortName: "AMWSI",
  tagline: "Building a Better Future Through Education, Healthcare & Humanity",
  description: "All Muslim Welfare Society India is a social welfare organisation committed to supporting communities across India through education, healthcare awareness, and community-focused welfare initiatives aimed at uplifting underprivileged sections of society.",
  
  focusAreas: [
    {
      id: "education",
      title: "Education",
      tagline: "Empowering minds, unlocking potential",
      description: "Promoting access to education, supporting learning opportunities, and encouraging educational development among underserved communities.",
      icon: "GraduationCap",
      accent: "#145A32",
      path: "/programmes#education"
    },
    {
      id: "healthcare",
      title: "Healthcare Awareness",
      tagline: "Prioritising health, wellness & prevention",
      description: "Supporting healthcare awareness, public health education, preventive wellness, and initiatives that encourage access to better medical guidance.",
      icon: "HeartPulse",
      accent: "#1E6B45",
      path: "/programmes#healthcare"
    },
    {
      id: "community-welfare",
      title: "Community Welfare",
      tagline: "Strengthening community solidarity",
      description: "Encouraging community participation, social awareness, humanitarian relief, and welfare initiatives for people in vulnerable circumstances.",
      icon: "Users",
      accent: "#C6A45C",
      path: "/programmes#community-welfare"
    }
  ],

  // Core proposed statements (editable, respectful drafts)
  mission: {
    statement: "To contribute towards a more educated, healthy, and empowered society through community-focused welfare initiatives and inclusive grassroots development.",
    status: CONTENT_STATUS.DECISION
  },
  vision: {
    statement: "To build an inclusive society where every individual has equal opportunities for education, healthcare, and a dignified life.",
    status: CONTENT_STATUS.DECISION
  },

  values: [
    {
      name: "Humanity (Insaniyat)",
      description: "Serving people across backgrounds with dignity, empathy, and unconditional respect.",
      icon: "Heart"
    },
    {
      name: "Education (Ta'leem)",
      description: "Upholding learning and knowledge as the primary catalyst for sustainable social progress.",
      icon: "BookOpen"
    },
    {
      name: "Equality (Musaawat)",
      description: "Fostering inclusive opportunities without discrimination, prejudice, or bias.",
      icon: "Scale"
    },
    {
      name: "Transparency (Shaffafiyat)",
      description: "Maintaining integrity, accountability, and ethical stewardship in all community endeavours.",
      icon: "ShieldCheck"
    },
    {
      name: "Community Service (Khidmat)",
      description: "Prioritising the genuine welfare and advancement of underprivileged families.",
      icon: "Handshake"
    },
    {
      name: "Compassion (Hamdardi)",
      description: "Responding with thoughtful care to social disparities and emergency needs.",
      icon: "Sparkles"
    }
  ],

  // Contact details: accurately marked as pending verification to avoid inventing fake data
  contact: {
    address: {
      line1: "Official Secretariat / Registered Office",
      line2: "Details to be updated upon client verification",
      city: "New Delhi / Regional Office",
      state: "India",
      status: CONTENT_STATUS.MISSING,
      displayPlaceholder: "Address verification in progress. Please contact via the official inquiry form below."
    },
    email: {
      primary: "contact@amwsi.org.in",
      inquiries: "info@amwsi.org.in",
      status: CONTENT_STATUS.MISSING,
      displayPlaceholder: "Direct communications can be submitted via our secure contact portal."
    },
    phone: {
      primary: "+91 (Official Line Pending)",
      helpline: "+91 (Helpline Pending)",
      status: CONTENT_STATUS.MISSING,
      displayPlaceholder: "Official telephonic line will be published following administrative verification."
    },
    workingHours: "Monday to Saturday: 10:00 AM – 5:00 PM IST (Closed on Sundays & National Holidays)"
  },

  // Social Links
  social: {
    facebook: {
      url: "https://www.facebook.com/AMWSIOfficial",
      status: CONTENT_STATUS.PROVIDED,
      label: "Official Facebook Page"
    },
    youtube: {
      url: "#",
      status: CONTENT_STATUS.MISSING,
      label: "Official YouTube Channel (Pending)"
    },
    instagram: {
      url: "#",
      status: CONTENT_STATUS.MISSING,
      label: "Official Instagram (Pending)"
    },
    twitter: {
      url: "#",
      status: CONTENT_STATUS.MISSING,
      label: "Official X / Twitter (Pending)"
    }
  },

  // Legal & Transparency Status
  // STRICT RULE: No fake registration, 12A, 80G, or FCRA claims
  compliance: {
    registration: {
      title: "Society / Trust Registration Certificate",
      status: CONTENT_STATUS.MISSING,
      note: "Official documentation under archival verification by society secretariat."
    },
    pan: {
      title: "Permanent Account Number (PAN)",
      status: CONTENT_STATUS.MISSING,
      note: "Under verification for public record."
    },
    tax12A: {
      title: "12A Registration (Income Tax Exemption)",
      status: CONTENT_STATUS.MISSING,
      note: "Statutory documentation pending administrative upload."
    },
    tax80G: {
      title: "80G Certification (Tax Deductible Donations)",
      status: CONTENT_STATUS.MISSING,
      note: "Tax exemption benefit status pending statutory confirmation. Currently no 80G claim is made."
    },
    ngoDarpan: {
      title: "NITI Aayog NGO Darpan Registration",
      status: CONTENT_STATUS.MISSING,
      note: "Darpan portal linkage record pending submission."
    },
    csr1: {
      title: "MCA CSR-1 Registration",
      status: CONTENT_STATUS.MISSING,
      note: "Corporate Social Responsibility eligibility pending filing."
    },
    fcra: {
      title: "FCRA (Foreign Contribution Regulation Act)",
      status: CONTENT_STATUS.MISSING,
      note: "Foreign donations are NOT accepted. Domestic contributions only, subject to verified procedures."
    }
  }
};
