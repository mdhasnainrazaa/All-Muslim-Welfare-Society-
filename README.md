# All Muslim Welfare Society India (AMWSI)

Official frontend website repository for **All Muslim Welfare Society India (AMWSI)** — a national-level social welfare organisation dedicated to Education, Healthcare Awareness, and Community Welfare.

## Tech Stack
- **Framework**: [React.js 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Multilingual**: Custom React Context with English, Hindi (हिंदी), and Urdu (اردو) RTL support

## Project Structure
```
AMWSI/
├── Frontend/
│   ├── public/              # Brand logo, favicons, archival photographs & clippings
│   ├── src/
│   │   ├── components/      # Common & home components
│   │   ├── context/         # LanguageContext (RTL & translation)
│   │   ├── data/            # Structured data models (programmes, campaigns, articles, etc.)
│   │   ├── locales/         # en.json, hi.json, ur.json
│   │   ├── pages/           # All 15+ institutional pages & routing views
│   │   ├── App.jsx          # Route declarations & layout wrapper
│   │   └── main.jsx         # App mounting
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
cd Frontend
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```

## Credits
- **Maintained & Developed by**: [Md Hasnain Raza](https://www.linkedin.com/in/md-hasnain-raza/)
