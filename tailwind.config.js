  
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Roboto':['Roboto', 'sans-serif'],
        'bebasNue': ['Bebas Neue', 'cursive'],
        'banger': ['Bangers', 'cursive'],
        'nunito': ['Nunito Sans', 'sans-serif']

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
  plugins: [],
}
