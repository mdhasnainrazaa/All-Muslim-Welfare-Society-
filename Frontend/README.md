# All Muslim Welfare Society India (AMWSI) - Official Frontend Website

A modern, institutional, responsive, production-quality frontend website built with **React.js**, **JavaScript**, **Vite**, and **Tailwind CSS** for **All Muslim Welfare Society India (AMWSI)**.

---

## 🏛️ Project Architecture & Design Direction

- **Institutional Design System**: Inspired by established global non-profit institutions. Avoids generic NGO templates, artificial glassmorphism, or excessive gradients.
- **Brand Palette**:
  - **Deep Green**: `#145A32` (Primary Brand)
  - **Dark Green**: `#103D29` (Headings & Dark Sections)
  - **Forest Green**: `#1E6B45` (Accents & Highlights)
  - **Light Green**: `#EAF3EC` (Subtle Pills & Backgrounds)
  - **Cream / Warm White**: `#FAF8F0` / `#FFFFFF` (Backgrounds)
  - **Accent Gold**: `#C6A45C` (Emblem & Decorative Accents)
- **Typography**:
  - English: **Manrope** & **Inter**
  - Hindi: **Noto Sans Devanagari**
  - Urdu: **Noto Nastaliq Urdu** (Full RTL support with `dir="rtl"`)
- **Strict Content Compliance Model**:
  - Built-in internal content status governance (`PROVIDED`, `RESEARCH`, `MISSING`, `DECISION`).
  - Strict compliance with legal norms: no fake 80G claims, no fake FCRA claims, no invented registration numbers or financial figures. Missing items are presented with transparent institutional notices.

---

## 🚀 Pages & Features

1. **Homepage (`/`)**:
   - **Hero Banner**: Institutional typography, editorial imagery, representational notices, primary & secondary CTAs.
   - **About Section**: Introduction to society objectives and focus highlights.
   - **Focus Areas**: Dedicated cards for *Education*, *Healthcare Awareness*, and *Community Welfare*.
   - **Mission & Vision**: Guiding institutional principles.
   - **Campaigns Feature**: Historical *AMU Kishanganj Centre Campaign* with verified timeline and public advocacy context.
   - **Featured Article**: Archival opinion piece *"The Way Forward in COVID-19 Era"* (Best Popular News, 29 May 2021) by Danish Anwer.
   - **Why Our Work Matters**: Editorial split section on societal impact without fabricated numbers.
   - **Get Involved**: Cards for Volunteer, Member, and Voluntary Giving.
   - **Latest News & Updates**: Curated historical press coverage.
   - **Gallery Preview**: Visual archive with interactive modal view.
   - **Newsletter Subscription**: Client-side validation with feedback states.
   - **Footer**: Verified social links (Facebook official page), quick links, governance disclosures.

2. **About Us (`/about`)**:
   - Institutional profile, history & grassroots background, strategic objectives, core values (*Humanity, Education, Equality, Transparency, Community Service, Compassion*), dignity-first approach, and leadership communiqué.

3. **Our Team (`/team`)**:
   - Executive leadership & advisory council directory with category filters.
   - Danish Anwer profile with respectful pending confirmation notes.

4. **Programmes (`/programmes` & `/programmes/:slug`)**:
   - Detailed views for *Education Initiative*, *Healthcare Awareness*, and *Community Welfare*.
   - Objectives, activities, target demographics, and volunteer CTAs.

5. **Campaigns (`/campaigns` & `/campaigns/:slug`)**:
   - Dedicated interactive detail view for the *AMU Kishanganj Centre Campaign*.
   - Historical movement timeline (2011 land allotment, 2011 Bihar Cabinet 224 acres clearance, 2014 operational commencement).
   - Strict non-partisan civil society principles.

6. **News & Media (`/news` & `/news/:slug`)**:
   - Multi-category filter (*News*, *Events*, *Articles*, *Press Coverage*, *Awareness*).
   - Language selector (*English*, *Hindi*, *Urdu*).
   - Archival articles: *The Way Forward in COVID-19 Era*, *Alwatan Times Urdu*, *Kishanganj Bihar Hindi COVID-19 Article*, *Sahara Express Urdu*, and *AMU Kishanganj coverage*.
   - Politically partisan opinion pieces kept strictly unpublished pending legal review.
   - Article reading view with Table of Contents, social sharing, and **native RTL rendering** for Urdu.

7. **Gallery (`/gallery`)**:
   - Categorized photo grid with interactive lightbox modal (keyboard navigation, next/prev, zoom).
   - Respectful captioning and date handling (omits 1970 timestamp).

8. **Get Involved (`/get-involved`)**:
   - Complete Volunteer Registration form with validation.
   - Complete Membership Application form with validation.

9. **Support Our Mission (Donation UI) (`/donate`)**:
   - Donation categories: *General Donation*, *Education Support*, *Healthcare Support*, *Community Welfare*, *Zakat*, and *Sadaqah*.
   - Suggested preset amounts and custom amount selector.
   - Transparent payment method placeholders (UPI, Net Banking, Cards, Bank Transfer).
   - Statutory compliance disclaimer (payments disabled pending verified banking setup; no 80G claim).

10. **Trust & Transparency (`/transparency`)**:
    - Centralized statutory tracking registry: Registration Certificate, PAN, 12A, 80G, NGO Darpan, CSR-1, FCRA, Annual Reports, and Audited Accounts.
    - Zero fake data guarantee with clear "Pending Archival Upload" badges.

11. **Contact (`/contact`)**:
    - Secretariat inquiry desk, validated message form, working hours, and geographical coverage.

12. **Legal Policies**:
    - Privacy Policy (`/privacy-policy`)
    - Terms & Conditions (`/terms`)
    - Donation & Refund Policy (`/refund-policy`)
    - 404 Not Found Page (`/404`)

---

## 🛠️ Technology Stack

- **Framework**: React 18 + JavaScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React
- **Animations & Interactivity**: Framer Motion & Tailwind transitions
- **Internationalization**: Custom multilingual architecture (English, Hindi, Urdu with dynamic RTL layout switching)

---

## 💻 Getting Started

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
