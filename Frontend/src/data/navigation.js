/**
 * Primary and Secondary Navigation structure for AMWSI
 */

export const navItems = [
  { label: "Home", path: "/" },
  { 
    label: "About Us", 
    path: "/about",
    children: [
      { label: "Overview & Mission", path: "/about" },
      { label: "Our Team & Leadership", path: "/team" },
      { label: "Trust & Transparency", path: "/transparency" }
    ]
  },
  { label: "Our Team", path: "/team" },
  { 
    label: "Programmes", 
    path: "/programmes",
    children: [
      { label: "All Programmes", path: "/programmes" },
      { label: "Education Initiative", path: "/programmes/education-initiative" },
      { label: "Healthcare Awareness", path: "/programmes/healthcare-awareness" },
      { label: "Community Welfare", path: "/programmes/community-welfare" }
    ]
  },
  { label: "Campaigns", path: "/campaigns" },
  { label: "News & Events", path: "/news" },
  { label: "Gallery", path: "/gallery" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Contact", path: "/contact" }
];

export const footerLinks = {
  about: [
    { label: "About Organisation", path: "/about" },
    { label: "Our Team & Leadership", path: "/team" },
    { label: "Mission & Core Values", path: "/about#mission" },
    { label: "Trust & Governance", path: "/transparency" }
  ],
  programmes: [
    { label: "Education Initiatives", path: "/programmes/education-initiative" },
    { label: "Healthcare Awareness", path: "/programmes/healthcare-awareness" },
    { label: "Community Welfare", path: "/programmes/community-welfare" },
    { label: "AMU Kishanganj Campaign", path: "/campaigns/amu-kishanganj-centre" }
  ],
  involvement: [
    { label: "Volunteer Registration", path: "/get-involved#volunteer" },
    { label: "Membership Application", path: "/get-involved#membership" },
    { label: "Support Our Mission", path: "/donate" },
    { label: "Contact & Inquiries", path: "/contact" }
  ],
  legal: [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Donation & Refund Policy", path: "/refund-policy" },
    { label: "Compliance & Documents", path: "/transparency" }
  ]
};
