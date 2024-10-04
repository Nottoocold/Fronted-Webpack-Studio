import globals from "globals";
import pluginJs from "@eslint/js";

const recommendedRules = {
  name: "eslint-config-recommended",
  ...pluginJs.configs.recommended,
};

export default [
  {
    ignores: ["dist/*", "build/*"],
  },
  {
    languageOptions: {
      globals: globals.browser, // add browser global variables to the environment
      parserOptions: {
        sourceType: "module", // es module
        // ecmaFeatures: {
        //   jsx: true, // enable JSX syntax in ESLint when using React plugin
        // },
      },
    },
  },
  recommendedRules,
  {
    name: "custom",
    rules: {
      "no-undef": "off",
      "no-unused-vars": "warn",
    },
  },
  {
    name: "override",
    rules: {
      "no-unused-vars": "error", // override the above rule
      "no-var": "error", //
    },
  },
];
