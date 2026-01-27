/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dsm: {
          main: "#009E49",
          dark: "#00853E",
          logo: "#00B050",
          bg: "#F8F9FA",
        },
      },
    },
  },
  plugins: [],
}
