module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0px',
        screens: {
          'lg': '1366px',
        },
      },
      fontFamily: {
        "roboto": "Roboto, sans-serif"
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
