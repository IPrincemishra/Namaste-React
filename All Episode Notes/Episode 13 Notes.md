# Episode 13 - Time for the test

## 01 - Types of testing (developer)

### Unit Testing

- Tests individual components or functions in isolation
- Focuses on the smallest parts of the application

### Integration Testing

- Tests how different components work together
- Ensures that integrated parts of the application function correctly

### End to End Testing (e2e testing)

- Tests the entire application flow from start to finish
- Simulates real user scenarios to validate the system as a whole

### Regression Testing

- Ensures that previously developed and tested features still work after a change
- Helps catch bugs introduced by new code changes

### Performance Testing

- Tests the application's responsiveness, stability, and scalability under load
- Helps identify bottlenecks and optimize performance

## 02 - Testing in React

### Install React Testing Library

- A lightweight library for testing React components
- Encourages good testing practices by focusing on user interactions
- Provides utilities for querying and interacting with components in a way that resembles how users interact with them

- **Installation :**

```bash
npm install -D @testing-library/react
```

### Install Jest

- A popular testing framework for JavaScript applications
- Works well with React and provides a rich set of features for testing
- Supports mocking, snapshot testing, and code coverage analysis

- **Installation :**

```bash
npm install -D jest
```

### Babel dependecies for Jest

- Babel is often used to transpile modern JavaScript syntax for Jest
- Allows you to write tests using the latest JavaScript features

- **Installation :**

```bash
npm install -D babel-jest @babel/core @babel/preset-env
```

#### Configuration babel

babel.config.js

```js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

### Configure Parcel config file to disable default babel transpilation

- **.parcelrc**

```javascript
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

### Jest configuration

- Create a `jest.config.js` file in the root of your project

```bash
npm init jest@latest
```

#### jest-environment-jsdom for jest v28

```bash
npm i -D jest-environment-jsdom
```

### Install @babel/preset-react

- This preset is used to transpile JSX and other React-specific syntax into regular JavaScript.
- It allows you to write modern React code using the latest features.

- **Installation :**

```bash
npm install -D @babel/preset-react
```

#### include @babel/preset-react in babel.config.js

babel.config.js

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
};
```

### Install testing-library/jest-dom

```bash
npm i -D @testing-library/jest-dom
```

## Dunder

- The term "dunder" is a slang abbreviation for "double underscore" in programming, especially in Python. It refers to identifiers (usually method names) that begin and end with two underscores, like **init**,**test**, **str**, or **repr**.
