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
        main: 'hsl(18, 99%, 49%)',
        subOrange: 'hsla(18, 100%, 80%, 0.1)',
        deepOrange: 'hsl(18, 99%, 30%)',
        lightOrange: 'hsl(18, 97%, 58%)',
        blue: 'hsla(216, 100%, 31%, 1)',
        lightBlue: 'hsla(216, 100%, 95%, 1)',
        grey: 'hsla(0, 0%, 64%, 1)',
        offWhite: 'hsla(0, 0%, 92%, 1)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
