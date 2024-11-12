const path = require("path");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "jsx-a11y",
    "prettier",
    "import",
    "check-file"
  ],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        printWidth: 100,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "none",
        bracketSpacing: true,
        bracketSameLine: false,
        endOfLine: "auto"
      }
    ],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], "internal", "parent", ["sibling", "index"]],
        "newlines-between": "always",
        named: true,
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{ts}": "KEBAB_CASE"
      },
      {
        ignoreMiddleExtensions: true
      }
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**": "KEBAB_CASE"
      }
    ],
    "check-file/filename-blocklist": [
      "error",
      {
        "**/src/modules/**/dtos/*.ts": "*.dto.ts"
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        project: path.resolve(__dirname, "tsconfig.json")
      }
    }
  }
};
