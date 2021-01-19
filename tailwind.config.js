  
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Merriweather': ['Merriweather', 'serif'],
        'Roboto':['Roboto', 'sans-serif'],
        'Alegreya': ['Alegreya', 'serif']
      },
      colors: {
        'text': '#f05454',
        'background': '#f4f5db',
        'title': '#487e95',
        'subtitle':'#23689b'
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
