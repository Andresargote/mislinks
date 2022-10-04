/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      padding: {
        '3px': '3px',
        '6px': '6px',
        '12px': '12px',
      },
      spacing: {
        '30px': '30px',
      },
    },
  },
  plugins: [],
};