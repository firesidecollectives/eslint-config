"use strict";

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  plugins: ['react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/camelcase': [1, { properties: 'never', ignoreDestructuring: true }],
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-use-before-define': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0,
    'no-console': 2,
    'no-nested-ternary': 1,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 1,
    'react/no-unescaped-entities': 0,
    'react/prop-types': [1, { skipUndeclared: true }],
    'spaced-comment': 0,
    
    // Prettier
    'prettier/prettier': [
      2,
      {
        arrowParens: 'always',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
  },
};
