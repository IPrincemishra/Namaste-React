# Episode 03 - Laying the foundation

## 01 - Changes in `package.json` scripts  

- hum `package.json` mein ja kar scripts section mein kuch new scripts add kar denge jis se hume `npx parcel index.html` baar baar use nhi karna padega iski jagagha pe hum iska alternative use kar sakenge `npm run start` or `npm start` or `npm run build`

- kya add karna hai ?

```JSON
"start": "parcel index.html",
"build": "parcel build index.html",
```

- must remember this must in only `package.json` script section.
- This is also an industry standard to build projects in react.

## 02 - JSX

- JSX ka full form hai JavaScript XML. Ye basically ek syntax hai jo React mein use hota hai, jismein tum JavaScript code ke andar HTML jaise elements likh sakte ho. Isse tumhara UI banana bahut easy ho jaata hai, kyunki tumhe HTML aur JavaScript ko alag-alag handle nahi karna padta.

### JSX Kisne Banaya?

- JSX ko Facebook (ab Meta) ne banaya tha jab unhone React library launch ki thi. Unka maksad tha ki developers ko UI banana easy ho jaaye aur code readable bhi rahe.

### JSX Kaise Use Karte Hain?

- JSX ko tum React ke saath use karte ho. Yahan ek simple example hai:

```javascript
const element = <h1>Hello, World!</h1>;
```

- Yahan `<h1>Hello, World!</h1>` ek JSX element hai. Tum isko ReactDOM ke through render kar sakte ho:

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

### Kya JSX HTML ya XML Hai?

- Nahi! JSX na toh HTML hai, na hi XML. Bas iska syntax un dono jaisa dikhta hai, lekin andar se ye JavaScript hi hai.
- HTML ek markup language hai, jabki JSX JavaScript ka extension hai.
- JSX mein tumhe saare tags properly close karne padte hain, jaise `<img />`.
- JSX mein kuch attributes camelCase mein hote hain, jaise className (HTML mein class hota hai).
- JSX mein tum JavaScript expressions curly braces {} ke andar likh sakte ho, HTML mein nahi.

## 03 - JSX (Transpilation) -> Parcel -> Babel Kya Hota Hai?

- Jab hum React mein JSX use karte hain, toh wo directly browser mein nahi chal sakta, kyunki browsers ko sirf plain JavaScript samajh mein aata hai. Isliye JSX ko transpile (convert) karna padta hai plain JavaScript mein, tabhi wo browser mein run ho pata hai.

### 1. JSX Transpilation

- JSX ek syntax extension hai jo React components ko likhne ke liye use hota hai.
- Lekin browsers JSX ko samajh nahi paate, isliye humein JSX ko JavaScript mein convert karna padta hai.
- Ye conversion process ko transpilation kehte hain (source code ko ek form se doosre form mein convert karna).

### 2. Babel Kya Hai?

- Babel ek popular JavaScript transpiler hai.
- Ye JSX ko plain JavaScript mein convert karta hai, jise browsers samajh sakte hain.
- Babel sirf JSX hi nahi, balki modern JavaScript (ES6+) ko bhi purane browsers compatible JavaScript mein convert karta hai.

### 3. Parcel Kya Hai?

- Parcel ek bundler hai, jo tumhare project ke saare assets (JavaScript, CSS, images, etc.) ko ek saath bundle karta hai.
- Parcel automatically Babel ko use karta hai JSX aur modern JavaScript ko transpile karne ke liye.
- Iska matlab hai ki tumhe manually Babel configure karne ki zarurat nahi padti, Parcel ye kaam apne aap kar leta hai.
- Parcel development server bhi provide karta hai jisse tumhare code mein changes live reload ho jaate hain.

## 04 - React Element vs React Component: Kya Difference Hai?

### React Element

- React Element ek simple JavaScript object hota hai jo batata hai ki UI pe kya dikhna chahiye.
- Ye basically ek blueprint hai, jismein type (jaise 'div', 'h1', ya koi React component) aur props (attributes, children, etc.) hoti hain.
- Element immutable hota hai, matlab ek baar create ho gaya toh change nahi hota.
- Ye browser pe directly nahi dikhta, sirf React ke andar ek virtual representation hota hai.

Example:

```javascript
const element = React.createElement(
  'h1', // type: HTML tag ya React component
  { className: 'greeting' }, // props: attributes ya properties
  'Hello, world!' // children: andar ka content ya nested elements
);
```

```javascript
const myElement = <h1>Hello World!</h1>;
```

- Yahan `<h1>Hello World!</h1>` ek React element hai.

### React Component

- React Component ek function ya class hota hai jo batata hai ki UI ka ek part kaise behave karega aur dikhega.
- Component props accept karta hai, apna state manage kar sakta hai, aur React elements return karta hai.
- Component reusable hota hai—ek baar bana lo, kahin bhi use kar lo.
- Component ke andar logic, state, lifecycle methods wagaira ho sakte hain.

