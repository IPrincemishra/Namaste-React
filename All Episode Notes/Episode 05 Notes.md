# Episode 05 - Let's get Hooked

## 01 - Folder Structure

### React Folder Structure Ka Basic Matlab

- Har cheez apni jagah pe ho: Jaise components ek folder mein, images ek alag folder mein, hooks alag, etc.
- Project ko samajhna aasan ho: Jab koi naya banda project dekhe, toh use turant samajh aa jaye ki kya cheez kahan rakhi hai.
- Bade project mein manage karna easy ho: Jaise-jaise project bada hota hai, sahi structure se code maintain karna easy ho jata hai.

### Common Folders in React Project

- src/
  - Main code yahan hota hai.
- components/
  - Sare reusable UI components jaise Button, Navbar, Card, etc. yahan rakhte hain.
- pages/
  - Alag-alag pages ya views (jaise Home, About, Contact) yahan rakhte hain.
- assets/
  - Images, fonts, CSS files, ya koi bhi static cheez yahan rakhi jati hai.
- hooks/
  - Custom React hooks yahan store karte hain.
- utils/
  - Helper ya utility functions yahan rakhte hain.
- context/
  - React context files (global state management ke liye) yahan rakhte hain.

### Example Folder Structure

```text
- src/
  - components/
  - pages/
  - assets/
  - hooks/
  - utils/
  - context/
- App.js
- index.js
```

## 02 - .js vs .jsx in React Components

### 1. .js (JavaScript)

- Ye normal JavaScript file ka extension hai.
- Modern React setups (jaise Create React App, Vite, Next.js, Parcel, etc.) .js files ke andar bhi JSX code ko samajh lete hain.
- Matlab, tum MyComponent.js ke andar JSX likh sakte ho, koi issue nahi aayega.

### 2. .jsx (JavaScript XML)

- Ye specifically batata hai ki file ke andar JSX likha hai.
- Thoda zyada clear ho jata hai ki is file mein React ka JSX code hai, plain JavaScript nahi.
- Pehle ke kuch tools mein .jsx zaroori hota tha, lekin ab aisa nahi hai.

### Best Practice Kya Hai?

- Dono extension sahi hain. Tum chahe .js use karo ya .jsx, React project kaam karega.
- Consistency important hai: Ek project mein jo bhi use karo, sab jagah wahi use karo.
- Agar tumhare team ya project guideline kuch specific bole, toh wahi follow karo.

## 03 - Import and Export in React

- Import aur export ka use React mein components, functions, ya variables ko alag-alag files mein share karne ke liye hota hai.
- Ye modularity aur reusability ko badhata hai.
- Import aur export ke bina, tumhe sab kuch ek hi file mein likhna padta, jo ki messy ho jata.

### React mein import aur export ke mainly do types hote hain

- Named export aur default export. In dono ka use tum apne components, functions, ya variables ko ek file se dusri file mein laane le jaane ke liye karte ho. Ye concept React hi nahi, JavaScript modules ka bhi hai.

#### 1. Default Export

- Ek file mein sirf ek hi default export ho sakta hai.
- Import karte waqt curly braces {} ki zarurat nahi hoti.
- Import karte waqt naam kuch bhi rakh sakte ho.

Example:

```jsx
import MyComponent from './MyComponent'; // Default export
export default MyComponent; // Default export
```

#### 2. Named Export

- Ek file mein jitne chahe utne named exports ho sakte hain.
- Import karte waqt curly braces {} ka use hota hai.
- Import karte waqt naam wahi rakhna padta hai jo export kiya hai (ya alias use kar sakte ho).

Example:

```jsx
import { MyFunction } from './utils'; // Named export
export const MyFunction = () => { ... }; // Named export
```

Example:

```jsx
import MyComponent from './MyComponent';
import { MyFunction } from './utils';

const App = () => {
    return (
        <div>
            <MyComponent />
            <MyFunction />
        </div>
    );
};
export default App;
```

