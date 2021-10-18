module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "active"],
      borderWidth: ["hover", "focus", "group-hover"],
      ringWidth: ["hover", "active"],
      height: ["hover", "focus"],
      width: ["hover", "focus", "group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
