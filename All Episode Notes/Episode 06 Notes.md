# Episode 06 - Exploring the world

## 01 - Monolith Architecture React

- Monolithic architecture ka matlab hai ki aapka poora application—React frontend, backend (jaise Node.js/Express), aur kabhi-kabhi database bhi—sab ek hi codebase ya project mein hota hai. Matlab, sab kuch ek jagah pe likha gaya hai aur ek saath deploy hota hai.
- Iska fayda hai ki aapko alag-alag services ya microservices manage nahi karne padte. Sab kuch ek hi jagah pe hota hai, toh development aur deployment process simple hota hai.

### React Mein Monolith Kaise Dikhta Hai?

- Saare React components, pages, state management, sab ek hi project folder mein hote hain.
- Agar aapka backend bhi hai, toh wo bhi isi project mein ho sakta hai (jaise MERN stack apps).
- Deploy karte waqt aap ek hi server ya platform pe poora app deploy kar dete ho.

### Monolithic Architecture Ke Fayde

- Simple aur Fast: Chhote projects ya jaldi banane waale apps ke liye best hai.
- Easy to Manage: Sab kuch ek jagah hai, toh code samajhna aur changes karna easy hota hai.
- Single Deployment: Sirf ek baar deploy karo, sab kuch saath mein ho jaata hai.

### Monolithic Architecture Ki Problems

- Scalability Issue: Agar app bada ho gaya ya traffic zyada aa gaya, toh poore app ko scale karna padta hai, sirf ek part ko nahi.
- Maintenance Tough: Jaise-jaise code badhta hai, manage karna mushkil ho jaata hai.
- Single Point of Failure: Agar ek feature mein bug aa gaya, toh poora app down ho sakta hai.

## 02 - Microservices Architecture React

- Microservices architecture mein, aapka application chhote-chhote independent services mein divide hota hai. Har service apna kaam alag se karti hai aur ek dusre se communicate karti hai.
- Iska fayda hai ki aap alag-alag services ko independently develop, deploy, aur scale kar sakte ho. Agar ek service mein problem aati hai, toh baaki services unaffected rehti hain.

### React Mein Microservices Kaise Dikhta Hai?

- React frontend alag hota hai, aur backend services (jaise Node.js, Python, etc.) bhi alag-alag hote hain.
- Har service apna API expose karti hai, jisse React app data fetch kar sakta hai.
- Deployment bhi alag-alag hota hai, toh aap ek service ko update kar sakte ho bina baaki services ko affect kiye.

### How React App Connects to Microservices

- React app har service ke APIs se data fetch karta hai.
- Services ke beech communication REST APIs ya GraphQL ke through hota hai.
- Har service apne database ya storage ko manage karti hai, toh data alag-alag services mein distribute hota hai.
- React app ko har service ke endpoints se connect karna padta hai, jisse data fetch aur update hota hai.
- Microservices architecture mein, aapko service discovery aur load balancing ka bhi dhyan rakhna padta hai, jisse services easily discover aur scale ho sakein.
- React app ko har service ke APIs se connect karne ke liye, aapko API calls likhne padte hain, jo ki asynchronous hote hain (jaise fetch ya axios ka use karke).

### Microservices Architecture Ke Fayde

- Scalability: Aap alag-alag services ko independently scale kar sakte ho.
- Flexibility: Alag-alag technologies ya languages use kar sakte ho har service ke liye.
- Fault Isolation: Agar ek service fail ho jaati hai, toh baaki services kaam karti rehti hain.

### Microservices Architecture Ki Problems

- Complexity: Microservices architecture ko samajhna aur implement karna mushkil ho sakta hai, kyunki aapko multiple services ko manage karna padta hai.
- Data Consistency: Alag-alag services ke beech data consistency maintain karna challenging ho sakta hai.
- Network Latency: Services ke beech communication network ke through hota hai, toh latency issues aa sakte hain.

