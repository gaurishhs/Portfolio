const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'music-bar-1': {
          '0%, 100%': { height: '0%' },
          '50%': { height: '70%' },
        },
        'music-bar-2': {
          '0%, 100%': { height: '50%' },
          '25%': { height: '0%' },
          '75%': { height: '100%' },
        },
        'music-bar-3': {
          '0%, 100%': { height: '70%' },
          '15%': { height: '100%' },
          '65%': { height: '0%' },
        },
        'music-bar-4': {
          '0%, 100%': { height: '50%' },
          '35.7%': { height: '0%' },
          '85.7%': { height: '70%' },
        },
      },
      animation: {
        'music-bar-1': 'music-bar-1 .8s linear infinite',
        'music-bar-2': 'music-bar-2 .8s linear infinite',
        'music-bar-3': 'music-bar-3 .8s linear infinite',
        'music-bar-4': 'music-bar-4 .8s linear infinite',
      },
      colors: {
        'spotify': "#1DB954"
      },
      width: {
        5.5: '1.375rem',
      },
      height: {
        5.5: '1.375rem',
      },
    },
  },
  typography: (theme) => ({
    DEFAULT: {
      css: {
        color: theme('colors.gray.700'),
        a: {
          color: theme('colors.primary.500'),
          '&:hover': {
            color: theme('colors.primary.600'),
          },
          code: { color: theme('colors.primary.400') },
        },
        h1: {
          fontWeight: '700',
          letterSpacing: theme('letterSpacing.tight'),
          color: theme('colors.gray.900'),
        },
        h2: {
          fontWeight: '700',
          letterSpacing: theme('letterSpacing.tight'),
          color: theme('colors.gray.900'),
        },
        h3: {
          fontWeight: '600',
          color: theme('colors.gray.900'),
        },
        h4: {
          fontSize: '1.166667em',
        },
        'h4,h5,h6': {
          color: theme('colors.gray.900'),
        },
        code: {
          color: theme('colors.pink.500'),
          backgroundColor: theme('colors.gray.100'),
          paddingLeft: '4px',
          paddingRight: '4px',
          paddingTop: '2px',
          paddingBottom: '2px',
          borderRadius: '0.25rem',
        },
        'code::before': {
          content: 'none',
        },
        'code::after': {
          content: 'none',
        },
        hr: { borderColor: theme('colors.gray.200') },
        'ol li::before': {
          fontWeight: '600',
          color: theme('colors.gray.500'),
        },
        'ul li::before': {
          backgroundColor: theme('colors.gray.500'),
        },
        strong: { color: theme('colors.gray.600') },
        blockquote: {
          color: theme('colors.gray.900'),
          borderLeftColor: theme('colors.gray.200'),
        },
      },
    },
    lg: {
      'ol li::marker': {
        content: 'none',
      },
      'ul li::marker': {
        content: 'none',
      },
      ul: {
        paddingLeft: '0px',
      },
      'ul > li': {
        paddingLeft: '0px',
      },
    },
    dark: {
      css: {
        color: theme('colors.gray.300'),
        a: {
          color: theme('colors.primary.400'),
          '&:hover': {
            color: theme('colors.primary.200'),
          },
          code: { color: theme('colors.primary.400') },
        },
        h1: {
          fontWeight: '700',
          letterSpacing: theme('letterSpacing.tight'),
          color: theme('colors.gray.100'),
        },
        h2: {
          fontWeight: '700',
          letterSpacing: theme('letterSpacing.tight'),
          color: theme('colors.gray.100'),
        },
        h3: {
          fontWeight: '600',
          color: theme('colors.gray.100'),
        },
        'h4,h5,h6': {
          color: theme('colors.gray.100'),
        },
        hr: { borderColor: theme('colors.gray.700') },
        'ol li:before': {
          fontWeight: '600',
          color: theme('colors.gray.400'),
        },
        'ul li:before': {
          backgroundColor: theme('colors.gray.400'),
        },
        strong: { color: theme('colors.gray.100') },
        thead: {
          color: theme('colors.gray.100'),
        },
        tbody: {
          tr: {
            borderBottomColor: theme('colors.gray.700'),
          },
        },
        blockquote: {
          color: theme('colors.gray.100'),
          borderLeftColor: theme('colors.gray.700'),
        },
      },
    },
  }),
  plugins: [require('@tailwindcss/typography')],
}
