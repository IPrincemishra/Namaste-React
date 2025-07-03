import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import { CON_URL, MENU_API } from '../utils/constants'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams()

    const { resInfo, filterItems, setFilterItems } = useRestaurantMenu(resId)

    const btnStyle = "bg-[#007bff] text-white px-4 py-2 border-0 rounded-[5px] cursor-pointer my-4 mx-1"

    if (resInfo === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
                <div className="card-container w-full h-full flex justify-center flex-wrap py-[2rem] border-t-1 border-[#0000005b] gap-[1rem] mt-2">
                    {filterItems.map((item) => (
                        <div className="item-cards flex items-center justify-between w-[80%] min-h-[100px] bg-[#6b6b6b10] p-[1rem] border-b-2 border-[#0000005b] rounded-t-2xl transition-all duration-300 ease hover:bg-[#6b6b6b20]" key={item.card.info.id}>
                            <div className="flex flex-col gap-[0.5rem]">
                                <h4 >{item.card.info.name} </h4>
                                <p className="item-price text-[15px] font-medium">Rs. {
                                    item.card.info.price / 100 ||
                                    item.card.info.finalPrice / 100 ||
                                    item.card.info.variantsV2.pricingModels[0].price / 100 ||
                                    "N/A"
                                }</p>
                                <p className="item-rating text-[14px] font-medium text-[#1a6649]">
                                    {item.card.info.ratings.aggregatedRating.rating ? `⭐ ${item.card.info.ratings.aggregatedRating.rating}` : "Rating is Not Available"}
                                    {item.card.info.ratings?.aggregatedRating?.ratingCountV2
                                        ? `(${item.card.info.ratings.aggregatedRating.ratingCountV2})`
                                        : " "}
                                </p>
                            </div>
                            <img
                                className="w-[150px] rounded-2xl"
                                src={CON_URL + item.card.info.imageId}
                                alt={item.card.info.name}
                            />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;