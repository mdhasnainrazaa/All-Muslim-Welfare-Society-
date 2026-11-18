/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#145A32',
          dark: '#103D29',
          forest: '#1E6B45',
          light: '#EAF3EC',
          subtle: '#F4F8F5',
          gold: '#C6A45C',
          goldLight: '#FBF7EE',
          goldHover: '#B3924B',
          cream: '#FAF8F0',
          warmWhite: '#FFFFFF',
          darkText: '#202923',
          secondaryText: '#68736C',
          border: '#E4EAE5',
          muted: '#8B978F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'Inter', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', '"Noto Sans Arabic"', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 61, 41, 0.05), 0 1px 2px -1px rgba(16, 61, 41, 0.05)',
        'card': '0 4px 20px -2px rgba(16, 61, 41, 0.06), 0 2px 6px -1px rgba(16, 61, 41, 0.04)',
        'elevated': '0 12px 32px -4px rgba(16, 61, 41, 0.1), 0 4px 12px -2px rgba(16, 61, 41, 0.06)',
      }
    },
  },
  plugins: [],
}