### Named and default export at same time

- Agar tum ek hi component ko named export aur default export dono ek hi file me karte ho, toh technically ye possible hai, lekin generally iska koi practical use nahi hota. Ek hi component ko ek hi file me dono tarah se export karne ka matlab hai:

```jsx
// MyComponent.js
export function MyComponent() {
  return <div>Hello</div>;
}
export default MyComponent;
```

#### Import Karne Ka Tarika

- Ab tum is component ko import kar sakte ho:

```jsx
import MyComponent, { MyComponent as NamedMyComponent } from "./MyComponent";
```

- MyComponent (default export) bina curly braces aayega.
- `{ MyComponent as NamedMyComponent }` (named export) curly braces ke saath aayega.

## 04 - Utils Folder for Constants in React

- React projects mein utils folder generally "utility functions" ke liye use hota hai, lekin tum constants bhi usme rakh sakte ho—ya phir ek dedicated constants ya data folder bhi bana sakte ho, depending on project size aur team preference.

### Utils Folder Mein Constants Rakhna

- Agar tumhare constants (jaise API URLs, static values, config variables, etc.) chhote aur project-wide use hote hain, toh unko utils/constants.js ya utils/constants/index.js mein rakhna common practice hai.
- Lekin, agar constants zyada hain ya logically group ho sakte hain (jaise theme constants, error messages, etc.), toh ek constants ya data folder banana aur usme alag files rakhna zyada organized hota hai.

Example Structure:

```text
src/
  utils/
    formatters.js
    validators.js
    constants.js   // yahan tumhare shared constants aa sakte hain
```

## 05 - React Hooks (Normal JS Utility Fnc)

- React Hooks special functions hain jo tumhe React functional components ke andar state aur lifecycle features use karne dete hain — bina class component banaye.
- Pehle, agar tumhe state ya lifecycle methods (jaise componentDidMount) chahiye hoti thi, toh class component banana padta tha. Hooks aane ke baad ye sab functional components mein bhi possible ho gaya.

### Kyu Hote Hain (Why)?

- Functional components ko powerful banana: Pehle functional components sirf UI dikhane ke liye hote the, unmein state ya side-effects handle nahi ho sakte the. Hooks ne ye limitation hata di.
- Code ko simple, readable aur reusable banana: Hooks ki wajah se code chhota, modular aur maintainable ho gaya.

### Kab Use Karne Hote Hain?

- Jab bhi tumhe state (data jo change ho sakta hai) rakhni ho functional component mein.
- Jab tumhe side-effects handle karne ho (jaise API call, event listener, timer, etc.).
- Jab tumhe component ka lifecycle control karna ho (mount, update, unmount).

## 06 - React ke do sabse basic aur important hooks hain

### 1. useState – Local State Samjho

- useState ek aisa function hai jo tumhare component mein ek "super variable" create karta hai.
- Is variable ki value change ho sakti hai, aur jab bhi value change hoti hai, pura component dobara render ho jata hai.

#### Real-Life Example

Socho tum ek counter bana rahe ho (like Instagram likes):

```jsx
import React, { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ Likes: {likes}
    </button>
  );
}
```

- likes – current number of likes (state variable)
- setLikes – function jo likes ki value update karta hai
- useState(0) – shuruat me 0 likes

Jab bhi tum button pe click karte ho, setLikes(likes + 1) chalega, likes badh jayenge, aur component dobara render hoga.

### 2. useEffect – Side Effects Samjho

- useEffect tumhe aise kaam karne deta hai jo React ke "normal render" ke bahar hote hain, jaise:
  - API se data lana
  - Timer lagana
  - Event listener lagana
  - Document title change karna

#### Real-Life Eg

Socho tumhara component load hote hi ek API call karna hai:

