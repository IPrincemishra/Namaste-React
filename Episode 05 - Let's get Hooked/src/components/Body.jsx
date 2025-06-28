import { useState } from "react";
import resList from "../utils/restList.json"
import RestaurantCard from "./RestaurantCard";


const Body = () => {

    //* Local State Variable - super powerful variable
    const [filteredList, setFilteredList] = useState(resList)


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const  filteredRes = filteredList.filter((res) => res.data.avgRating > 4)
                    setFilteredList(filteredRes)
                }}>
                    Filter</button>
            </div>
            <div className="res-container">
                {
                    filteredList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;