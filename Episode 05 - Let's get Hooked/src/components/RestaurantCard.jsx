import { useContext } from "react";
import { CON_URL } from "../utils/constants.js"; // Importing constants for image URL
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { loggedInUser } = useContext(UserContext)

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info;

    return (
        <div className="w-[250px] min-h-[350px] border border-[rgba(0,0,0,0)] flex flex-col p-3 gap-3 overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.3)] rounded-[20px] bg-white transition-all duration-300 ease-in-out justify-between hover:border-[#007bff]">
            <img className="w-[100%] h-[200px] object-cover rounded-md transition-all duration-300 ease-in-out hover:scale-105" src={CON_URL + cloudinaryImageId} />
            <h3 className="text-[1.2rem]">
                {name}
            </h3>
            <p className="text-[0.90rem]">
                {cuisines.join(", ")}
            </p>
            <div className="res-details w-[95%] flex justify-between ">
                <h6 className="bg-[#176423] text-white py-[2px] px-[6px] rounded-[5px] uppercase text-[10px] font-medium flex items-center">
                    {avgRating} stars
                </h6>
                <h5>{costForTwo}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;