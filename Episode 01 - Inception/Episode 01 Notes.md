## 01 - Written Hello world! using simple HTML

## 02 - Written Hello World! using JavaScript 
- DOM Manipulation by using createElement then inserted in root tag of our HTML by using querySelector and appendChild

## 03 - Starting of React
- Firstly inserted cdn of react > in which i got two script cdn. One is for react and other one is for reactDOM Manipulation 

## 04 - What is CDN ?
- CDN stands for Content Delivery Network. CDN ek aisa network hota hai jisme duniya ke alag-alag jagah par servers lage hote hain. In servers par website ka content (jaise images, videos, CSS, JavaScript files, etc.) store hota hai. Jab bhi koi user website open karta hai, to content uske nazdeek wale server se aata hai, isliye website bahut fast load hoti hai.
- Jab aap koi website kholte ho, to CDN check karta hai ki aap kis location se ho.
- Phir wo aapke sabse kareeb wale server se website ka data bhejta hai.
- Isse data travel karne ka time kam ho jata hai aur website jaldi khul jati hai.

## 05 - Crossorigin
- Jab hum React ya koi bhi library CDN se `<script>` tag ke through load karte hain, tab agar hum `crossorigin` attribute lagate hain, toh credentials (jaise cookies, HTTP authentication, client certificates) tabhi share hote hain jab aap `crossorigin="use-credentials"` likhte ho. React CDN call karte waqt agar `crossorigin="anonymous"` hai (ya default hai), toh koi credentials share nahi hote. Credentials tabhi share hote hain jab aap specifically `use-credentials` likho aur server allow kare.

## 06 - react.development.js vs react.production.js via CDN
- Development version: Use for coding and debugging; provides detailed error messages
and tools. 
- Production version: Use for live/public deployment; optimized for performance, smaller file
size, no development warnings.

## 07 - Hello World using React
- React cdn ke through createElement ka us kiya or isme tin parameter pass karne hote hai 
`
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React!"
);`
- first mein hum tag ka naam dalte or second mein object pass karte jis mein hum props, Attributes pass karte hai jo tag ke related hote or hume use karenge for different purposess in future. In last one we pass the visable text or next children inside of our root tag this will create parent and child node. in complex project is called as node chaining
- fir uske baad hum root ko access karte hai createRoot jo ki reactDOM ke sath aata hai fir usme js querySelector use kar ke aapne root tag ko select kar lete hai.
`const root = ReactDOM.createRoot(document.querySelector("#root"))
` 
- Fir simply hum root ke andar tag ko render karte hai jo humne create kiya tha React.createElement se then it is visable on the display
`root.render(heading)`

## 08 - React Root Rendering
- In React, you can render only one React tree into a root DOM node (like 
`<div id="root"> </div>`
). 
- If you call render again on the same root, the previous content is replaced by the new one. 
- Only the latest render will be visible; previous content is removed.

- *That's one of the best benefit of React like you can just create a single unit of your page and then render in the DOM*
- For multiple unit you can create different root eg. header, footer and then render with `rootName.render()` in DOM

## 09 - What Happens If You Put HTML Directly in Root?
- If you write HTML (like `<h1>` ) directly inside the root element, React will remove that content
when it renders its own component.
- After React renders, only the React component's output will be visible inside the root.
- but there is also an catch when you write html tag outside of root tag which is used in React then it will be visable on web Page

## 10 - Library vs Framework 
### Library Kya Hai?
- Library ek pre-written code ka collection hota hai, jisme functions, classes, ya modules hote hain jinhe aap apne code me use kar sakte ho.
- Library ka main purpose hai: aapko ready-made solutions dena, taki aapko sab kuch khud se na likhna pade.
- Jab aap library use karte ho, aap control me hote ho—aap jab chahe library ka function call kar sakte hain.
*Example:*
*jQuery, Lodash, React (as a library), Moment.js*

### Framework Kya Hai?
- Framework ek aisa software structure hai jo aapke application ka skeleton provide karta hai. Isme rules, structure, aur flow pehle se defined hote hain.
- Framework me control framework ke paas hota hai—aapko apna code framework ke rules ke hisaab se likhna padta hai. Framework aapka code jab chahe tab call karta hai (is concept ko "Inversion of Control" kehte hain).
- Framework aapko ek fixed architecture deta hai, jaise MVC (Model-View-Controller), aur aapko ussi pattern ko follow karna hota hai.
*Example:
Angular, Django, Ruby on Rails, Spring*

