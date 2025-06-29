import { CON_URL } from "../utils/constants.js"; // Importing constants for image URL

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info;

    return (
        <div className="res-card">
            <img src={CON_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <div className="res-details">
                <h6>{avgRating} stars</h6>
                <h5>{costForTwo}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;