/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "back-pattern": "url('/img/back-pattern.png')",
      },
      colors: {
        light: {
          accent: colors.orange[500],
          background: colors.sky[100],
          button: colors.slate[400],
          calculator: colors.slate[300],
          dark: colors.sky[800],
          secondary: colors.blue[400],
          text: colors.sky[50],
        },
        dark: {
          accent: colors.pink[900],
          background: colors.zinc[600],
          button: colors.stone[600],
          calculator: colors.zinc[400],
          dark: colors.stone[800],
          secondary: colors.purple[600],
          text: colors.purple[100],
        },
      },
    },
  },
  plugins: [],
};
