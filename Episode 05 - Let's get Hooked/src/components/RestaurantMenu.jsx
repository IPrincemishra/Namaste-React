import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import { CON_URL, MENU_API } from '../utils/constants'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
const RestaurantMenu = () => {

    const { resId } = useParams()

    const [showIndex, setShowIndex] = useState(0)

    const { resInfo, filterItems, setFilterItems } = useRestaurantMenu(resId)

    const btnStyle = "bg-[#007bff] text-white px-4 py-2 border-0 rounded-[5px] cursor-pointer my-4 mx-1"

    if (resInfo === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) => res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories);


    const vegFilter = () => {
        const vegMenu = itemCards?.filter((res) => res.card.info.itemAttribute.vegClassifier == "VEG")
        setFilterItems(vegMenu)
    }
    const nonVegFilter = () => {
        const nonVegMenu = itemCards?.filter((res) => res.card.info.itemAttribute.vegClassifier == "NONVEG")
        setFilterItems(nonVegMenu)
    }
    const allFilter = () => {
        setFilterItems(itemCards)
    }

    return (
        <div className="menu-container w-full flex flex-col items-center justify-center py-[2rem]">
            <div className="menu w-[70%]">
                <h1 className="text-3xl pb-2">{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <h2 className="text-2xl pt-1">
                    Menu
                </h2>
                <button className={btnStyle} onClick={allFilter}>All</button>
                <button className={btnStyle} onClick={vegFilter}>Veg</button>
                <button className={btnStyle} onClick={nonVegFilter}>Non-Veg</button>
                {/* Categories Accordion */}
                <div className="card-container w-full h-full flex justify-center flex-wrap py-[2rem] border-t-1 border-[#0000005b] gap-[1rem] mt-2">
                    {categories.map((category, index) => (
                        //! Controlled component
                        <RestaurantCategory
                            key={category?.card?.card?.id || category?.card?.card?.title || index}
                            data={category?.card?.card}
                            showItems={index === showIndex ? true : false}
                            setShowIndex={() => setShowIndex(index)}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;