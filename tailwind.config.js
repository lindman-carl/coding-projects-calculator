/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "back-pattern": "url('/img/back-pattern.png')",
        cubes: "url('/img/cubes.png')",
      },
    },
  },
  plugins: [],
};
