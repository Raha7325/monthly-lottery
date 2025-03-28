/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/**/*.html', './src/**/*.vue',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'rose': {
        100: '#ffe4e6',
        200: '#fecdd3',
        400: '#fb7185',
        500: '#f43f5e',
      },
      'amber': {
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#f59e0b',
      },
      'green': {
        100: '#a9e5d5',
        200: '#a9e5d5',
        300: '#a9e5d5',
        400: '#36B391',
      },
      'gray': {
        100: '#fafafb',
        200: '#d4d4d8',
        300: '#6b7280',
      },
      'violet': {
        100: '#c4b5fd',
        200: '#6d28d9',
        300: '#4c1d95'
      },
      'indigo': {
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
      },
      'cyan': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
      },
      'fuchsia': {
        100: '#fbcfe8',
        200: '#e879f9',
        300: '#d946ef',
        400: '#f472b6',
      },
      'teal': {
        100: '#f0fdfa',
        200: '#5eead4',
        300: '#99f6e4',
        400: '#fff',
      },
      'orange': {
        100: '#fed7aa',
        200: '#fdba74',
        300: '#fb923c',
        400: '#f97316',
      },
      'sky': {
        100: '#bae6fd',
        200: '#7dd3fc',
        300: '#38bdf8',
        400: '#0ea5e9',

      }
    },
    container: {
      center: true,
      padding: {
        sm: '4.5rem',
        md: '1rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '4.5rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
