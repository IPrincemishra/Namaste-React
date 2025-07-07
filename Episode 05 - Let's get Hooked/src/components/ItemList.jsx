import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        // Dispatch action
        dispatch(addItem(item))
    }

    return (
        <div>
            <div className="card-container w-full h-full flex justify-center flex-wrap py-[2rem] border-t-1 border-[#0000005b] gap-[1rem] mt-2">
                {items.map((item) => (
                    <div className="item-cards flex items-center justify-between w-[95%] min-h-[100px] bg-[#6b6b6b10] p-[1rem] border-b-2 border-[#0000005b] rounded-t-2xl transition-all duration-300 ease hover:bg-[#6b6b6b20]" key={item.card.info.id}>
                        <div className="flex flex-col gap-[0.5rem] w-9/12">
                            <h2 className="text-xl font-medium" >{item.card.info.name} </h2>
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
                            <p className="item-rating text-[13px] w-10/12 font-medium text-[#000c]">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="flex flex-col relative w-3/12 items-center">
                            <img
                                className="w-[180px] rounded-2xl"
                                src={CON_URL + item.card.info.imageId}
                                alt={item.card.info.name}
                            />
                            <button
                                className="absolute bg-[#fff] shadow text-[#349777] px-4 rounded-lg bottom-2 left-1/2 py-1 transform -translate-x-1/2 cursor-pointer"
                                onClick={() => handleAddItem(item)}>
                                Add +
                            </button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ItemList