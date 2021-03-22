# eslint-config-fireside

ESLint + Prettier configurations for Fireside's TypeScript and JavaScript projects.

## Documentation

The style guide enforced by these configurations extends from the mature and thoroughly-documented [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

---

# Usage

The default configuration exported by this package's index is for TypeScript projects, as we should be using TypeScript where ever possible. If you need an analogous Javascript configuration, follow the instructions in the Javascript section below.

## Typescript

### Installation

```
yarn add eslint-config-fireside @typescript-eslint/parser eslint prettier typescript --dev
touch .eslintrc.js
```

### `.eslintrc.js`

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["fireside"],
};
```

---

## Javascript

### Installation

```
yarn add @dancan/eslint-config eslint prettier --dev
touch .eslintrc.js
```

### `.eslintrc.js`

```javascript
module.exports = {
  extends: ["fireside/js"],
};
```
