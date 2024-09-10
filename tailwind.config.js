/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTextColor: "#2F2F2F",
        blueTextColor: "#0087CC",
        primaryButtonColor: "#0087CC",
        primaryButtonBorderColor: "#0087CC",
        validationButtonColor: "#FF7D7D",
        validationButtonBorderColor: "#FF0000",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        geo: ["Geo", "sans-serif"],
        zenTokyoZoo: ["Zen Tokyo Zoo", "system-ui"],
      },
    },
  },
  plugins: [],
};
