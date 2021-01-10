  
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Merriweather': ['Merriweather', 'serif'],
        'Roboto':['Roboto', 'sans-serif'],
        'Alegreya': ['Alegreya', 'serif']
      },
      colors: {
        'subtitles': '#1f6f8b',
        'bgdark': '#1c2b2d',
        'titles': '#e6d5b8',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
