/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
