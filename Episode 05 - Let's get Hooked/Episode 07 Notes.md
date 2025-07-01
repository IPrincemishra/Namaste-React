# Episode 07 - Finding the path

## 01 - React-Router-Dom

- React Router DOM ek library hai jo React apps me "pages" (routes) ka concept laati hai, bina page reload kiye.
Yani, aap ek hi React app me alag-alag URL par alag-alag components ya views dikha sakte ho—jaise Home, About, Contact—lekin actual me pura page reload nahi hota, sirf content change hota hai.

### Simple Example Samjho

- Jab bhi tum kisi website pe Home, About, Contact jaise links pe click karte ho, toh URL change hota hai aur naya page dikhai deta hai.
- React me by default ye possible nahi hota, kyunki React ek single-page application (SPA) hai.
- React Router DOM is problem ko solve karta hai:
  - Ye URL ko dekhta hai (e.g. /about, /contact)
  - Aur uske hisaab se sahi component render karta hai, bina page reload kiye.

### Kyun Zaruri Hai?

- SPA me sab kuch ek hi HTML file me hota hai, lekin user ko lagta hai jaise woh alag-alag pages pe jaa raha hai.
- React Router DOM se user ko fast, seamless navigation milta hai—jaise ek real website me hota hai.

### Installation

```bash
npm install react-router-dom
```

## 02 - Routing configuration

- React app me kaunse URL par kaunsa component dikhega, ye decide karna aur setup karna.
- Yani, jab user /about likhe URL me, toh About page dikhe; /contact likhe toh Contact page dikhe, bina reload ke.

### createBrowserRouter kya hai?

- Ye DOM History API ka use karta hai URL aur navigation history manage karne ke liye.
- Routes ko ek array of objects ke form me define karta hai, jisme har route ka path, element (component), loader, action, errorElement, children etc. specify kar sakte hain.
- Isse aap nested routes, data fetching (loaders), form submissions (actions) easily configure kar sakte hain.
- Fir aap is router object ko `<RouterProvider>` me pass karte hain jo app me routing enable karta hai.

### RouterProvider kya hai?

- Ye ek context provider hai jo routing functionality ko app ke andar available karata hai.
- Iske andar aapke defined routes ke hisaab se components render hote hain.
- Isse aapko manually route change karne ki zarurat nahi padti, kyunki ye automatically URL aur component mapping handle karta hai.

### Basic Syntax

```JavaScript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Step 1: Define your routes as an array of objects
const router = createBrowserRouter([
  {
    path: "/",                // URL path
    element: <Home />,        // Component to render
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

// Step 2: Pass router to RouterProvider at the root of your app
<RouterProvider router={router} />
```

### Nested Routes

```JavaScript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,      // Common layout (e.g. Header/Footer)
    children: [
      { index: true, element: <Home /> },           // Default route
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
```

- children: Nested routes (ye `<Outlet />` ke jagah render hote hain Layout me)
- index: true: Default child route for "/"

### Example

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router}>
      <Header />
      <Body />
    </RouterProvider>
  );
};
export default App;
```

## 03 - Error Handling

- React Router me error handling ka matlab hai ki agar koi route load nahi ho paya ya koi component render nahi ho paya, toh user ko ek meaningful error message dikhana.
- Isse user ko pata chalta hai ki kya galat hua aur wo kya kar sakta hai.

### Error Element

- Error element ek special component hota hai jo tab render hota hai jab koi route load nahi ho pata ya koi error aati hai.
- Isse aap user ko ek friendly error message de sakte ho, jaise "Page not found" ya "Something went wrong".

Syntax :

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // 👈 This will render if there's an error
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

### useRouterError() Hook

- Ye ek hook hai jo aapko current route ka error object deta hai.
- Isse aap easily error handling kar sakte ho aur user ko meaningful feedback de sakte ho.

```jsx
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>
        {error.statusText || error.status || "Unknown error"}
      </p>
    </div>
  );
}
```

## 04 - Child Routes and `<Outlet />`

### Children Routes

- Child routes ka matlab hai ki aap ek route ke andar dusre routes define kar sakte ho.
- Isse aap complex UI structures create kar sakte ho jahan ek page ke andar multiple views ho sakte hain.
- Ye especially useful hai jab aapko ek common layout (jaise Header, Footer) ke andar alag-alag pages render karne hote hain.
- React Router me child routes ko define karne ke liye `children` property ka use hota hai.

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
```

- Is example me, `Layout` component ke andar `Home`, `About`, aur `Contact` components ko render kiya jayega jab respective routes pe navigate kiya jayega.
- `index: true` ka matlab hai ki ye default child route hai jab user `/` path pe visit karega.
- Isse aapko ek structured way milta hai jahan aap easily nested routes manage kar sakte ho.
- Isse aapko ek clean URL structure bhi milta hai, jaise `/about` ya `/contact`, bina kisi extra complexity ke.
- Ye aapko ek better user experience provide karta hai kyunki URLs intuitive hote hain.

### Outlet Component

- React Router me `<Outlet />` ek special component hai jo nested routes ke liye use hota hai.
- Ye parent route ke andar child routes ko render karne ke liye use hota hai
- Isse aap ek common layout (jaise Header, Footer) ke andar alag-alag pages (routes) ko render kar sakte ho.

Example:

```javascript
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      {/* This is where child routes will be rendered */}
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
```

- Is example me, jab user `/about` route pe navigate karega, toh `Layout` component ke andar `<Outlet />` ke jagah `About` component render hoga.
- Isse aapko ek clean aur modular structure milta hai jahan aap easily alag-alag components ko ek common layout me render kar sakte ho.

## 05 - Links and Navigation

- React Router me navigation ka matlab hai ki aap user ko alag-alag routes (pages) ke beech me move karne ka option dete ho.
- Ye links ke through hota hai, jahan user click karke alag-alag pages dekh sakta hai bina page reload kiye.
- Ye ek seamless experience provide karta hai, jaise ki ek real website me hota hai.

### Links

- React Router me links create karne ke liye `<Link>` component ka use hota hai.

```javascript
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};
```

- Is example me, jab user "Home" link pe click karega, toh URL `/` ho jayega aur `Home` component render hoga.
- Ye links automatically React Router ke saath integrate hote hain, yani page reload nahi hota.

### Navigation

- React Router me navigation ka matlab hai ki aap user ko alag-alag routes (pages) ke beech me move karne ka option dete ho.
- Ye links ke through hota hai, jahan user click karke alag-alag pages dekh sakta hai bina page reload kiye.
- Ye ek seamless experience provide karta hai, jaise ki ek real website me hota hai.

### Programmatic Navigation

- Kabhi-kabhi aapko programmatically navigate karna padta hai, jaise form submission ke baad ya kisi condition ke basis par.

```javascript
import { useNavigate } from "react-router-dom";
const MyComponent = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Form submission logic
    navigate("/success");
  };
  return <form onSubmit={handleSubmit}>...</form>;
};
```

- Is example me, jab form submit hota hai, toh user `/success` route pe navigate ho jayega.
