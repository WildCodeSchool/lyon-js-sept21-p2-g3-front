/* eslint-disable */
/* prettier-disable */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: '#157A2C',
        secondary: '#7CC156',
        background: '#F3F4DF',
        third: '#F4A871',
        recipeWhite: '#FFFCF0',
        title: '#674E3C',
      },
    },
  },
  variants: {
    extend: {},
    plugins: [],
  },
};
