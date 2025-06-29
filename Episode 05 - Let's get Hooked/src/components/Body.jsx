import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const restaurants =
            json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setAllRestaurants(restaurants);
        setFilteredList(restaurants);
    };

    // Filter Top Rated
    const handleFilter = () => {
        const filteredRes = filteredList.filter(
            (res) => res.info.avgRating > 4.5
        );
        setFilteredList(filteredRes);
    };

    // Search Functionality
    const handleSearch = () => {
        const searchRes = allRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
        );
        setFilteredList(searchRes);
    };

    if (allRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="search-container">
                <div className="filter">
                    <button className="filter-btn" onClick={handleFilter}>
                        Filter - Top Rated
                    </button>
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        className="search"
                        value={searchTxt}
                        placeholder="Type....."
                        onChange={(e) => setSearchTxt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSearch();
                        }}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="res-container">
                {filteredList.length === 0 ? (
                    <h2>No restaurants found.</h2>
                ) : (
                    filteredList.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.info.id}
                            resData={restaurant}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;