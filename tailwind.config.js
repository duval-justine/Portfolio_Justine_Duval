module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Extended/red/50": "#FEF2F2",
        "Extended/red/900": "#F87171",
        "Extended/true-gray/900": "#171717",
      },
      "fontFamily": {
        "space-grotesk": "Space Grotesk",
        "karla": "Karla"
      },
    },

  },
  plugins: [],
}
