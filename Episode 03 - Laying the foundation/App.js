import React from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";


// * React Element
// React.createElement => Object => HTMLElement(render)
const Heading = () => (
    <h1>Namaste React</h1>
)

// ! JSX (transpiled before it reaches the js) -> Parcel -> Babel
// const jsxHeading = <h1>Namaste React using JSX 🚀</h1>

// * React Component

// Class Based components - OLD
// ! Functional components - NEW

// const HeadingComp = () => {
//     return (
//         <>
//             <h1>Namaste React using JSX 🚀</h1>
//         </>
//     )
// }

// const data = api.getData();

const Title = () => (
    <h1>Namaste React using JSX 🚀</h1>
)

const HeadingCompTwo = () => (
    <div className="container">
        <Heading />
        {/* {data} */}
        <Title />
        {Title()}
        <h1 id="heading">Namaste React using Functional Component 🚀</h1>
        {console.log("Hello World")}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<HeadingComp/>)
root.render(<HeadingCompTwo />)
