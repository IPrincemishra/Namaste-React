import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const OnlineStatus = useOnlineStatus()

    if (OnlineStatus === false) {
        return <h1>You are Offline</h1>
    }

    if (allRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div
            className="Body w-full h-full bg-[#cccccc25]">
            <div className="search-container flex w-[100%] items-center justify-between py-[1.25rem] px-[3rem] border-b border-b-[#14181e2c] mb-[1.25rem]">
                <div
                    className="h-[7vh] flex justify-end items-center">
                    <button
                        className="w-fit px-4 h-8 rounded-[5px] border-0 bg-[#007bff] text-white cursor-pointer"
                        onClick={handleFilter}>
                        Filter - Top Rated
                    </button>
                </div>
                <div className="search-box flex gap-[2rem]">
                    <input
                        type="text"
                        className="w-[300px] h-8 border-b border-[rgba(0,0,0,0.52)] p-2 focus:outline-none focus:border-[#007bff]"
                        value={searchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSearch();
                        }}
                        placeholder="Type....."
                    />
                    <button className="bg-[#f75201] text-[#fff] px-[1rem] rounded cursor-pointer border-none" onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="w-full px-[1rem] pb-4 flex justify-center gap-10 flex-wrap">
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