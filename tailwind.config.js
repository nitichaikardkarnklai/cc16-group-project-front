/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        redHero: ' #D2001E',
        grayBg100: '#F6F6F6',
        grayBg200: '#9B9B9B',
        grayBg300: '#777777',
        grayFooter: '#E5DADA',
        yellowNew: '#FEB60B',
        goldToyMart: '#AF831E',
        goldBg100: '#E5DACA',
      },
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
});
