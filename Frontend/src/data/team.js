/**
 * Leadership, Advisory Board, and Team Directory for AMWSI
 * 
 * Rules:
 * - Do NOT invent team members.
 * - Danish Anwer's official designation and biography are pending client confirmation;
 *   do not assume he is President/Founder or assign unverified titles.
 * - Show transparent administrative status without fake credentials.
 */

import { CONTENT_STATUS } from './organisation';

export const teamCategories = [
  { id: "leadership", name: "Executive Leadership" },
  { id: "advisory", name: "Advisory Council" },
  { id: "coordinators", name: "State Coordinators" },
  { id: "volunteers", name: "Volunteer Network" }
];

export const teamMembers = [
  {
    id: "danish-anwer",
    name: "Danish Anwer",
    alternateSpelling: "Danish Anwar",
    category: "leadership",
    designation: "Executive Representative / Community Columnist",
    statusNote: "Official organisational designation & executive role pending formal client notification.",
    status: CONTENT_STATUS.DECISION,
    bio: "Key contributor to educational and healthcare public advocacy, with published columns addressing pandemic preparedness, higher education infrastructure, and community upliftment in Seemanchal and wider northern regions.",
    image: "/images/danish-anwer-portrait.jpg",
    socialLinks: {
      linkedin: "#",
      facebook: "https://www.facebook.com/AMWSIOfficial"
    }
  },
  {
    id: "governing-board-placeholder",
    name: "Governing Board Members",
    category: "leadership",
    designation: "Board of Trustees / Executive Council",
    statusNote: "Nominations and statutory electoral records currently under administrative archival update.",
    status: CONTENT_STATUS.MISSING,
    bio: "The governing council oversees organisational governance, statutory compliance, and strategic deployment of welfare initiatives across India.",
    image: "/images/cgc-educational-award.jpg",
    socialLinks: {}
  },
  {
    id: "academic-advisory-panel",
    name: "Educational & Public Health Advisory Panel",
    category: "advisory",
    designation: "Senior Honorary Advisors",
    statusNote: "Academic & public health advisor profiles will be published following their formal consent.",
    status: CONTENT_STATUS.MISSING,
    bio: "Comprising veteran educators, public health specialists, and community elders who provide consultative guidance on social welfare schemes and educational campaigns.",
    image: "/images/community-indoor-gathering.jpg",
    socialLinks: {}
  },
  {
    id: "state-chapters-panel",
    name: "State Liaison & Regional Coordinators",
    category: "coordinators",
    designation: "Regional Chapter Leads",
    statusNote: "Zonal coordinators for Bihar, Delhi NCR, and Eastern regional chapters under notification.",
    status: CONTENT_STATUS.MISSING,
    bio: "Coordinating grassroots initiatives, verifying educational scholarship applications, and organizing community health drives at district and block levels.",
    image: "/images/community-night-outreach.jpg",
    socialLinks: {}
  }
];
