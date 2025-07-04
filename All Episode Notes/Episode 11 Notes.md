# Episode 11 - Data is the New Oil

## 01 - High Order Components

- React mein High Order Component (HOC) ek aisa function hota hai jo ek component ko input leta hai, usme kuch extra functionality ya features add karta hai, aur fir ek naya component return karta hai.
- HOCs ka use code reuse, logic abstraction, aur component composition ke liye hota hai.
- HOCs ko React mein higher-order functions ki tarah samjha ja sakta hai, jo ek ya zyada components ko input lete hain aur ek naya component return karte hain.
- HOCs ka use karne se aap apne components ko modular aur reusable bana sakte hain, jisse code maintainability aur readability improve hoti hai.

### HOC Kaise Banate Hain?

```javascript
import React from 'react';
function withExtraInfo(WrappedComponent) {
  return class extends React.Component {
    render() {
      // Extra functionality ya data yahan add kar sakte hain
      const extraInfo = { info: 'This is extra info' };
      return <WrappedComponent {...this.props} extraInfo={extraInfo} />;
    }
  };
}
function MyComponent(props) {
  return (
    <div>
      <h1>My Component</h1>
      <p>{props.extraInfo.info}</p>
    </div>
  );
}
const EnhancedComponent = withExtraInfo(MyComponent);
export default EnhancedComponent;
```

### HOC Kaise Use Karte Hain?

```javascript
import React from 'react';
import EnhancedComponent from './EnhancedComponent';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <EnhancedComponent />
    </div>
  );
}

export default App;
```

### HOC Kaise Kaam Karta Hai?

- `withExtraInfo` function ek HOC hai jo `WrappedComponent` ko input leta hai.
- Ye ek naya component return karta hai jo `extraInfo` naam ka ek prop pass karta hai.
- `MyComponent` ko `EnhancedComponent` ke through wrap kiya gaya hai, jisse `extraInfo` prop milta hai.
- Is tarah se aap HOCs ka use karke apne components ko enhance kar sakte hain bina unhe directly modify kiye.

### When to use HOCs?

- Jab aapko ek hi functionality ko multiple components mein reuse karna ho.
- Jab aapko component ke behavior ko modify karna ho bina uske code ko change kiye.
- Jab aapko cross-cutting concerns (jaise logging, authentication, etc.) ko handle karna ho.  
- Jab aapko component ke props ko manipulate karna ho ya additional data pass karna ho.

## 02 - Controled vs Uncontrolled Components

- React mein controlled components wo hote hain jinke state aur behavior ko React ke through control kiya jata hai, jabki uncontrolled components wo hote hain jinke state ko DOM ke through control kiya jata hai.
- Controlled components mein form elements (jaise input, textarea, select) ki value React state se bind hoti hai, jabki uncontrolled components mein ye value DOM ke internal state se manage hoti hai.
- Controlled components ka use karne se aapko form data par zyada control milta hai, jaise validation, submission, aur user input handling.
- Uncontrolled components ka use karne se aapko simpler code likhne ki flexibility milti hai, lekin aapko form data par utna control nahi milta.

### Controlled Component Example

```javascript
import React, { useState } from 'react';

function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledComponent;
```

### Uncontrolled Component Example

```javascript
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledComponent;
```

## 03 - Lifting State up

- Jab do ya zyada components ko ek hi data ya state ki zarurat ho, toh us state ko unke sabse kareeb common parent component mein le aana aur fir us state ko props ke through un components tak bhejna. Is tarike se dono components ka data hamesha sync mein rahta hai.

### Kyon Zaruri Hai?

- Jab aap chahte ho ki do sibling components (ya parent-child) ek hi data ko access ya update karein.
- Agar har component apni alag state rakhega toh data inconsistent ho sakta hai.
- Parent mein state rakhne se ek jagah se data control hota hai, aur sab components mein ek hi value reflect hoti hai.

### Example: Counter App

**Scenario:**

- Do components hain:
  - CounterDisplay (jo value show karega)
  - CounterButton (jo value badhata hai)

- Agar dono apni-apni state rakhenge toh sync nahi hoga.
- Isliye state ko parent mein le jao.

