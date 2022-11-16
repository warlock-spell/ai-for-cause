/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ai-logo-black": "#272727",
        "ai-logo-text": "#ece6db",
        "ai-logo-header-yellow": "#ffde59",
      },
    },
  },
  plugins: [],
}
