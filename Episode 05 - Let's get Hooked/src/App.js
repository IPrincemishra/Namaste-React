import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";



import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const App = () => {

    const [userName, setUserName] = useState();
    // Autentication
    useEffect(() => {
        // Make and api call send username and password
        const data = {
            name: "Prince Mishra",
        }
        setUserName(data.name)
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
            <div>
                <Header /> {/* Header */}
                <Outlet />
            </div>
        </UserContext.Provider >
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)