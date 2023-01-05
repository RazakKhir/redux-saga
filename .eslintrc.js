module.exports = {
    env: {
        // "jest/globals": true, --> once starting jest, then enable this flag
        browser: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            destructuring: true
        },
        ecmaVersion: 11,
        sourceType: "module"
    },
    plugins: ["@typescript-eslint", "react", "react-hooks", "jest"],
    rules: {
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/no-magic-numbers": "warn",
        "@typescript-eslint/quotes": ["warn", "double", {allowTemplateLiterals: true}],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "react/prop-types": "off"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
}