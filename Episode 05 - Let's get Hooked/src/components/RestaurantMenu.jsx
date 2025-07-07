import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import { CON_URL, MENU_API } from '../utils/constants'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
const RestaurantMenu = () => {

    const { resId } = useParams()

    const [showIndex, setShowIndex] = useState(0)

    const { resInfo } = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) => res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="menu-container w-full flex flex-col items-center justify-center py-[2rem]">
            <div className="menu w-[70%]">
                <h1 className="text-3xl pb-2">{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <h2 className="text-2xl pt-1">
                    Menu
                </h2>
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