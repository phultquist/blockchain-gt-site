const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#192549',
        'secondary': '#ff9800',
        'primary-dark': '#000024',
        ...colors
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
