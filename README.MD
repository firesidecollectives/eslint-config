# eslint-config-fireside

ESLint + Prettier configurations for Fireside's TypeScript projects.

## Documentation

The style guide enforced by these configurations extends from the mature and thoroughly-documented [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

---

## Installation

```
yarn add eslint-config-fireside eslint prettier typescript --dev
touch .eslintrc.js
```

### Install peer ESLint plugins and configs

ESLint plugins used by this config must also be installed within your project. This is a limitation within ESLint (see [RFC](https://github.com/eslint/rfcs/tree/master/designs/2019-config-simplification) and [progress](https://github.com/eslint/eslint/issues/13481)).

```
npm install eslint-plugin-import@^2.22.0 \
            eslint-plugin-jsx-a11y@^6.3.1 \
            eslint-plugin-react@^7.20.3 \
            eslint-plugin-react-hooks@^4.0.8 \
            eslint-config-prettier@^8.1.0 \
            eslint-plugin-prettier@^3.3.1 \
            eslint-plugin-jest@24.3.2 \
            @typescript-eslint/eslint-plugin@^4.4.1 \
            --save-dev
```

### `.eslintrc.js`

```javascript
module.exports = {
  extends: ["fireside"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
```
