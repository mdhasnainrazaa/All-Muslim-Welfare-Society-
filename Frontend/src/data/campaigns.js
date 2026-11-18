/**
 * Campaigns data for All Muslim Welfare Society India (AMWSI)
 * 
 * Rules:
 * - AMU Kishanganj Centre is documented with strict historical fidelity.
 * - Clear disclaimer: Historical milestones belong to the AMU Kishanganj Centre initiative;
 *   AMWSI's specific advocacy role is documented as historical community participation.
 * - No political party affiliation or endorsement is implied.
 */

import { CONTENT_STATUS } from './organisation';

export const campaigns = [
  {
    id: "amu-kishanganj-centre",
    slug: "amu-kishanganj-centre",
    title: "AMU Kishanganj Centre Campaign",
    subtitle: "Historical Community Advocacy for Higher Education in Seemanchal, Bihar",
    category: "Higher Education Advocacy",
    status: CONTENT_STATUS.RESEARCH,
    featured: true,
    bannerImage: "/images/amu-kishanganj-delegation-outdoor.jpg",
    summary: "The Aligarh Muslim University Kishanganj Centre initiative emerged from broad efforts to expand access to quality higher education in the historically underdeveloped Seemanchal region of Bihar. Community advocacy, civic forums, and public engagement played an important role in bringing national and state attention to the initiative.",
    historicalDisclaimer: "Note: The milestones detailed below represent public historical events in the establishment of the Aligarh Muslim University (AMU) Kishanganj Centre by public authorities and university administrations, in which community members and civil society bodies engaged. These are presented for historical context and public awareness, not as proprietary or independent AMWSI achievements.",
    archivalClippings: [
      {
        image: "/images/press-clipping-amu-sonia-gandhi.jpg",
        caption: "Urdu Daily Archive: AMU Coordination Committee 15-member delegation meeting concerning the Kishanganj campus."
      },
      {
        image: "/images/press-clipping-amu-kapil-sibal.jpg",
        caption: "Press Archive: Civil delegation representation to the Union HRD Ministry for expediting centre approvals."
      },
      {
        image: "/images/amu-kishanganj-delegation-outdoor.jpg",
        caption: "Historical Civic Delegation: Members of the AMU Kishanganj educational advocacy movement."
      }
    ],
    timeline: [
      {
        year: "2011",
        month: "Early 2011",
        title: "Land Allotment Process & Public Mobilisation",
        description: "Community stakeholders, student bodies, and civil society activists raised widespread public consciousness on the urgent need for a dedicated AMU centre in the educationally backward district of Kishanganj, Bihar."
      },
      {
        year: "2011",
        month: "Late 2011",
        title: "Bihar Government Approves 224 Acres",
        description: "Following extensive representations by community delegations, civil society advocates, and legislative deliberations, the Government of Bihar sanctioned and allocated 224 acres of land in Kishanganj for the establishment of the AMU Off-Campus Centre."
      },
      {
        year: "2013",
        month: "December 2013",
        title: "Academic Approvals & Foundation Progress",
        description: "Academic councils and administrative bodies completed foundational planning, site inspections, and academic curriculum sanctioning for the preliminary study centres."
      },
      {
        year: "2014",
        month: "February 2014",
        title: "Centre Officially Commences Academic Operations",
        description: "The AMU Kishanganj Centre formally commenced academic sessions (initially with MBA and B.Ed programs), opening educational pathways for students from the regional hinterlands."
      }
    ],
    advocacyRole: "Civil society groups and community elders across Bihar and Delhi held symposiums, submitted memorandums, and highlighted the constitutional and educational rights of underrepresented communities. AMWSI's associated community representatives were actively present in public rallies and awareness conventions.",
    newspaperReferences: [
      {
        source: "Regional Hindi and Urdu Dailies",
        period: "2011 – 2013",
        note: "Extensive press coverage documenting public delegations, memorandums, and civil society appeals regarding the Kishanganj campus land transfer."
      }
    ],
    objectives: [
      "Document the history of public higher-education advocacy in underserved regions.",
      "Promote educational infrastructure development in Seemanchal and backward districts.",
      "Encourage youth from minority and rural backgrounds to pursue higher educational degrees."
    ]
  },
  {
    id: "covid-19-public-health-awareness",
    slug: "covid-19-public-health-awareness",
    title: "COVID-19 Health & Socio-Economic Awareness Campaign",
    subtitle: "Public Health Communication and Grassroots Solidarity During the Pandemic",
    category: "Public Health & Relief",
    status: CONTENT_STATUS.RESEARCH,
    featured: false,
    bannerImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    summary: "During the peak waves of the COVID-19 pandemic in 2020–2021, public health awareness, countering misinformation, and advocating for rural healthcare infrastructure were paramount concerns addressed in published articles and community appeals.",
    historicalDisclaimer: "Historical public awareness initiative conducted during the pandemic era. Information reflects contemporary publications from 2021.",
    timeline: [
      {
        year: "2020",
        month: "March – May 2020",
        title: "Initial Lockdown Advisory & Community Guidance",
        description: "Circulation of public health advisories urging masking, social distancing, hand hygiene, and support for vulnerable migrant laborers."
      },
      {
        year: "2021",
        month: "April – May 2021",
        title: "Second Wave Media Outreach & Policy Commentary",
        description: "Publication of analytical articles in press outlets emphasizing the triple imperatives of healthcare infrastructure, agricultural stabilization, and educational continuity."
      }
    ],
    advocacyRole: "Engaged through published opinion columns, community circulars, and local health guidance to combat vaccine hesitancy and advocate for expanded medical resources in rural hospitals.",
    objectives: [
      "Promote scientific health literacy during medical crises.",
      "Highlight the needs of rural healthcare clinics and primary health centres (PHCs).",
      "Support educational continuity for underprivileged children during prolonged school disruptions."
    ]
  }
];
