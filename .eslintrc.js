module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    // Add under other rules
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  plugins: ["import", "promise", "prettier"],
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "no-else-return": "error",
    "default-param-last": "error",
    "no-var": "error",
    "no-lone-blocks": "error",
    "require-await": "error",
    "no-eq-null": "error",
    yoda: "error",
    // eslint-plugin-import
    "import/extensions": [
      "warn",
      "never",
      {
        vue: "always",
        css: "always",
        scss: "always",
      },
    ],
    // eslint-plugin-vue
    "vue/no-unused-components": "warn",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/v-on-function-call": ["error", "never"],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/require-direct-export": "error",
    "vue/no-unused-vars": "warn",
    // eslint-plugin-promise
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/no-nesting": "error",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "error",
    "promise/valid-params": "error",
    "promise/prefer-await-to-then": "warn",
    "promise/always-return": "error",
    // typescript-eslint
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
  },
};
