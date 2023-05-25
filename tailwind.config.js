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
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      text: "#515553",
      primary: "#6fc54c",
      secondary: "#325343",
      button: "#9bd58b",
      yellow: "#f8e16c",
      red: "#fc5555",
      blue: "#457777",
      orange: "#FD5E08",
      green: "#4A7A3E",
    },
  },
  plugins: [],
};
