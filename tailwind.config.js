/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{jsx,tsx,js,ts}",
    "./src/components/**/*{jsx,tsx,js,ts}",
    "./src/components/*{jsx,tsx,js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '': ''
      },
      fontFamily: {
        'graphic': ['Graphic', 'sans-serif']
      },
      margin: {
        '10.5': '42px',
      }
    },
  },
  plugins: [],
}
