import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId) => {

    const [filterItems, setFilterItems] = useState([])
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        const fetchMenu = async () => {
            const data = await fetch(MENU_API + resId)
            const json = await data.json()
            setResInfo(json.data)
            const menuRes = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card?.itemCards || [];
            setFilterItems(menuRes)
        }
        fetchMenu();
    }, [])


    return {resInfo ,filterItems, setFilterItems}
}

export default useRestaurantMenu;