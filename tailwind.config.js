// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin')
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '380px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "backApp": {
          "light": "#d1d5db",
          "dark": "#334155"
        }
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}