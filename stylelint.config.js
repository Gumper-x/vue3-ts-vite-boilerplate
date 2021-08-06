module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-standard"],
  plugins: ["stylelint-scss", "stylelint-prettier"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "prettier/prettier": true,
    "comment-empty-line-before": "never",
  },
};
