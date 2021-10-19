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
      fontSize: ["hover", "focus"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
