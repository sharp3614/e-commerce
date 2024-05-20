import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/cart/cartSlice";
import { AiOutlineHeart} from "react-icons/ai";

const Product = ({product}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (event) => {
        event.preventDefault();
        dispatch(addToCart(product));
    };
    return (
        <Link
            to={`products/${product.id}`}
            className="relative border flex flex-col justify-between self-stretch rounded-lg p-4"
        >
            <div className="absolute right-2 top-2">
                <button className="size-6 bg-white"><AiOutlineHeart className="w-full h-full"/></button>
            </div>
            <div className="p-4">
                <img
                    src={product.image}
                    alt=""
                    className="mx-auto w-40 h-52 rounded-lg"
                />
            </div>
            <div className="px-2 pt-4 pb-8">
                <h2 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {product?.title}
                </h2>
            </div>
            <div className="flex w-full items-center justify-between px-4 pb-4">
                <span className="text-xl py-2">${product?.price}</span>
            </div>
            <button
                onClick={handleAddToCart}
                className="cursor-pointer border border-sky-400 text-sky-400 py-2 rounded-md hover:bg-sky-400 hover:text-white transition-colors"
            >
                Sepete Ekle
            </button>
        </Link>
    );
};

export default Product;
