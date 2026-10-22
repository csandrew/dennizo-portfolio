/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'primary': '#B22234',
        'primary-dark': '#8B1A1A',
        'secondary': '#3C3B6E',
        'secondary-dark': '#1E1B3A',
        'accent': '#E4405F',
        
        // Neutral Palette
        'white': '#FFFFFF',
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
        'gray-950': '#030712',
        'black': '#000000',
        
        // Social Media
        'instagram': '#E4405F',
        'youtube': '#FF0000',
        'facebook': '#1877F2',
        'twitter': '#000000',
        'tiktok': '#000000',
        'spotify': '#1DB954',
        'soundcloud': '#FF3300',
        'apple': '#FA233B',
        'whatsapp': '#25D366',
      },
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}