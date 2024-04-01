module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [
    "react-refresh",
    "import" // Make sure you have 'eslint-plugin-import' installed
  ],
  rules: {
    // Existing rules
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Adjust this rule for unused vars to warn
    "no-unused-vars": "warn",

    // If you want to warn for unused imports with 'eslint-plugin-import'
    // Ensure you have configured it correctly in the 'plugins' section
    "import/no-unused-modules": [1, { "unusedExports": true, "missingExports": true }],

    // Additionally, to specifically target unused imports
    "import/no-unresolved": "off", // if you're having issues with module resolution, otherwise set to "warn"
    "import/named": "warn",
    "import/namespace": "warn",
    "import/default": "warn",
    "import/export": "warn"
  },
};
