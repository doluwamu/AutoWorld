/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1440px'
    },
    extend: {
      colors: {
        subOrange: 'hsla(18, 100%, 80%, 0.1)',
        main: 'hsl(18, 99%, 49%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
