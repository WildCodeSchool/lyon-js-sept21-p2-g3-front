/* eslint-disable */
/* prettier-disable */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#F3F4DF',
        recipeWhite: '#FFFCF0',
        title: '#674E3C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
