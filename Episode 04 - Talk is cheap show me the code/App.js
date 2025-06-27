import React from "react";
import ReactDOM from "react-dom/client";
// RestaurantList is JSON Data for displaying cards
import resList from "./restList.json"



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.designmantic.com/logo-images/171406.png?company=Company%20Name&keyword=food&slogan=&verify=1" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// ! not using keys (not acceptable) <<<< index as key <<<<<<<< Unique id/key (bad practice)
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for food items" />
                <button className="search-btn">Search</button>
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    })
                }

                {/* {
                    resList.map((restaurant,index) => (
                        <RestaurantCard key={index} resData={restaurant}/>
                    ))
                } */}
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo ="Error" } = resData?.data;

    return (
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <div className="res-details">
                <h6>{avgRating} stars</h6>
                <h5>₹{costForTwo / 100} for one</h5>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <Header /> {/* Header */}
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)