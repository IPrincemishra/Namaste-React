import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {

    // let btnName = "Login";
    const [btnName, setBtnName] = useState('Login')

    const onlineStatus = useOnlineStatus()

    return (
        <div className="flex w-full h-[12vh] py-4 px-12 items-center justify-between overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.2)]  bg-[#14181e] text-[#f8fdff]">
            <div className="logo-container">
                <img className="w-[140px] rounded-full object-cover" src={LOGO_URL} />
            </div>
            <div className="flex gap-[3rem] items-center">
                <ul className="flex gap-[2rem] text-base uppercase items-center">
                    <li className="cursor-pointer no-underline text-white transition-all duration-300 ease-in-out hover:text-[#007bff]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer no-underline text-white transition-all duration-300 ease-in-out hover:text-[#007bff]">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="cursor-pointer no-underline text-white transition-all duration-300 ease-in-out hover:text-[#007bff]">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="cursor-pointer no-underline text-white transition-all duration-300 ease-in-out hover:text-[#007bff]">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="cursor-pointer no-underline text-white transition-all duration-300 ease-in-out hover:text-[#007bff]">Cart</li>
                    <li className={` ${onlineStatus ? "bg-green-500" : "bg-red-500"} w-[10px] h-[10px] rounded-full text-center `}></li>
                </ul>
                <button className={`${btnName == "Login" ? "bg-[#bd863e]" : "bg-red-600"} text-[#fffdf4] py-[0.35rem] px-[1.25rem] border-0 rounded-[7px] text-base font-light cursor-pointer w-[100px] transition-all duration-300 ease-in-out`} onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;