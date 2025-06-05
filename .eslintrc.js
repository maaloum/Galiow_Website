module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/no-extraneous-dependencies": "error",
    "import/extensions": "error",
    "import/no-unresolved": "error",
    "react/react-in-jsx-scope": "off",
  },
};
