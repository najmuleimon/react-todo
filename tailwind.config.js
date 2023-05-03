/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          lg: "16px",
          xl: "16px",
          "2xl": "16px"
        },
        screens: {
          lg: '800px',
          xl: '800px',
          '2xl': '800px'
        }
      }
    },
  },
  plugins: [],
}