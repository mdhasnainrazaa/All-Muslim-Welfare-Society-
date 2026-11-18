/**
 * Gallery media items for AMWSI
 * 
 * Rules:
 * - Categories: Events, Community Activities, Campaigns, Media Coverage
 * - All photographs support verified captions and dates.
 * - Respectful archival date handling (omits 07.01.1970 timestamp glitch; cataloged with authentic context).
 */

import { CONTENT_STATUS } from './organisation';

export const galleryCategories = [
  { id: "all", name: "All Photographs" },
  { id: "events", name: "Events & Felicitations" },
  { id: "campaigns", name: "Campaigns & Advocacy" },
  { id: "community", name: "Community Gatherings" },
  { id: "media", name: "Archival Press Coverage" }
];

export const galleryItems = [
  {
    id: "photo-human-rights-felicitation-2018",
    category: "events",
    title: "World Human Rights Day Recognition & Memento Presentation",
    caption: "Felicitation ceremony on 10th December 2018 in New Delhi organized under 'My Voice Counts' on World Human Rights Day, commending dedicated social advocacy and community service.",
    date: "10 December 2018",
    status: CONTENT_STATUS.PROVIDED,
    imageUrl: "/images/human-rights-day-felicitation-2018.jpg",
    thumbnailUrl: "/images/human-rights-day-felicitation-2018.jpg",
    location: "New Delhi"
  },
  {
    id: "photo-cgc-award",
    category: "events",
    title: "Educational Excellence & Youth Counseling Felicitation",
    caption: "Institutional presentation and award felicitation honoring contributions to educational guidance and higher learning awareness for students.",
    date: "Archival Institutional Assembly",
    status: CONTENT_STATUS.PROVIDED,
    imageUrl: "/images/cgc-educational-award.jpg",
    thumbnailUrl: "/images/cgc-educational-award.jpg",
    location: "CGC Auditorium, Campus Assembly"
  },
  {
    id: "photo-amu-delegation-outdoor",
    category: "campaigns",
    title: "Historical AMU Kishanganj Civic Delegation",
    caption: "Members of the civil society and youth delegation gathered during the sustained public campaign advocating for the establishment of the Aligarh Muslim University (AMU) Centre in Kishanganj, Bihar.",
    date: "Historical Campaign (2011–2014)",
    status: CONTENT_STATUS.PROVIDED,
    imageUrl: "/images/amu-kishanganj-delegation-outdoor.jpg",
    thumbnailUrl: "/images/amu-kishanganj-delegation-outdoor.jpg",
    location: "Patna / Kishanganj, Bihar"
  },
  {
    id: "photo-press-clipping-sonia-gandhi",
    category: "media",
    title: "Urdu Press Archive: AMU Coordination Committee Representation",
    caption: "Historical newspaper coverage reporting on the 15-member AMU Coordination Committee delegation, including Danish Anwer and regional leadership, presenting memorandums for expeditious operationalization of the Kishanganj campus.",
    date: "Historical Press Archive (March 2012)",
    status: CONTENT_STATUS.PROVIDED,
    imageUrl: "/images/press-clipping-amu-sonia-gandhi.jpg",
    thumbnailUrl: "/images/press-clipping-amu-sonia-gandhi.jpg",
    location: "National Press / New Delhi"
  },
  {
    id: "photo-press-clipping-kapil-sibal",
    category: "media",
    title: "Press Report: Ministerial Consultation on AMU Centre Approval",
    caption: "Published news report documenting the civil delegation meeting with the Union Ministry of Human Resource Development (HRD) to advance presidential approval and budget sanction for the AMU Kishanganj Centre.",
    date: "Historical Press Archive (2011–2012)",
    status: CONTENT_STATUS.PROVIDED,
    imageUrl: "/images/press-clipping-amu-kapil-sibal.jpg",
    thumbnailUrl: "/images/press-clipping-amu-kapil-sibal.jpg",
    location: "New Delhi Press Dispatch"
  },
  {
    id: "photo-human-rights-award-closeup",
    category: "events",
    title: "Social Welfare & Human Rights Memento",
    caption: "Danish Anwer and colleagues receiving the honorary memento from senior dignitaries on World Human Rights Day.",
    date: "10 December 2018",
    status: CONTENT_STATUS.PROVIDED,
    imageUrl: "/images/human-rights-day-award-2018.jpg",
    thumbnailUrl: "/images/human-rights-day-award-2018.jpg",
    location: "New Delhi"
  },
  {
    id: "photo-community-night-outreach",
    category: "community",
    title: "Community Outreach & Grassroots Review Assembly",
    caption: "Evening community consultative gathering discussing educational priorities, local healthcare access, and welfare distribution.",
    date: "Archival Community Outreach",
    status: CONTENT_STATUS.PROVIDED,
    imageUrl: "/images/community-night-outreach.jpg",
    thumbnailUrl: "/images/community-night-outreach.jpg",
    location: "Community Center Gathering"
  },
  {
    id: "photo-community-indoor-gathering",
    category: "community",
    title: "Social Welfare Consultative Circle",
    caption: "Civil society associates and community members reviewing regional youth development and grassroots guidance initiatives.",
    date: "Archival Record",
    status: CONTENT_STATUS.PROVIDED,
    imageUrl: "/images/community-indoor-gathering.jpg",
    thumbnailUrl: "/images/community-indoor-gathering.jpg",
    location: "Regional Secretariat"
  }
];
