module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest/globals: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    'no-console': 0,
    'eol-last': 0,
    'no-multiple-empty-lines': 0,
    'arrow-body-style': 0,
    'import/extensions': 0,
    'no-confusing-arrow': 0,
    'arrow-parens': 0,
    'padded-blocks': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'no-unused-vars': 0,
  },
};
