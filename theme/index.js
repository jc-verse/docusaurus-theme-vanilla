const path = require("path");

module.exports = function themeVanilla() {
  return {
    name: "docusaurus-theme-vanilla",
    getThemePath() {
      return path.join(__dirname, "./theme");
    },
  };
};
