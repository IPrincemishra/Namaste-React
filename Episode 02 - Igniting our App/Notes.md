# 01 - Igniting our App

- means before sending code for production purpose we must have to optimze your code by several methods

## 02 - NPM Kya hota hai?

- NPM ek package manager hai, jo JavaScript programming language ke liye use hota hai. Ye mainly Node.js ke sath use kiya jata hai. Iska istemal developers apne projects me dusre developers ke banaye hue code (yaani packages/modules/libraries) ko install, manage, aur share karne ke liye karte hain.
- `npm init` is used to initialize npm in your project

### NPM Ka Use Kya Hai?

- Packages Install Karna: Dusre developers ke banaye hue tools, libraries ya frameworks ko apne project me asaani se install kar sakte hain. Example: `npm install express`
- Apne Code Ko Share Karna: Apne khud ke banaye hue packages ko NPM par publish karke duniya bhar ke developers ke sath share kar sakte hain.
- Dependencies Manage Karna: Aapke project me jitne bhi external packages use ho rahe hain, un sabko manage karne ka kaam NPM karta hai.
- Scripts Chalana: NPM ke through aap apne project ke liye custom scripts bana sakte hain (jaise build, test, start, etc.).

### NPM Kaise Kaam Karta Hai?

- Jab aap koi package install karte hain, to NPM us package ko internet se download karta hai aur aapke project me add kar deta hai.
- Ye ek package.json file maintain karta hai, jisme aapke project ki sari dependencies (jo-jo packages use ho rahe hain) ki list hoti hai.

### NPM Stands for Package Manager not mainly just for Node Package Manager

- Npm Covers All Package which we can use in our project

## 03 - Diff b/w Packages and Dependencies

### - Package

- A package is a collection of code (like a library or module) that provides specific functionality which you can use in your project. For example, express is a package that helps you build web servers in Node.js.

### - Dependency

- A dependency is any package that your project needs to function properly. If your app uses code from another package, that package is a dependency. All dependencies are listed in your project's package.json file, which helps manage and track them.

## 04 - What is Bundler. eg. Web pack, Parcel, Vite & so one

- Bundler ek development tool hai jo aapke project ke multiple JavaScript (ya CSS, images, HTML) files ko combine (yaani bundle) kar deta hai ek ya kuch optimized files me, jo browser me fast aur efficiently load ho sakein.
- Browser ko har ek choti file alag se download nahi karni padti, balki ek ya kuch hi optimized files download kar leta hai, jis se performance improve hoti hai।
- Large projects me dependencies manage karna easy ho jata hai.

>Webpack : Highly configurable, complex projects, supports plugins and loaders.  
>Parcel : Zero configuration, beginners ke liye easy, fast builds.  
>Vite : Super fast, modern dev workflow, native ES modules, instant hot reload.  
>Rollup : Library development, small and efficient bundles.  

## 05 - Starting with Parcel

- for installing *parcel* Package we run this command in the terminal
`npm install -D parcel`
- in command you can see `-D` which stands for web dependency package

> There are two types of packages or dependency we can install one is web dependency and other one is normal dependency

## 06 Caret (^) aur Tilde (~) Package Version Mein Kyu Use Hote Hain?

*Caret (^) aur Tilde (~) symbols package.json me dependencies ke version ke aage likhe jaate hain. Inka use isliye hota hai taaki aap control kar sakein ki npm install/update ke waqt kaunse versions allow honge.*

- Tilde (~) Ka Matlab : Tilde (~) sirf patch updates allow karta hai, yaani jo choti bug fixes hoti hain.
`Example: Agar likha hai ~1.2.3, to npm 1.2.4, 1.2.5 tak update karega, lekin 1.3.0 nahi karega.`
Use jab karte hain jab aapko sirf small bug fixes chahiye, lekin naye features ya changes nahi.

- Caret (^) Ka Matlab : Caret (^) minor aur patch updates allow karta hai, lekin major version update nahi karta.
`Example: Agar likha hai ^1.2.3, to npm 1.3.0, 1.4.5 tak update karega, lekin 2.0.0 nahi karega.`
Use jab karte hain jab aapko naye features aur bug fixes chahiye, lekin breaking changes se bachna hai.

### package.json vs package-lock.json

- package.json defines your project's metadata and allowed dependency version ranges, while package-lock.json locks the exact versions of all installed dependencies to ensure consistent installs across environments

## 07 - `node_modules`

- `node_modules` ek folder hai jo aapke project ke andar sabhi external dependencies (yaani npm se install kiye gaye packages aur unke sub-packages) ko store karta hai. Jab bhi aap npm install command chalate hain, to jitne bhi packages aapke package.json me listed hain, un sabko download karke `node_modules` folder me rakha jata hai.

### Hum `node_modules` folder ko Git par upload nahi karte kyunki

