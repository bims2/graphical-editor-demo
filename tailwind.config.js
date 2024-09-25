/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./index.html", "./src/html/*.html"],
  theme: {
    extend: {
      colors: {
        'pupple': '#B1B2FF',
        'custom-blue-100': '#EEF1FF',
        'custom-blue-200': '#D2DAFF',
        'custom-blue-300': '#AAC4FF',
      },
    },
  },
  plugins: [],
}

