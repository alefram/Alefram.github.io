module.exports = {
  darkMode: 'class',
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
