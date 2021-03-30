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
          2: '#aad6fc', // '#feb89b',
          5: '#aad6fc', // '#3a1751',
          6: '#211034',
          7: '#0d134a', // '#180b25',
          8: '#000321', // '#120a1f',
          9: '#000000'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300')
              },
              a: {
                color: theme('colors.white')
              },
              strong: {
                color: theme('colors.white')
              },
              'ol > li::before': {
                color: theme('colors.gray.400')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600')
              },
              hr: {
                borderColor: theme('colors.gray.200')
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600')
              },
              h1: {
                color: theme('colors.white')
              },
              h2: {
                color: theme('colors.white')
              },
              h3: {
                color: theme('colors.white')
              },
              h4: {
                color: theme('colors.white')
              },
              'figure figcaption': {
                color: theme('colors.gray.400')
              },
              code: {
                color: theme('colors.white')
              },
              'a code': {
                color: theme('colors.white')
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800')
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600')
              }
            }
          ]
        }
      })
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
