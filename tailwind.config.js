/* eslint-disable */
/* prettier-disable */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: '#FDB500',
        secondary: '#854D27',
        background: '#2E1F27',
        third: '#DD7230',
        recipeWhite: '#2E1F27',
        title: '#674E3C',
      },
    },
  },
  variants: {
    extend: {},
    plugins: [],
  },
};

