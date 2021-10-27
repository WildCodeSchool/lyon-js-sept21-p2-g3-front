/* eslint-disable */
// const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#157A2C',
      secondary: '#7CC156',
      background: '#FECACA',
      third: '#F4A871',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
