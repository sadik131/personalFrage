/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0',
          sm: '0',
          lg: '0',
          xl: '0',
        },
      },
      fontFamily: {
        "roboto": "Roboto, sans- serif"
      },
      colors: {
        "lightText": "#1C93C5",
        "textprimary": "#003767",
        "fontColor": "#003767"
      }
    },
  },
  plugins: [],
}

