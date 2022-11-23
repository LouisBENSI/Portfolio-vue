module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#1F2937",
        secondary : "#72D2AE",
        background : "#FFFAF3",
        secondaryTransparent : "#72D2AE8D",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}