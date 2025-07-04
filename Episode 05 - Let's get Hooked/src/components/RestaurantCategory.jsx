import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <>
            {/* Header */}
            <div className="w-full bg-gray-50 shadow-md p-4 flex flex-col items-center">
                <div className="w-full flex justify-between bg-gray-200 p-4 rounded cursor-pointer" onClick={handleClick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>{showItems ? "⬇️" : "⬅️"}</span>
                </div>
                <div>
                    {showItems && <ItemList items={data.itemCards} />}
                </div>
            </div>
            {/* Accordion body */}
        </>
    )
}

export default RestaurantCategory