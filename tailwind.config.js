module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
