import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {

    // let btnName = "Login";
    const [btnName, setBtnName] = useState('Login')

    const onlineStatus = useOnlineStatus()

    const { loggedInUser } = useContext(UserContext)

    const headerLink = "cursor-pointer no-underline text-white transition-all duration-300 ease-in-out hover:text-[#007bff]";

    // Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);


    return (
        <div className="flex w-full h-[12vh] py-4 px-12 items-center justify-between overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.2)]  bg-[#14181e] text-[#f8fdff]">
            <div className="logo-container">
                <Link to="/">
                    <img className="w-[140px] rounded-full object-cover" src={LOGO_URL} />
                </Link>
            </div>
            <div className="flex gap-[3rem] items-center">
                <ul className="flex gap-[2rem] text-base uppercase items-center">
                    <li className={headerLink}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={headerLink}>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className={headerLink}>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className={headerLink}>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className={`${headerLink} flex gap-2 items-center`}>
                        <Link to="/cart"> Cart - <span className="text-red-600"> {cartItems.length}</span></Link>
                    </li>
                    <li className={` ${onlineStatus ? "bg-green-500" : "bg-red-500"} w-[10px] h-[10px] rounded-full text-center `}></li>
                </ul>
                <button className={`${btnName == "Login" ? "bg-[#bd863e]" : "bg-red-600"} text-[#fffdf4] py-[0.35rem] px-[1.25rem] border-0 rounded-[7px] text-base font-light cursor-pointer w-[100px] transition-all duration-300 ease-in-out`} onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
                <p>{loggedInUser}</p>
            </div>
        </div >
    )
}

export default Header;