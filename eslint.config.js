const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
        runtime: "automatic", // Use the new JSX transform
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "no-unused-vars": "off", // Turn off base rule
      "react/jsx-uses-vars": "error", // Use React-specific rule
      "react/jsx-uses-react": "off", // Not needed with new JSX transform
      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
      "no-console": "warn",
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".expo/**",
      ".expo-shared/**",
      "dist/**",
      "build/**",
      ".cache/**",
      "*.config.js",
      "*.config.ts",
      ".yarn/**",
    ],
  },
];
