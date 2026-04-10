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
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [
    // Este plugin añade la utilidad para ocultar el scrollbar
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',     /* IE and Edge */
          'scrollbar-width': 'none',        /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',                /* Chrome, Safari and Opera */
          },
        },
      })
    },
  ],
}
