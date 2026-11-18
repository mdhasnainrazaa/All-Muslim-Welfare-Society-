/**
 * Programmes data for All Muslim Welfare Society India (AMWSI)
 * 
 * Rules:
 * - Proposed programme categories remain editable pending client confirmation.
 * - All programme-specific achievements, numbers, and locations remain editable and marked pending verification.
 * - No invented beneficiary counts or fake statistics.
 */

import { CONTENT_STATUS } from './organisation';

export const programmes = [
  {
    id: "education-initiative",
    slug: "education-initiative",
    category: "Education",
    title: "Educational Access & Learning Opportunity Initiative",
    tagline: "Empowering underrepresented youth through foundational learning and guidance",
    status: CONTENT_STATUS.DECISION,
    badge: "Key Priority",
    heroImage: "/images/indian-education-classroom.jpg",
    overview: "Promoting access to education, supporting learning opportunities, and encouraging educational development among underserved communities across India. We believe education is the bedrock of community empowerment and sustainable progress.",
    objectives: [
      "Improve enrollment and retention of students from economically vulnerable backgrounds.",
      "Provide guidance, mentorship, and career counseling to secondary and higher secondary students.",
      "Explore structured scholarship assistance schemes (subject to administrative verification and donor allocation).",
      "Promote literacy awareness and encourage modern technical and vocational skills."
    ],
    activities: [
      "Community education counseling circles.",
      "Guidance workshops for higher education admissions and competitive avenues.",
      "Educational awareness seminars for parents in semi-urban and rural localities.",
      "Compilation of government scholarship directories for eligible minority and economically weaker students."
    ],
    targetCommunity: "Economically weaker sections, first-generation learners, and underserved rural/semi-urban communities.",
    location: "Pan-India outreach with initial historical focus in Eastern and Northern regions (State chapters pending official notification).",
    verificationNote: "Locations, beneficiary statistics, and partner schools are subject to formal verification prior to official publication."
  },
  {
    id: "healthcare-awareness",
    slug: "healthcare-awareness",
    category: "Healthcare",
    title: "Public Health Awareness & Preventative Care Campaign",
    tagline: "Building healthier communities through hygiene education and medical awareness",
    status: CONTENT_STATUS.DECISION,
    badge: "Active Initiative",
    heroImage: "/images/indian-healthcare-awareness.jpg",
    overview: "Supporting healthcare awareness, public health education, preventive wellness, and initiatives that encourage access to better healthcare facilities for vulnerable families.",
    objectives: [
      "Disseminate accurate health information on preventable diseases, seasonal infections, and maternal-child health.",
      "Raise awareness about lifestyle diseases, nutrition, clean water, and sanitation.",
      "Facilitate medical awareness camps in collaboration with qualified healthcare volunteers.",
      "Educate communities on accessing government health schemes and public hospital benefits."
    ],
    activities: [
      "Hygiene and sanitation community briefings.",
      "Health information dissemination regarding seasonal health risks.",
      "Awareness drives on preventative healthcare practices.",
      "Guidance sessions on emergency medical preparedness."
    ],
    targetCommunity: "Underserved families, daily-wage workers, and rural populations with limited direct access to specialized health infrastructure.",
    location: "Targeted community clusters (Field activity logs pending administrative submission).",
    verificationNote: "Past medical camps and health drive statistics will be published following audit by the advisory committee."
  },
  {
    id: "community-welfare",
    slug: "community-welfare",
    category: "Community Welfare",
    title: "Community Upliftment & Humanitarian Welfare",
    tagline: "Fostering social resilience, solidarity, and dignified support",
    status: CONTENT_STATUS.DECISION,
    badge: "Grassroots Focus",
    heroImage: "/images/indian-community-welfare.jpg",
    overview: "Encouraging community participation, social awareness, humanitarian relief, and welfare initiatives for individuals and families in distressed economic situations.",
    objectives: [
      "Foster inclusive community dialogue and mutual assistance networks.",
      "Support families during acute distress or seasonal emergencies through community aid.",
      "Encourage civic participation, legal rights awareness, and social responsibility.",
      "Promote welfare schemes instituted for the benefit of widows, orphans, and senior citizens."
    ],
    activities: [
      "Community solidarity meetings and counseling.",
      "Facilitation of citizen awareness on statutory welfare entitlements.",
      "Coordination of community volunteer corps for local civic initiatives.",
      "Seasonal humanitarian support drives (ration and winter relief coordination, subject to verified verification)."
    ],
    targetCommunity: "Vulnerable individuals, widows, senior citizens, and marginalized households.",
    location: "Regional community hubs across India.",
    verificationNote: "All relief distribution metrics are maintained on internal ledgers and await public audit verification."
  }
];
