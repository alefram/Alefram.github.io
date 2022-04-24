module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
   './pages/**/*.{js,ts,jsx,tsx}',
  ],
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
