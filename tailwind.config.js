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
        gray: colors.warmGray,
        original: {
          1: '#f5eee6',
          2: '#ebe4dd',
          5: '#8f724d',
          6: '#624f35',
          8: '#423a2e',
          9: '#2e2519'
        },
        alex: {
          1: '#e6e8f5',
          2: '#dddfeb',
          5: '#4d578f',
          6: '#353c62',
          8: '#2e3142',
          9: '#191c2e'
        },
        deepblue: {
          7: '#000566'
        },
        dark: {
          2: '#feb89b',
          5: '#3a1751',
          6: '#211034',
          7: '#180b25',
          8: '#120a1f',
          9: '#000000'
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
