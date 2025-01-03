/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{html,js}",
    "./index.html",
    "./styles/**/*.css"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#f0eeec",
          secondary: "#e5e2e0",
          "bg-lighter": "#ffffff",
          text: "#0a0a0a",
          "text-secondary": "#2b2b2b",
          accent: "#800020",
          "accent-hover": "#3d2f2b",
          "border-color": "#e5e0de",
          "selection-bg": "#e5e0de",
          link: "#800020",
          "link-hover": "#666666",
        },
        dark: {
          bg: "#2d2e34",
          secondary: "#33343a",
          "bg-lighter": "#43444a",
          text: "#e2e1e4",
          "text-secondary": "#bcbbc0",
          accent: "#e6a9b3",
          "accent-hover": "#c4c3c8",
          "border-color": "#3f4045",
          "selection-bg": "#3f4045",
          link: "#e6a9b3",
          "link-hover": "#f0c4cb",
        },
      },
    },
  },
  plugins: [],
}