Code

```jsx
// Parent Component
import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterDisplay count={count} />
      <CounterButton count={count} setCount={setCount} />
    </>
  );
}

export default CounterApp;

// CounterDisplay.js
function CounterDisplay({ count }) {
  return <h2>Count: {count}</h2>;
}

// CounterButton.js
function CounterButton({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  );
}
```

## 04 - props Drilling

- Props drilling ka matlab hai ki jab aapko kisi component se props ko uske child components tak pass karna padta hai, aur ye process kai levels tak chalta hai.
- Is process mein, agar aapko kisi deeply nested component ko props pass karna hai, toh aapko har parent component ko props pass karna padta hai, chahe us parent component ko us prop ki zarurat na ho.
- Ye process code ko complex aur difficult to maintain bana sakta hai, kyunki aapko har parent component mein props pass karna padta hai, chahe uski zarurat na ho.

### Example of Props Drilling

```jsx
function Parent() {
  const message = "Hello from Parent";
  return <Child message={message} />;
}

function Child({ message }) {
  return <GrandChild message={message} />;
}

function GrandChild({ message }) {
  return <p>{message}</p>;
}

```

## 05 - React Context API

- React Context API ek built-in feature hai jo aapko global state management ki suvidha deta hai, jisse aap data ko components ke beech easily share kar sakte hain bina props drilling ke.
- Iska use karne se aapko ek global state create karne ki suvidha milti hai, jisse aap kisi bhi component mein access kar sakte hain.
- Context API ka use karne se aapko props drilling ki problem se chutkara milta hai, aur aap easily data ko share kar sakte hain.

### Theme Switcher Example

#### 1. Context Banana

```jsx
// ThemeContext.js
import { createContext } from "react";

const ThemeContext = createContext("light"); // Default value "light"
export default ThemeContext;

```

#### 2. Provider Banana (App ke Top Level par)

```jsx
// App.js
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemeButton from "./ThemeButton";
import DisplayTheme from "./DisplayTheme";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h1>React Context API Example</h1>
      <ThemeButton />
      <DisplayTheme />
    </ThemeContext.Provider>
  );
}

export default App;
```

#### 3. Context Use Karna kisi bhi Child Component mein

```jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeButton;
```

#### 4. `DisplayTheme.js`

```jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function DisplayTheme() {
  const { theme } = useContext(ThemeContext);

  return <p>Current Theme: <b>{theme}</b></p>;
}

export default DisplayTheme;
```

## 06 - How to update context value

- Context value ko update karne ke liye, aapko context provider ke value prop mein ek function pass karna hota hai jo state ko update karega.
- Is function ko aap `useState` hook ke saath define kar sakte hain, jisse aap context value ko dynamically change kar sakte hain.

### UserContext.Provider

- UserContext ko create karne ke liye, aap `createContext` ka use karte hain.
- Is context ko aap apne application ke kisi bhi component mein use kar sakte hain.
- `UserContext.Provider` ka use karte hue, aap context value ko define karte hain jo ki child components mein accessible hoti hai.
- Is context ko use karne ke liye, aapko `useContext` hook ka istemal karna hoga.
- `useContext` hook ko istemal karte hue, aap context value ko kisi bhi component mein access kar sakte hain.
- Is tarah se aap context value ko easily share kar sakte hain bina props drilling ke.

### Example of Updating Context Value

#### autentication context `App.js`

```jsx
const [userName, setUserName] = useState();
    // Autentication
    useEffect(() => {
        // Make and api call send username and password
        const data = {
            name: "Prince Mishra",
        }
        setUserName(data.name)
    }, [])
```

#### App.js

```jsx
return (
        <UserContext.Provider value={{ loggedInUser: userName }}>
            <div>
                <Header /> {/* Header */}
                <Outlet />
            </div>
        </UserContext.Provider >
    )
```

**Redux ek popular state management library hai jo JavaScript (especially React) apps ke liye use hoti hai. Iska main purpose hai global state ko ek centralized store me rakhna, taaki aapke app ke kisi bhi component se state ko easily access ya update kiya ja sake, bina prop drilling ke.**
