import React from "react";
import ReactDOM from "react-dom/client";
// RestaurantList is JSON Data for displaying cards
import Header from "./components/Header";
import Body from "./components/Body";
import "@fontsource/poppins"; // Default 400 weight
// Ya specific weight ke liye:
import "@fontsource/poppins/500.css";



const App = () => {
    return (
        <div>
            <Header /> {/* Header */}
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)