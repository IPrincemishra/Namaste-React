# Episode 04 - Talk is cheap, show me the code

## 01 - Before starting any project

### Planning - Project Needs

- **Define the problem**: Understand what problem you are trying to solve.
- **UI/UX**: Consider the user experience and interface design.

### UI/UX Considerations or Components

#### Header

- Logo
- Nav Items

### Body

- Search
- RestaurantContainer
- RestaurantCard
  - Image
  - Name
  - Cuisines
  - Rating
  - Price

#### Footer

- Copyright
- Links
- Address
- Contact

## 02 - Props Concept

### Props kya hota hai?

- Props ka full form hai “properties”.
- React mein props ka use ek component se dusre component ko data bhejne ke liye hota hai.
- Ye ek object ki tarah hota hai, jismein aap key-value pair mein data bhejte ho.
- Props read-only hote hain, matlab child component sirf data receive karta hai, change nahi kar sakta.

### Props ka use kaise karte hain?

#### 1. Parent se data bhejna

```JSX
function App() {
  return <Profile name="Anil" age={22} />;
}
```

- Yahan name aur age props hai jo Profile component ko bheje ja rahe hain.

#### 2. Child mein props receive karna

```JSX
function Profile(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

- Yahan pe `props.name` aur `props.age` se value mil rahi hai.

### Props ke fayde

- Component reusability: Ek hi component ko alag-alag data ke saath use kar sakte ho.
- Customization: Har bar alag props bhej ke component ka look/behavior change kar sakte ho.
- One-way data flow: Data sirf parent se child jaata hai, isse code predictable rehta hai.

Example:

```JSX
function Welcome(props) {
  return <h1>Hello, {props.username}!</h1>;
}

function App() {
  return <Welcome username="Rahul" />;
}
```

- Yahan App component Welcome ko username prop bhej raha hai, aur Welcome usko use kar raha hai.

## 03 - Props Destructuring ?

- React mein jab aap parent component se child component ko data bhejte ho, toh wo data props ke form mein milta hai. Ye props ek object hota hai jisme multiple properties hoti hain.
- Destructuring ka matlab hai ki aap us object se sirf wo properties nikal lo jo chahiye, bina baar-baar `props.` likhe.

### Props Destructuring ke 2 Common Tarike

#### 1. Function Parameter mein Direct Destructuring

- Aap function ke parameters mein hi destructuring kar sakte ho:

```JSX
function User({ name, age, city }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Use karte waqt:
<User name="Rahul" age={25} city="Delhi" />

```

- Is tarike mein aap directly props object se `name`, `age`, aur `location` ko destructure kar rahe ho.

#### 2. Function Body Destructuring Kya Hai?

- Jab aap React functional component mein props ko parameter ke roop mein lete hain, toh wo ek object hota hai jisme parent se pass kiye gaye saare props hote hain.
- Function body destructuring mein aap function ke andar ek line mein likh kar props ke andar se jo chahiye wo variables bana lete hain:

```JSX
function UserProfile(props) {
  const { name, age, location } = props;  // yahan destructuring ho rahi hai

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}
```

- Is example mein `props` object se `name`, `age`, aur `location` ko destructure kiya gaya hai, taaki unhe directly use kiya ja sake.

### Props Destructuring ke Fayde

- Code clean aur readable hota hai.
- Baar-baar props. likhne ki zarurat nahi padti.
- Easily samajh aata hai ki component ko kaunse props mil rahe hain.
- Nested data ko bhi asaani se handle kar sakte hain.

```JSX
// Without destructuring
function Profile(props) {
  return <h1>{props.name}</h1>;
}

// With destructuring
function Profile({ name }) {
  return <h1>{name}</h1>;
}
```

- Default Value Easily Set kar sakte ho: Destructuring ke sath aap default value bhi assign kar sakte ho, toh agar koi prop na aaye toh bhi code break nahi hota.
- Performance Benefit (kabhi-kabhi): Destructuring se unnecessary object creation avoid hota hai, jo performance mein thoda improvement la sakta hai, especially bade codebases mein.
- Consistent aur Maintainable Code: Jab aap destructuring use karte ho, toh aapko future mein code change karna ya maintain karna easy ho jata hai.

### Destructuring ek JavaScript ka concept hai

- jiska use hum React mein bhi karte hain—lekin yeh sirf React tak limited nahi hai. Destructuring ka main purpose hai: objects ya arrays se values ko easily, ek hi line mein, nikal lena aur variables mein assign kar dena.

## 04 - Destructuring with Default Values

### Default Props kya hota hai?

- Default Props ka use tab hota hai jab aap chahte ho ki agar kisi prop ki value nahi di gayi ho, toh component mein ek default value use ho.
- Ye ek tarah se fallback value hoti hai, jo component ko crash hone se bachati hai agar koi prop na aaye.

### Default Props ka use kaise karte hain?

```JSX
function Profile({ name = "Guest", age = 18 }) {
    return (
        <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        </div>
    );
    }
```

- Yahan agar `name` ya `age` prop nahi diya gaya, toh "Guest" aur 18 default values use hongi.

### Default Props ka fayda kya hai?

- **Error Prevention**: Agar kisi prop ki value nahi di gayi, toh component crash nahi hoga.
- **User Experience**: Default values se user ko better experience milta hai, kyunki unhe pata hota hai ki agar unhone koi value nahi di, toh bhi kuch na kuch dikhai dega.
- **Code Clarity**: Default props se code zyada readable aur maintainable ho jata hai, kyunki aapko pata hota hai ki component ka behavior kya hoga agar koi prop na aaye.

## 05 - JSON Kya Hota Hai?

- JSON ka full form hai JavaScript Object Notation.
- Yeh ek lightweight data format hai jo data ko store ya exchange (bhejne) ke liye use hota hai.
- JSON ka structure bilkul JavaScript object jaisa hota hai, lekin yeh language-independent hai, yani Python, Java, PHP, sab mein use ho sakta hai.
- Mostly APIs (jaise Swiggy, Zomato, weather, etc.) data ko JSON format mein bhejte hain.

```JSON
{
  "name": "Rahul",
  "age": 25,
  "isStudent": true,
  "hobbies": ["cricket", "music"],
  "address": {
    "city": "Delhi",
    "pin": 110001
  }
}
```

### JSON Ko Kaise Read/Handle Karte Hain?

#### JavaScript Mein (Browser ya Node.js)

- JSON String ko Object Mein Convert Karna:

```JavaScript
const jsonString = '{"name":"Rahul","age":25}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // "Rahul"
```

- Object ko JSON String Mein Convert Karna:

```JavaScript
const obj = { name: "Rahul", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: {"name":"Rahul","age":25}
```

### React Mein JSON Ka Use

#### JSON Data Ko Import Karna (Local File Se)

- Agar aapke paas koi local JSON file hai (jaise data.json), toh aap usko direct import kar sakte ho:

data.json

```JSON
[
  { "name": "Rahul", "age": 25 },
  { "name": "Priya", "age": 22 }
]
```

App.js

```jsx
import data from './data.json';

function App() {
  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item.name} - {item.age}</p>
      ))}
    </div>
  );
}