- Ye folder bahut bada ho sakta hai, isse repository ka size unnecessary tarike se bohot badh jata hai, jis se cloning, pulling, aur pushing slow ho jati hai.
- Isme sabhi external dependencies hoti hain jo already aapke package.json aur package-lock.json me list hoti hain, isliye code share karne ke liye sirf ye files hi kaafi hain.
- Jab koi doosra developer ya aap khud project ko download karte hain, to sirf npm install chalane se sari dependencies dobara node_modules me install ho jati hain, bina is folder ko upload kiye bhi.

## 08 - `.gitignore` kya hota hai?

### `.gitignore` Kya Hai?

- .gitignore ek special file hai jo Git ko batati hai ki kaunse files ya folders ko version control (yaani repository) me track nahi karna chahiye.

### `.gitignore` Kyu Use Hota Hai?

- Unwanted files ko ignore karne ke liye: Jaise build files, log files, temporary files, node_modules, environment files (.env), etc.
- Project ko clean aur secure rakhne ke liye: Sensitive information (API keys, passwords) ya unnecessary files accidentally repository me na jayein.

### `.gitignore` Kaise Use Karte Hain?

#### Project root me `.gitignore` file banayein

- Usme un files/folders ke naam likhein jo ignore karne hain.

Example:
`node_modules/`
`dist/`
`.env`
`*.log`

- `node_modules/` – Sare node modules ignore ho jayenge.
- `dist/` – Build output ignore hoga.
- `.env` – Environment variables wali file ignore hogi.
- `*.log` – Sabhi .log files ignore ho jayengi.

## 09 - `npx` kya hota hai

- npx ka full form hai: Node Package Execute.
- Ye ek command-line tool hai, jo aapko bina install kiye kisi npm package ko turant run karne deta hai.

### `npx parcel index.html`

- Isse Parcel ka development server start ho jayega aur aapke browser me app open ho jayegi, jaise: `http://localhost:1234`

- Jab bhi aap code me changes karenge, browser auto-refresh ho jayega (hot reloading).

### `npx parcel` se build karte waqt

- Build process ke dauraan, kabhi-kabhi `package.json` file me `main` field ko remove karna padta hai, taki Parcel sahi tarike se output file generate kar sake.
- Ye step zaruri ho sakta hai agar aapko build output me koi conflict ya unexpected behavior dikh raha ho.
- Parcel apne output file ka path khud set karta hai, isliye aksar `package.json` ki `main` field ko hata dena padta hai, taaki build process me koi conflict na ho.
- Parcel entry point ke liye aam taur par `index.html` ya `app.js` file ka use karta hai, toh ensure karein ki yeh files aapke project structure me sahi jagah par maujood ho.

### `npm install react@latest react-dom@latest`

- Aapke project me React aur ReactDOM ke sabse latest versions install ho jayenge.
- Ye dono packages aapke package.json file me dependencies ke section me add ho jayenge, taki future me koi bhi developer ya aap khud easily install kar sakein.

#### Kya Hota Hai Is Command Se?

- react: Main React library, jisse aap components, hooks, etc. bana sakte hain.
- react-dom: React ka part jo browser ke DOM ke saath interact karta hai (yaani UI ko web page par dikhata hai).

### React aur ReactDOM ka Version Check Karein

- `npm list react react-dom`

## 10 - `type="module" kya hota hai?`

- Jab aap HTML mein JavaScript file ko load karte ho, toh aap `<script>` tag use karte ho. Agar aap us `<script>` tag mein `type="module"` likhte ho, toh iska matlab hota hai ki:
- Ye JavaScript file ES6 modules ki tarah chalegi.
- Matlab aap is file mein import aur export statements use kar sakte ho.
- Browser is script ko alag scope mein run karega, global scope mein nahi.

Example : `<script type="module" src="main.js"></script>`

## 11 - `file.js`  mein React aur ReactDOM ko include karna

- Aapko React aur ReactDOM ko apne `file.js` mein import karna hoga, taki aap unhe use kar sakein.

## 12 - We can set broswerlist in package.json

- Browserslist ek config hota hai jo aap apne project ke package.json file me set kar sakte ho. Iska use Parcel, Babel, Autoprefixer jaise tools karte hain, taki pata chale ki aapka code kin browsers ke liye compatible banana hai.

### Browserslist Kya Hai?

- Ye ek config hai jisme aap define karte ho ki aapke project ka support kin browsers ke liye hona chahiye.
- Isse Parcel, Babel, CSS tools apne aap code ko transpile/optimize kar lete hain taaki wo browsers me sahi chale.

### Kaise Set Karein?

- Aap apne package.json me aise likh sakte ho:

```javascript
{
  "browserslist": [
    "last 2 versions",
    "> 0.5%",
    "not dead"
  ]
}
```
