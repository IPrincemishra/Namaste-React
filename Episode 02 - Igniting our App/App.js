import React from "react";
import { createRoot } from "react-dom/client"; // Correct import

const root = createRoot(document.getElementById("root"));


const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React!"
);


root.render(heading);