module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#157A2C',
      secondary: '#7CC156',
      background: '#F3F4DF',
      third: '#F4A871',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
