import globals from "globals";
//import pluginJs from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  {
    ignores: ["dist/*", "build/*"],
  },
  react.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  react.configs.flat["jsx-runtime"], // Add this if you are using React 17+
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
];
