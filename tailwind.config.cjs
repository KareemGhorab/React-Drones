/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#2af598',
          400: '#009efd',
          500: '#3e51eb',
          600: '#1d1678f0',
          700: '#1D1678',
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [],
}

module.exports = config
