# Episode 08 - Let's get Classy

## 01 - Class Based Components

- Class based components are a way to define components in React using ES6 classes.
- They allow for more complex state management and lifecycle methods compared to functional components.
- Class components must extend from `React.Component` and implement a `render` method that returns JSX.
- They can have state and lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- Example of a simple class component:

  ```javascript
  import React from 'react';

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }

  export default MyComponent;
  ```

### props and super props

- In class components, `props` are passed to the constructor using `super(props)`.
- This allows the component to access `this.props` within the class.
- Class components can also define their own state using `this.state`.
- The `render` method is responsible for returning the JSX that defines the component's UI.
- Class components can have lifecycle methods that allow them to hook into different stages of the component's life.

#### why we use super props?

- Jab hum React ke class-based component mein constructor likhte hain, toh agar hum props ko constructor mein receive kar rahe hain, toh humein super(props) call karna padta hai. Iske kuch important reasons hain:

1. Parent class ko props pass karna
React ke class components React.Component se inherit karte hain. Jab hum constructor banate hain, toh humein parent class ka constructor bhi call karna padta hai using super(). Agar hum props ko constructor mein le rahe hain, toh super(props) likhna zaroori hota hai taaki parent class ko bhi ye props mil sakein.

2. this.props ko constructor mein access karna
Agar aap constructor ke andar this.props ka use karna chahte ho (jaise ki initial state set karne ke liye), toh super(props) likhna zaroori hai. Agar sirf super() likhenge, toh constructor ke andar this.props undefined hota hai.

3. React ke rules ko follow karna
React ke class components mein constructor mein super(props) likhna ek best practice hai, jisse component properly initialize hota hai aur future mein koi problem nahi aati.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);  // Parent class ko props pass karna zaroori hai
    this.state = {
      name: props.name  // constructor mein props access kar pa rahe hain
    };
  }

  render() {
    return <h1>Hello, {this.state.name}!</h1>;
  }
}
```

## 02 - Lifecycle Methods

- Lifecycle methods are special methods in class components that allow you to hook into different stages of a component's life.
- They include methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- These methods can be used to perform actions like fetching data, updating the DOM, or cleaning up resources.
- Example of using lifecycle methods:

  ```javascript
  import React from 'react';

  class MyComponent extends React.Component {
    componentDidMount() {
      console.log('Component did mount');
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('Component did update');
    }

    componentWillUnmount() {
      console.log('Component will unmount');
    }

    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }
  export default MyComponent;
  ```

- `componentDidMount` is called once the component is mounted to the DOM, making it a good place to fetch data or set up subscriptions.
- `componentDidUpdate` is called whenever the component updates, allowing you to respond to prop or state changes.
- `componentWillUnmount` is called just before the component is removed from the DOM, making it a good place to clean up resources.
- Lifecycle methods are essential for managing side effects and ensuring that components behave correctly throughout their lifecycle.
- In modern React development, hooks like `useEffect` can achieve similar functionality in functional components, but understanding lifecycle methods is still important for working with class components.

```javascript
import React, { useEffect } from 'react';

const MyFunctionalComponent = (props) => {
  useEffect(() => {
    console.log('Component did mount');

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component did update');
  }, [props.name]);

  return <h1>Hello, {props.name}!</h1>;
};

export default MyFunctionalComponent;
```

## 03 - Class Based Components vs Functional Components

- Class components are more verbose and require more boilerplate code compared to functional components.
- Functional components are simpler and easier to read, especially with the introduction of hooks.
- Class components have lifecycle methods that allow for more control over the component's behavior at different stages.
- Functional components can use hooks like `useState` and `useEffect` to manage state and side effects, making them more powerful and flexible.
- In modern React development, functional components with hooks are preferred for most use cases due to their simplicity and ease of testing.

```text
/*

- Parent Constructor
- Parent Render

  - First Constructor
  - First Render

  - Second Constructor
  - Second Render

  <DOM UPDATED - IN SINGLE BATCH>

  - First ComponentDidMount
  - Second ComponentDidMount
  
- Parent ComponentDidMount

*/
```
