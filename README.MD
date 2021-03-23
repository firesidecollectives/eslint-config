# eslint-config-fireside

ESLint + Prettier configurations for Fireside's TypeScript projects.

## Documentation

The style guide enforced by these configurations extends from the mature and thoroughly-documented [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

---

## Installation

```
yarn add eslint-config-fireside @typescript-eslint/parser eslint prettier typescript --dev
touch .eslintrc.js
```

### `.eslintrc.js`

```javascript
module.exports = {
  extends: ["fireside"],
  parserOptions: {
    project: './tsconfig.json'
  }
};
```
