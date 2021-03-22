"use strict";

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
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
    'arrow-parens': 'always',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'max-len': 'off',
    'no-console': 'error',
    'no-nested-ternary': 'warn',
    'no-shadow': 'error',
    'no-use-before-define': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': [1, { skipUndeclared: true }],
    'spaced-comment': 'off',
    
    // Prettier
    'prettier/prettier': [
      'error',
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
