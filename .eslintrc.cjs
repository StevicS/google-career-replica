/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "babel-eslint",
  },
  env: {
    "vitest-globals/env": true,
  },
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
  },
};