```jsx
import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Side effect: API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // [] means sirf mount pe chale

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

- useEffect ke andar API call hoti hai, aur data aane par state update hoti hai.
- Dependency array ([]) ka matlab hai effect sirf component mount hone par chalega (jaise componentDidMount).
- Agar tum kisi variable ko dependency array me daal do, jaise [count], toh jab bhi count change hoga, effect dobara chalega.

#### Cleanup Example

Agar tumne koi timer lagaya ya event listener lagaya, toh unko cleanup bhi karna padta hai:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup
  };
}, []);
```

### 3. Other Hooks

- useContext
  - Global data (jaise theme, user info) ko share karne ke liye.
- useRef
  - Kisi DOM element ya value ko directly access karne ke liye, bina re-render ke.
- useMemo
  - Expensive calculations ko cache/memoize karne ke liye, taki bar-bar na ho.
- useCallback
  - Functions ko memoize karne ke liye, taki unnecessary re-renders na ho.

## 07 - React Render Concept

### What is Rendering in React?

- React tumhare component ka code (JSX) lekar decide karta hai ki screen par kya dikhana hai. Jab bhi tumhare component ki state ya props change hoti hai, React dobara se component ko call karta hai (re-render), taki UI hamesha latest data dikhaye.

### How Rendering Works

#### 1. Initial Render

- Jab app ya component pehli baar load hota hai, React tumhara component call karta hai aur uska output (JSX) ko screen par dikhata hai.

