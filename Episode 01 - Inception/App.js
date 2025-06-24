const root = ReactDOM.createRoot(document.querySelector("#root"))

/*
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
*/

// ! ReactElement(object) => HTML(Browser Understands)

const parent = React.createElement(
    'div',
    { id: "parent" },
    [
        React.createElement(
            'div',
            { id: "childOne" },
            [
                React.createElement("h1", {}, "I'm h1 tag"),
                React.createElement('h2', {}, "I'm h2 tag")
            ]
        ),
        React.createElement(
            'div',
            { id: "childTwo" },
            [
                React.createElement("h1", {}, "I'm h1 tag"),
                React.createElement('h2', {}, "I'm h2 tag")
            ]
        )
    ]
);

//* JSX


root.render(parent)
console.log(parent);

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React!"
);

console.log(heading);  //! Object

// root.render(heading)