## 03 - How we make api calls in React

### Two Approaches to make API calls in React

```text
1> Loads -> API -> Render
2> Loads -> Render -> API -> Render
```

- React mein API calls karne ke do main approaches hain:
  1. **Pehle data fetch karo, phir render karo** (Load -> API -> Render)
  2. **Pehle render karo, phir data fetch karo** (Load -> Render -> API -> Render)

### Better UX
  
- 2nd approach (Load -> Render -> API -> Render) better user experience provide karta hai, kyunki isme initial render jaldi hota hai aur user ko pehle se kuch content dikhai deta hai. Phir data fetch hone ke baad UI update hota hai.
- Is approach mein, aap initial render ke liye placeholder content ya loading spinner dikha sakte ho, jisse user ko pata chalta hai ki data load ho raha hai.

### API Calls in React

- React mein API calls karne ke do main tarike hain:

1. **Fetch API**: Yeh built-in browser API hai jo HTTP requests banane ke liye use hoti hai.
2. **Axios**: Yeh ek popular third-party library hai jo HTTP requests ko asan aur efficient banati hai.

### Fetch API Aur Axios Mein Kya Farq Hai?

- **Fetch API**: Yeh modern browsers mein built-in hoti hai aur promises ka use karti hai. Yeh lightweight hai aur basic HTTP requests ke liye kaafi hai.
- **Axios**: Yeh ek third-party library hai jo HTTP requests ko asan banati hai. Isme features jaise request cancellation, interceptors, aur automatic JSON data transformation hote hain. Yeh cross-browser compatibility bhi provide karti hai.

### React Mein API Calls Karne Ka Tarika

#### Fetch API Ka Use

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

#### Axios Ka Use

```javascript
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

### API Calls Ko Manage Karna

- Aap API calls ko manage karne ke liye React ke `useEffect` hook ka use kar sakte hain. Yeh hook component ke lifecycle ke dauran API calls ko trigger karne mein madad karta hai.

```javascript
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};
```

## 04 - useEffect Hook

- useEffect React ka ek hook hai jo aapko functional components ke andar "side effects" handle karne deta hai. Side effects ka matlab hai wo kaam jo component ke render hone ke baad karne hote hain, jaise:
  - API calls
  - Subscriptions
  - DOM manipulations
  - Timers (setTimeout, setInterval)
- `useEffect` hook React mein side effects handle karne ke liye use hota hai, jaise API calls, subscriptions, ya DOM manipulations.
- Yeh hook component ke lifecycle ke dauran run hota hai, jaise component mount hone par, update hone par, aur unmount hone par.

## 05 -  CORS Policy

- CORS (Cross-Origin Resource Sharing) policy ek security feature hai jo web browsers ko allow karta hai ki wo ek origin se dusre origin ke resources access kar sakein. Matlab, agar aapka React app `http://localhost:3000` pe hai aur aap kisi API ko `http://api.example.com` se access karna chahte hain, toh browser CORS policy ke through check karega ki kya yeh request allowed hai ya nahi.
- Agar API server CORS headers set nahi karta hai, toh browser request ko block kar dega aur aapko CORS error milega.

### how i can by pass cors policy

- **Allow CORS : Access-Control-Allow-Origin** : Web Extensions
- **Proxy Server**: Aap ek proxy server use kar sakte ho jo CORS headers set kare. Isse aapki requests ko API server tak pahunchne se pehle proxy server handle karega.

## 06 - Optional Chaining

- Optional chaining ek JavaScript feature hai jo aapko safely access karne deta hai nested properties ko bina kisi error ke. Matlab, agar kisi object mein property nahi hai, toh aapko `undefined` milega instead of error.
- Optional chaining ka syntax `?.` hota hai. Iska use karke aap bina kisi error ke nested properties ko access kar sakte hain.
- Agar kisi property ka value `null` ya `undefined` hai, toh optional chaining use karne se aapko error nahi milega, balki `undefined` return hoga.

