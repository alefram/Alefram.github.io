  
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Roboto':['Roboto', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'square-peg': ['Square Peg', 'cursive']
      },
      colors: {
        'background': '#202124',
        'supertext': '#f05454',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
