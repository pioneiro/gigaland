module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "active"],
      borderWidth: ["hover", "focus"],
      ringWidth: ["hover", "active"],
      height: ["hover", "focus"],
      width: ["hover", "focus"],
    },
  },
  plugins: [],
};