export default App;
```

`Output:`
`Rahul - 25`
`Priya - 22`

#### JSON Data Ko API Se Fetch Karna

- Aksar real-world apps mein data kisi API se aata hai, jo mostly JSON format mein hota hai.

Example using fetch:

```jsx
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())   // JSON ko JS object mein convert karna
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name} - {user.email}</p>
      ))}
    </div>
  );
}
export default App;
```

#### JSON String Ko Parse Karna

- Kabhi-kabhi data string format mein milta hai, toh usko JS object mein convert karne ke liye `JSON.parse()` use karte hain:

```jsx
const jsonString = '{"name": "Anil", "age": 30}';
const obj = JSON.parse(jsonString);
// ab obj.name ya obj.age use kar sakte ho
```

#### Object Ko JSON String Mein Convert Karna

- Agar aapko kisi API ko data bhejna ho, toh object ko JSON string banana hota hai:

```jsx
const user = { name: "Anil", age: 30 };
const jsonStr = JSON.stringify(user);
// is jsonStr ko API mein POST kar sakte ho
```

## 06 - .map() to make dynamic looping

- `.map()` JavaScript ka ek array method hai jo har element par ek function apply karta hai aur ek naya array return karta hai. React mein `.map()` ka use mostly list ya array ke data ko UI par render karne ke liye hota hai.

### Array of Objects Example

``` jsx
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" }
];

function App() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Nested .map() (Agar array ke andar bhi array ho)

