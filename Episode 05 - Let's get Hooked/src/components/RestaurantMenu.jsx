import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import { CON_URL, MENU_API } from '../utils/constants'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    const [filterItems, setFilterItems] = useState([])
    const { resId } = useParams()

    useEffect(() => {
        const fetchMenu = async () => {
            const data = await fetch(MENU_API + resId)
            const json = await data.json()
            setResInfo(json.data)
            const menuRes = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
            setFilterItems(menuRes)
        }
        fetchMenu();
    }, [])

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
        <div className="menu-container">
            <div className="menu">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <h2>Menu</h2>
                <button onClick={allFilter}>All</button>
                <button onClick={vegFilter}>Veg</button>
                <button onClick={nonVegFilter}>Non-Veg</button>
                <div className="card-container">
                    {filterItems.map((item) => (
                        <div className="item-cards" key={item.card.info.id}>
                            <div>
                                <h4 >{item.card.info.name} </h4>
                                <p className="item-price">Rs. {
                                    item.card.info.price / 100 ||
                                    item.card.info.finalPrice / 100 ||
                                    item.card.info.variantsV2.pricingModels[0].price / 100 ||
                                    ""
                                }</p>
                                <p className="item-rating">
                                    {item.card.info.ratings.aggregatedRating.rating ? `⭐ ${item.card.info.ratings.aggregatedRating.rating}` : "Rating is Not Available"}
                                    {item.card.info.ratings?.aggregatedRating?.ratingCountV2
                                        ? `(${item.card.info.ratings.aggregatedRating.ratingCountV2})`
                                        : "N/A"}
                                </p>
                            </div>
                            <img src={CON_URL + item.card.info.imageId} alt={item.card.info.name} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;