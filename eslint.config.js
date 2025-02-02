import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        describe: "readonly", 
        it: "readonly", 
        expect: "readonly" 
      }
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
