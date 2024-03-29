/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {'3xl': '1614px'},
      colors: {
        'theme-green': '#9ED1A3',
        'theme-back': '#FDF4F5',
      }
    },
  },
  plugins: [],
}

