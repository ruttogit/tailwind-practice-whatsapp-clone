/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/images/bg-weather.png')",
      }
    },
  },
  plugins: [],
}

