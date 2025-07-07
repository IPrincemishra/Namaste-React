import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {


    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-8/12 flex flex-col items-center ">
                <div className="w-9/12 flex justify-between">
                    <h1 className="text-2xl">CART</h1>
                    <button className="bg-gray-200 px-3 rounded-2xl cursor-pointer"
                        onClick={handleClearCart}>Clear</button>
                </div>
                {
                    cartItems.length == 0 ? <h1 className="mt-2 capitalize">Items not added yet</h1> : <ItemList items={cartItems} />
                }

            </div>
        </div>
    )
}

export default Cart;