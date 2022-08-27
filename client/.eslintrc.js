/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "import",
        "lodash",
    ],
    "settings": {
        "import/internal-regex": "^@app/",
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx",
                ".d.ts",
            ],
        },
        "import/resolver": {
            "typescript": {},
        },
    },
    ignorePatterns: [
        "config/**/*.js",
        "config/**/*.mjs",
    ],
    rules: {
        "semi": ["warn", "never"],
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "comma-dangle": ["warn", "always-multiline"],
        "prefer-const": ["warn", { "destructuring": "all" }],
        "object-curly-spacing": ["warn", "always"],
        "keyword-spacing": ["warn", { "after": true }],
        "space-before-blocks": ["warn"],
        "linebreak-style": ["error", "unix"],
        // "no-inline-comments": "off",
        // "no-console": "off",
        // ---------------------------------------------------------------------
        // React
        // https://github.com/yannickcr/eslint-plugin-react
        // ---------------------------------------------------------------------
        "react/react-in-jsx-scope": "off", // we've taken care of this with webpack
        "react/prop-types": "off",
        "react/no-unescaped-entities": "warn",
        // ---------------------------------------------------------------------
        // TypeScript
        // https://github.com/typescript-eslint/typescript-eslint
        // ---------------------------------------------------------------------
        "@typescript-eslint/no-empty-interface": ["off"],
        // "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "no-unused-vars": "off", // This doesn't play nice with TypeScript
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/type-annotation-spacing": ["warn"],
        "@typescript-eslint/ban-ts-comment": ["off"],
        "@typescript-eslint/no-empty-function": ["warn"],
        "@typescript-eslint/ban-types": ["warn", { "types": { "Function": false }, "extendDefaults": true } ],
        // ---------------------------------------------------------------------
        // Imports
        // https://github.com/import-js/eslint-plugin-import
        // ---------------------------------------------------------------------
        "import/no-unresolved": ["off"],
        "import/first": ["warn"],
        "import/order": ["warn", {
            "newlines-between": "always",
            "groups": [
                "builtin",
                "external",
                ["internal", "sibling", "parent"],
                // "index",
                // "object",
                // "type",
            ],
            "pathGroups": [
                {
                    "pattern": "{@app/**,@assets/**}",
                    "group": "internal",
                    // "position": "after",
                },
                {
                    "pattern": "@app/**",
                    "group": "internal",
                    // "position": "after",
                },
                {
                    "pattern": "@assets/**",
                    "group": "internal",
                    // "position": "after",
                },
            ],
            // "distinctGroup": false,
        }],
    },
}
