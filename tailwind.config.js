module.exports = {
  purge: false,
  darkMode: "class",
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
      scale: ["group-hover", "dark"],
    },
  },
  plugins: [],
};
