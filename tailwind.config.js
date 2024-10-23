/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "lightText":"#1C93C5",
        "textprimary":"#003767",
        "fontColor":"#003767"
      }
    },
  },
  plugins: [],
}