### Example of Optional Chaining

```javascript
const user = {
  name: 'John',
  address: {
    city: 'New York',
    zip: '10001'
  }
};
console.log(user.address?.city); // 'New York'
console.log(user.address?.country); // undefined (instead of error)
```

## 07 - Shimmer UI

- Shimmer UI ek design pattern hai jo loading state ko visually represent karta hai. Isme aapko ek placeholder content dikhai deta hai jab actual data load ho raha hota hai.
- Yeh user experience ko improve karta hai kyunki user ko pata chalta hai ki data load ho raha hai aur kuch content dikhai de raha hai.
- Shimmer UI ka use karne se user ko loading state ke dauran bhi kuch content dikhai deta hai, jisse user ko wait karne mein boredom nahi hota.

### Conditional Rendering

- Aap apne React component me kuch UI ya component sirf tabhi dikhana jab koi condition true ho.

#### Common Examples

- Loading spinner dikhana jab data fetch ho raha ho
- Error message dikhana jab API fail ho jaye
- User login hai toh profile dikhana, nahi toh login button

### Kaise Karte Hain Conditional Rendering?

#### 1 If-Else Statement

```jsx
if (isLoggedIn) {
  return <Profile />;
} else {
  return <LoginButton />;
}
```

- Early return pattern bhi isi tarah kaam karta hai.

#### 2 Ternary Operator (? : ) in React

- Ternary operator ek concise (chhota) tarika hai conditional statements likhne ka, especially React me conditional rendering ke liye. Ye basically ek line me if-else ka kaam karta hai.

Syntax

```js
condition ? expressionIfTrue : expressionIfFalse
```

- Agar condition true hai, toh expressionIfTrue execute hoga.
- Agar condition false hai, toh expressionIfFalse execute hoga.

```jsx
{isLoading ? <p>Loading...</p> : <Content />}
```

- Ye ek line me if-else ki tarah kaam karta hai.

#### 3 Logical AND (&&) Operator

```jsx
{error && <p>Error: Something went wrong!</p>}
```

- Agar error true hai toh hi message dikhega.

#### 4 Returning null

- Agar aap kuch bhi render nahi karna chahte, toh null return kar sakte hain.

```jsx
if (!showBanner) {
  return null;
}
return <Banner />;
```

## 08 - React input important concepts

- React mein input fields ko handle karne ke liye aapko controlled components ka concept samajhna padta hai. Controlled components wo hote hain jahan input field ka value React state se control hota hai.
- Iska matlab hai ki aap input field ke value ko React state ke through manage karte ho, aur jab bhi user input deta hai, toh state update hoti hai.
- Isse aapko input field ka value easily access aur manipulate karne ka mauka milta hai.

### Controlled Components

- Controlled components wo hote hain jahan input field ka value React state se control hota hai. Matlab, aap input field ke value ko React state ke through manage karte ho.
- Iska fayda hai ki aap input field ka value easily access aur manipulate kar sakte ho, aur aapko form validation aur submission mein bhi madad milti hai.

```jsx
import React, { useState } from 'react';
const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default ControlledInput;
```

### Uncontrolled Components

- Uncontrolled components wo hote hain jahan input field ka value React state se control nahi hota. Matlab, aap input field ke value ko directly DOM se access karte ho.
- Isme aap `ref` ka use karke input field ka value access karte ho, aur state management nahi hota.

```jsx
import React, { useRef } from 'react';
const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default UncontrolledInput;
```

### On Every Key Press component re-render

- React mein jab aap input field ka value change karte ho, toh component re-render hota hai. Yeh isliye hota hai kyunki aapne input field ka value React state se control kiya hai.
- Jab bhi aap input field mein kuch type karte ho, toh `onChange` event trigger hota hai, jo state ko update karta hai. Isse React ko pata chalta hai ki component ko re-render karna hai.