Example (Functional Component):

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

- Yahan Welcome ek React component hai jo ek React element return karta hai.

### Class Based Components (OLD) vs Functional Components (NEW)

- Class based components React ke purane version mein use hote the, jahan state aur lifecycle methods ko handle karne ke liye classes ka use hota tha.

- Functional components React ke naye version mein use hote hain, jahan hooks (jaise useState, useEffect) ka use karke state aur lifecycle methods ko handle kiya ja sakta hai.
- Functional components zyada simple aur readable hote hain, isliye ab industry mein inka use badh raha hai.

## 05 - React Component Kaise Banta Hai?

### 1. With Curly Braces & Return Statement

```Javascript
const HeadingComp = () => {
    return (
        <>
            <h1>Namaste React using JSX 🚀</h1>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComp />);
```

### 2. Without Curly Braces & Return Statement

```javascript
const HeadingCompTwo = () => (
    <h1 id="heading">Namaste React using JSX 🚀</h1>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingCompTwo />);
```

## 06 - Component ko render kaise karte hain?

- React component ko render karne ke liye, tumhe ReactDOM ka use karna padta hai.
- Tumhe pehle ek root element banana padta hai jahan tumhara component render hoga.
- Phir tum ReactDOM.createRoot() function ka use karke us root element ko create karte ho.
- Uske baad, tum root.render() function ka use karke apne component ko render karte ho.

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComp />);
```

- Yahan `document.getElementById('root')` se tum HTML file mein ek element lete ho jiska id 'root' hai. Ye element tumhare React application ka entry point hota hai.
- Tumhare component ko render karne ke liye, tum root.render() function ka use karte ho aur usme apne component ko pass karte ho, jaise `<HeadingComp />`.
- Isse tumhara component browser mein dikhne lagta hai.

## 07 - React Component ko kaise naam dete hain?

- React components ko naam dene ka ek standard convention hai ki tumhe unka naam PascalCase mein likhna chahiye. Matlab, har shabd ka pehla akshar capital hona chahiye.
- Ye convention isliye hai taaki React components ko HTML tags se differentiate kiya ja sake. Agar tum component ka naam lowercase mein likhte ho, toh React usse HTML tag samajh lega, jo galat ho sakta hai.
- Example:

```javascript
const MyComponent = () => {
    return <h1>Hello, World!</h1>;
};
```

## 08 - Multiple Components ko kaise render karte hain?

### Ek Parent Component ke andar Multiple Components

- React ke render method (ya return statement) mein sirf ek root element hona chahiye. Isliye, agar tumhe ek saath multiple components dikhane hain, toh unhe kisi ek parent tag (jaise `<div>` ya React Fragment <> </>) ke andar wrap karo.

```javascript
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

- Yahan `<Header />, <MainContent />, aur <Footer />` teen alag components hain jo ek parent fragment ke andar wrap kiye gaye hain.

### Component composition ka matlab hai chote

- jab hum multiple components ko ek parent component ke andar combine kar ke render karte ho—jaise `<Header />, <MainContent />`, aur `<Footer />` ko ek saath `<App />` ke andar—ye React mein component composition kehlaata hai.
- reusable components ko milakar ek bada, complex component banana. Ye React ka core concept hai, jisse tumhara code modular, maintainable, aur reusable banta hai. Nested components bhi isi ka part hain—jab ek component ke andar dusre components hote hain, toh wo bhi composition hi hai.

## 09 - React Element ko component ke andar kaise pass karte hain?

- React mein, tum elements ko components ke andar props ke through pass kar sakte ho. Props ek tarah ka object hota hai jo component ko data ya configuration deta hai.

Example :

```javascript
const number = <h2>10000</h2>;
function MyComponent() {
  return (
    <div>
      {number}  {/* Yahan element ko curly braces ke andar likhna zaroori hai */}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
```

## 10 - React JSX by default XSS (Cross-Site Scripting)

- React JSX by default XSS (Cross-Site Scripting) se protect hota hai. Iska matlab hai ki agar tum kisi user input ko directly JSX mein use karte ho, toh React us input ko escape kar deta hai taaki koi malicious script execute na ho sake.
- Yani agar tum kisi user input ko JSX mein directly likhte ho, toh React us input ko safe bana deta hai. Isliye, tumhe manually koi escaping karne ki zarurat nahi padti.
- Matlab agar API se ya kisi source se koi malicious HTML ya JavaScript code aaye, toh React usko plain text ki tarah treat karta hai, na ki executable code ki tarah.
- Iska fayda ye hai ki tumhe security ke liye extra effort nahi karna padta, React automatically tumhare code ko secure bana deta hai.
