module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "react/require-default-props": "off",
    "jsx-a11y/anchor-is-valid": "off"
    "react/prop-types": "off"
  },
};
