/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{jsx,tsx,js,ts}",
    "./src/components/**/*{jsx,tsx,js,ts}",
    "./src/components/*{jsx,tsx,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2091F9',
        black: '#252B42',
        secondBlack: '#374754',
        lightGray: '#E8E8E8',
        darkBlack: '#18171D',
        border: '#D8D8D8',
      },
      backgroundImage: {
        '': ''
      },
      fontFamily: {
        'graphic': ['Graphic', 'sans-serif']
      },
      margin: {
        '10.5': '42px',
        '22.5': '90px',
        '33': '132px'
      },
      height: {
        topSection: '1042px',
        playButton: '187px'
      },
      width: {
        playButton: '187px'
      }
    },
  },
  plugins: [],
}
