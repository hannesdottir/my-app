/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueTextColor: "#0087CC",
        primaryButtonColor: "#0087CC",
        primaryButtonBorderColor: "#0087CC",
      },
      fontFamily: {
        "zen-tokyo-zoo": ["Zen Tokyo Zoo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
