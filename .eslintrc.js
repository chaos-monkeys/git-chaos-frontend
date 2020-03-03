module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
    useJSXTextNode: true
  },
  env: {
    browser: true,
    jest: true
  },
  plugins: ["@typescript-eslint", "react-hooks", "jest", "prettier"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  rules: {
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/setup-test-env.tsx", "**/*.test.*"]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "@typescript-eslint/camelcase": ["error", { properties: "never" }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "all"
      }
    ]
  }
};