```jsx
import { createRoot } from 'react-dom/client';
import App from './App';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

#### 2. Re-render (Update)

- Jab bhi component ki state ya props change hoti hai (jaise button click, API response, input change), React fir se component ko call karta hai aur naya UI bana deta hai.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

- Clicking the button updates state, which triggers a re-render.

### The Render Process

- React’s render process has three main steps:

#### 1. Trigger a Render

- Happens on initial load or when state/props change.

#### 2. Render Phase

- React calls your components (functions or class render methods) to figure out what to display.
- This is a recursive process: if your component returns other components, React renders those as well.

#### 3. Commit Phase

- React compares the new virtual DOM with the previous one (diffing).
- Only the parts that have changed are updated in the real DOM for efficiency.

### Virtual DOM & Diffing

- React uses a virtual DOM (an in-memory representation of the UI).
- When you update state or props, React creates a new virtual DOM tree, compares it to the previous one, and applies only the necessary changes to the actual DOM.
- This makes updates fast and efficient.

### When Does React Render?

- On initial mount (first time a component appears).
- When a component’s state or props change.
- When a parent component re-renders.

## 08 - when ever state is updated react re-renders

- React mein state update hoti hai (useState ya setState se), toh woh component dobara render hota hai. Iska matlab hai: component ka function phir se chalega, naya JSX return karega, aur React UI ko update karega.
- Ye process efficient hai kyunki React sirf un parts ko update karta hai jo change hue hain, puri UI ko nahi.

### Detail Mein

- State change = Re-render: Jab bhi tum setState (class component) ya setSomething (useState ka setter) call karte ho, React automatically woh component ko dobara call karta hai (re-render).
- Sirf wahi component re-render hota hai: Jiska state change hui hai, aur uske children (nested components) bhi re-render ho sakte hain. Pura app re-render nahi hota.
- Virtual DOM: React pehle naya virtual DOM banata hai, purane se compare karta hai (diffing), aur sirf badle hue parts ko real DOM mein update karta hai, taaki performance fast rahe.

### Important Points

- Direct state mutation mat karo: Hamesha nayi value ya naya object/array return karo, tabhi React ko pata chalega ki state change hui hai.
- Agar state update sahi se nahi hoti (ya direct mutate karte ho), toh re-render nahi hoga.

## 09 - React Reconciliation Algorithm (React Fiber)

### 1. Reconciliation Kya Hai?

- Jab React component ki state ya props change hoti hain, toh React ko decide karna hota hai ki Virtual DOM ke naye tree ko purane tree se kaise compare kare, aur minimal changes real DOM par kaise apply kare.
- Is process ko Reconciliation ya Diffing kehte hain.
- React Virtual DOM ka ek lightweight in-memory version banata hai jise efficiently update karta hai.

### 2. React Fiber Kya Hai?

- React Fiber React 16 mein introduce hua ek naya reconciliation algorithm hai.
- Yeh purane recursive reconciliation ko replace karta hai.
- Fiber tree mein har node ko ek fiber ke roop mein represent karta hai.
- Fiber algorithm update ko chhote-chhote units of work mein todta hai, jisse React apne kaam ko pause, resume, aur prioritize kar sakta hai.
- Isse UI smooth aur responsive rehta hai, especially jab bahut saare updates aate hain.

### 3. React Reconciliation Algorithm ke Key Steps

- a. Tree Diffing (Virtual DOM Comparison)
  - React root se start karta hai dono trees (purana aur naya) ko compare karne ke liye.
  - Agar nodes ka type alag hai (jaise `<div>` se `<span>`), toh purana tree hata ke naya pura tree build karta hai.
  - Agar types same hain, toh React attributes aur children ko compare karta hai.

- b. List Diffing with Keys
  - Agar list render kar rahe ho (jaise array of items), React keys ka use karta hai efficiently identify karne ke liye ki kaunsa item change hua, add hua, ya delete hua.
  - Keys stable, unique, aur predictable honi chahiye.

- c. Fiber Tree Traversal
  - Fiber algorithm tree ko depth-first order mein traverse karta hai.
  - Har fiber node ko update karta hai, aur agar zarurat ho toh work ko pause karke baad mein resume karta hai.
  - High priority updates (jaise user input, animation) ko pehle complete karta hai.

- d. Commit Phase
  - Jab saara kaam complete ho jata hai, React changes ko real DOM mein apply karta hai.

### 4. Fiber ke Fayde

- Interruptible rendering: React kaam ko chhote chunks mein todta hai, jisse UI block nahi hota.
- Prioritization: Important updates pehle hote hain.
- Concurrency: React future mein multiple tasks ek saath handle kar sakta hai.
- Better performance: Large apps mein smooth UI experience.

## 10 - Virtual DOM (React)

- Virtual DOM ek tarah ka naksha (blueprint) hai jo React tumhare UI ka memory mein banata hai. Ye ek JavaScript object hota hai, jo actual browser ke DOM ka ek halka (lightweight) copy hota hai.
- Virtual DOM ek lightweight JavaScript object hai jo actual DOM (Document Object Model) ka ek copy/representation hota hai.
- React apne components ka structure memory mein ek virtual DOM tree ke form mein banata hai, na ki seedhe browser ke real DOM par.

### Kaam Kaise Karta Hai?

- Pehli Baar Render:
  - Jab app load hoti hai, React tumhara pura UI ek virtual DOM tree mein banata hai.
  - Fir yeh virtual DOM ko actual DOM (browser mein dikhne wala UI) ke sath sync karta hai.
- State/Props Change:
  - Jab bhi tumhare component ki state ya props change hoti hai, React fir se naya virtual DOM tree banata hai.
  - React compare karta hai (diffing) naya aur purana virtual DOM tree ko, aur dekhta hai kya-kya badla hai.
- Minimal Update:
  - Sirf wahi changes jo virtual DOM mein detect hote hain, woh real DOM par apply kiye jaate hain (reconciliation).
  - Isse performance fast rehti hai, kyunki pura DOM baar-baar update nahi hota, sirf badle hue parts update hote hain.
- Real Life Example
  - Socho tumhare paas ek bada ghar hai (actual DOM), aur uska ek naksha hai (virtual DOM).
  -Jab bhi ghar mein kuch change karna ho, pehle naksha par change karte ho, fir sirf wahi badlav real ghar mein apply karte ho — poora ghar nahi todte.
