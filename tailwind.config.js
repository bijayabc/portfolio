/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#3B82F6',
        'secondary': '#64748B',
        'accent': '#E2E8F0',
      }
    },
  },
  plugins: [],
} 