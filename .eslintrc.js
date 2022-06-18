module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'prettier/prettier': 2,
    'no-console': 1,
    'no-var': 'error',
    'prefer-const': 'error',
  },
}