```jsx
const cities = [
  { name: "Delhi", areas: ["Rohini", "Dwarka"] },
  { name: "Mumbai", areas: ["Andheri", "Bandra"] }
];

function App() {
  return (
    <div>
      {cities.map((city, i) => (
        <div key={i}>
          <h3>{city.name}</h3>
          <ul>
            {city.areas.map((area, j) => (
              <li key={j}>{area}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

## 07 - `.map()` Key importance

- .map() mein key prop ki importance React ke liye bahut zyada hoti hai, jab aap list of elements render karte hain. Yeh key React ko batata hai ki list ke har element ko uniquely kaise identify kare, taaki React efficiently UI ko update kar sake.

### 1. Unique Identification

- React ko pata hona chahiye ki list ke kaunse item change, add, ya remove hue hain.
- Key har element ko uniquely identify karta hai.
- Isse React ko unnecessary re-renders se bachata hai aur performance improve hoti hai.

### 2. Efficient Reconciliation

- React virtual DOM mein diffing karta hai.
- Key ki wajah se React ko pata chalta hai ki kis element ko update karna hai.
- Agar key na ho ya duplicate ho, toh React galat element update kar sakta hai ya performance degrade ho sakti hai.

### 3. State Preservation

- Agar list items mein koi state ho (jaise input field ka value), toh key se React us state ko sahi element ke saath link karta hai.
- Key na hone se state galat element pe lag sakti hai.

```jsx
const users = [
  { id: 'u1', name: 'Rahul' },
  { id: 'u2', name: 'Priya' }
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>  // id as key
      ))}
    </ul>
  );
}
```

### Why index's not use as keys

- React mein .map() ke sath index ko key ke roop mein use na karne ke kai important reasons hain. Index ko key banana convenient lag sakta hai, lekin yeh React ke rendering process mein problems create karta hai. Neeche key points aur reasons diye gaye hain:

| Problem with Index as Key      | Explanation                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Incorrect item identification | Index change hone par React galat item ko update kar sakta hai             |
| Performance degradation        | Unnecessary re-renders hote hain kyunki React ko lagta hai list change hui  |
| State loss & UI bugs           | Components ka internal state galat element ke sath associate ho sakta hai   |
| Lack of stability              | Index list ke reorder hone par change hota hai, isliye stable key nahi hai  |

### Example of Problem with Index as Key

```jsx
const users = [
  { id: 'u1', name: 'Rahul' },
  { id: 'u2', name: 'Priya' }
];

function UserList() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>  // index as key
      ))}
    </ul>
  );
}
```

- Agar aap list mein kisi item ko add ya remove karte ho, toh index change ho jata hai. Isse React ko pata nahi chalta ki kaunsa item update karna hai, aur yeh galat item ko update kar sakta hai.

### Best Practices

- **Use Unique Identifiers**: Agar aapke data objects mein unique id hai, toh us id ko key ke roop mein use karein.

```jsx
const users = [
  { id: 'u1', name: 'Rahul' },
  { id: 'u2', name: 'Priya' }
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>  // id as key
      ))}
    </ul>
  );
}
```

- **Avoid Using Index**: Agar aapke data mein unique id nahi hai, toh bhi index ko key ke roop mein use karne se bachein. Isse performance aur state issues ho sakte hain.
- **Stable Keys**: Hamesha stable aur unique keys ka use karein, jo data ke reorder ya update hone par bhi same rahein.

## 08 - React Fragments

- React Fragments ek lightweight wrapper hai jo aapko multiple elements ko bina kisi extra DOM node ke group karne ki suvidha deta hai. Yeh useful hota hai jab aapko ek parent element ke andar multiple children render karne hote hain, lekin aap nahi chahte ki ek extra `<div>` ya kisi aur HTML element ka use ho.

### React Fragments ka Use

```jsx
function App() {
  return (
    <React.Fragment>
      <h1>Welcome to My App</h1>
      <p>This is a simple example of React Fragments.</p>
    </React.Fragment>
  );
}
```

### Short Syntax for Fragments

- React Fragments ka short syntax bhi hota hai, jisme aapko `React.Fragment` likhne ki zarurat nahi padti. Aap sirf `<>` aur `</>` ka use kar sakte hain.

```jsx
function App() {
  return (
    <>
      <h1>Welcome to My App</h1>
      <p>This is a simple example of React Fragments.</p>
    </>
  );
}
```

### Kab Use Karein React Fragments?

- **Multiple Elements**: Jab aapko ek component mein multiple elements render karne hote hain, lekin aap nahi chahte ki ek extra wrapper element create ho.
- **Performance**: Extra DOM nodes create nahi karne se performance improve hoti hai, kyunki browser ko kam elements render karne hote hain.
