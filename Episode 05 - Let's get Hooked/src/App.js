import React, { lazy, Suspense } from "react";
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

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const App = () => {
    return (
        <div>
            <Header /> {/* Header */}
            <Outlet />
        </div>
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
                element: <Suspense fallback={<Shimmer/>}><About /></Suspense>
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