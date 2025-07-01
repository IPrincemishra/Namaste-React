import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [searchTxt, setSearchTxt] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(RESTAURANT_API)
            const json = await data.json()
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            setAllRestaurants(restaurants)
            setFilteredList(restaurants)
        }
        fetchData()
    }, [])

    const handleFilter = () => {
        const filterRes = filteredList.filter((res) => res.info.avgRating > 4.5)
        setFilteredList(filterRes)
    }

    const handleSearch = () => {
        const serachList = allRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()))
        setFilteredList(serachList)
    }

    if (allRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="search-container">
                <div className="filter">
                    <button className="filter-btn"
                        onClick={handleFilter}>
                        Filter - Top Rated
                    </button>
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        className="search"
                        value={searchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSearch();
                        }}
                        placeholder="Type....."
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredList.length === 0 ? (
                        <h2>No restaurants found.</h2>
                    ) : (
                        filteredList.map((restaurant) => (
                            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
                                <RestaurantCard resData={restaurant} />
                            </Link>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Body;