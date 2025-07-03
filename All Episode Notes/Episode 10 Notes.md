# Episode 10 - Jo dikhta hai, Vo bikta hai

## 01 - Ways to Write CSS: Sass/SCSS & Styled Components

### Sass/SCSS

- **Sass (Syntactically Awesome Style Sheets)** ek CSS preprocessor hai jo CSS ko aur bhi powerful aur maintainable banata hai.
- Isme variables, nested rules, mixins, aur functions jaise features hote hain jo CSS ko likhne aur manage karne me asani dete hain.
- Sass ko use karne ke liye `.scss` ya `.sass` file extension ka istemal hota hai, aur compiler ki zaroorat hoti hai jo in files ko standard CSS me convert kare.
- Sass ka use karne se CSS code zyada organized aur maintainable ho jata hai.

#### Difference between Sass and SCSS

- Sass (indented syntax) me indentation ka istemal hota hai, jabki SCSS (Sassy CSS) me CSS jaise curly braces aur semicolons ka istemal hota hai.
- SCSS ko samajhna aur adopt karna asan hai kyunki ye CSS ke syntax ke bahut nazdeek hai.
- Dono syntax me variables, nesting, aur mixins jaise features available hain.

**SCSS Syntax Example:**

```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
body {
    font-family: Arial, sans-serif;
    background-color: $primary-color;
    color: white;

    h1 {
        color: $secondary-color;
    }

    p {
        font-size: 16px;
    }
}
```

**Sass Syntax Example:**

```sass
$primary-color: #3498db
$secondary-color: #2ecc71
body
    font-family: Arial, sans-serif
    background-color: $primary-color
    color: white

    h1
        color: $secondary-color

    p
        font-size: 16px
```

---

### Styled Components

- **Styled Components** ek library hai jo React applications me CSS-in-JS approach ka istemal karti hai.
- Isme hum components ke saath hi unke styles define kar sakte hain, jisse styles aur components tightly coupled ho jate hain.
- JavaScript me CSS likhne ki wajah se dynamic styles create kar sakte hain.
- Iska use karne se components modular aur reusable ho jate hain.

**Styled Components Example:**

```javascript
import styled from 'styled-components';

const Button = styled.button`
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #2980b9;
    }
`;
const App = () => {
    return (
        <div>
            <h1>Styled Components Example</h1>
            <Button>Click Me</Button>
        </div>
    );
};
export default App;
```

## 02 - Tailwind CSS (Popular CSS Framework)

- **Tailwind CSS** ek utility-first CSS framework hai jo rapid UI development ko asan banata hai.
- Isme predefined utility classes hoti hain jisse aap directly HTML me styles apply kar sakte hain, bina custom CSS likhe.
- Yeh approach aapko zyada control aur flexibility deta hai, kyunki aap classes ko combine karke complex designs create kar sakte hain.
- Tailwind CSS ko use karne ke liye aapko isse apne project me install karna hota hai aur configuration file create karni hoti hai.
- Yeh framework responsive design, dark mode, aur custom themes ko support karta hai.
- Tailwind CSS ka use karne se aapko CSS likhne ki zaroorat nahi padti, balki aap HTML me hi classes ke through styles apply kar sakte hain.

### 1. Project Setup

```bash
mkdir my-project
cd my-project
npm init -y
npm install parcel
mkdir src
touch src/index.html
```

### 2. Tailwind CSS aur Peer Dependencies Install karo

```bash
npm install tailwindcss @tailwindcss/postcss
```

### 3. PostCSS Config File Banao

Project root mein `.postcssrc` file banao aur yeh likho:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Ya kuch setups mein sirf `"tailwindcss": {}` bhi kaam karta hai.

### 4. `tailwind.config.js` file

- Agar aapko advanced configuration chahiye (jaise custom themes ya purging), toh `tailwind.config.js` file bhi generate kar sakte hain:

```bash
npx tailwindcss init
```

- Parcel automatically PostCSS config ko detect kar leta hai.

#### `tailwind.config.js` mein setup code

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Jahan aap Tailwind classes use kar rahe ho
  ],
  theme: {
    extend: {}, // Yahan aap apni customizations add kar sakte hain
  },
  plugins: [],
};
```

##### Yeh sabse basic aur recommended structure hai har naye project ke liye

- content: Yeh batata hai ki kaunse files scan karni hain Tailwind classes ke liye.
- theme: Yahan aap colors, fonts, spacing, etc. customize ya extend kar sakte hain.
- plugins: Agar aapko extra Tailwind plugins chahiye, toh yahan list kar sakte hain.

### 5. Tailwind CSS ko Import karo

`src/index.css` file banao aur ismein yeh likho:

```css
@import "tailwindcss";
```

### 6. HTML File Mein CSS Link Karo

`src/index.html` ke `<head>` mein:

```html
<link href="./index.css" rel="stylesheet" />
```

### 7. Parcel Se Project Run Karo

```bash
npx parcel src/index.html
```

### 8. Tailwind Classes Use Karna Shuru Karo

Ab aap apne HTML mein Tailwind ki utility classes use kar sakte hain, jaise:

```html
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

### What is postcss?

- **PostCSS** ek tool hai jo CSS ko process karne ke liye use hota hai. Yeh CSS ko transform karne, linting, aur autoprefixing jaise tasks ke liye plugins ka istemal karta hai.
- PostCSS ko use karne se aap apne CSS code ko aur bhi powerful aur maintainable bana sakte hain.
- Yeh tool aapko custom CSS syntax likhne ki flexibility deta hai aur aapke CSS code ko modern browsers ke liye compatible banata hai.

### What is autoprefixer?

- **Autoprefixer** ek PostCSS plugin hai jo CSS properties ke liye vendor prefixes automatically add karta hai.
- Yeh aapke CSS code ko modern browsers ke liye compatible banata hai, jisse aapko manually prefixes add karne ki zaroorat nahi padti.
- Autoprefixer aapke CSS code ko analyze karta hai aur zaroori prefixes add karta hai, jisse aapka code cleaner aur maintainable rehta hai.
