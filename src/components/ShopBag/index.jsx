import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../features/cart/cartSlice.js";
import CartTable from "./table.jsx";
import {Link} from "react-router-dom";
import {CiShoppingCart} from "react-icons/ci";

const Cart = () => {
    const cartItems = useSelector((state => state.cart.items))
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (<main className="w-full md:w-3/4 mx-auto">
        {cartItems && cartItems.length > 0 ? (<>
            <CartTable data={cartItems}/>
            <div>
                <Link className="py-2 px-4 border border-slate-800/50 rounded-lg" to="/">Alışverişe devam
                    et</Link>
                <button
                    className="float-right py-2 px-4 border border-slate-800/50 rounded-lg disabled:text-gray-400"
                    disabled={cartItems.length === 0}
                    onClick={handleClearCart}
                >
                    Sepeti Temizle
                </button>
            </div>
        </>) : (<div className="flex items-center justify-between px-8 shadow h-20 mt-4 rounded-md border">
            <div className="flex items-center gap-4 justify-center">
                <div className="p-2 bg-sky-400/20 rounded-md"><CiShoppingCart
                    className="text-sky-400 font-bold" size={32}/></div>
                <h1>Sepetinizde ürün bulunmamaktadır</h1>
            </div>
            <Link className="py-2 px-4 bg-sky-400 text-white rounded-lg" to="/">Alışverişe devam et</Link>
        </div>)}
    </main>);
};

export default Cart;
