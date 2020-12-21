const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#7ec1ff",
          200: "#69b7ff",
          300: "#53adff",
          400: "#3ea2ff",
          500: "#2898ff",
          600: "#2898ff",
          700: "#2489e6",
          800: "#207acc",
          900: "#185b99",
        },
        purple: "#383753",
        violet: "#433AAA",
        tomato: "#A44C4C",
        pink: "#B80058",
      },
    },
  },
}
