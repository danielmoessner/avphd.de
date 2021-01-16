const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        orange: colors.orange,
        yellow: colors.yellow,
        original: {
          1: '#f5eee6',
          2: '#ebe4dd',
          5: '#8f724d',
          6: '#624f35',
          8: '#423a2e',
          9: '#2e2519'
        }
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
