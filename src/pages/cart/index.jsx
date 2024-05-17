import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../features/cart/cartSlice";
import { MdDelete } from "react-icons/md";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="flex items-center justify-between gap-2 border w-full p-2 rounded-md">
      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 object-contain rounded-md"
          src={product.image}
          alt={product.title}
        />
        <h3 className="w-44 truncate">{product.title}</h3>
      </div>
      <span>Adet: {product.quantity}</span>
      <button
        className="bg-red-600 text-white p-2 rounded-md"
        onClick={handleRemoveFromCart}
      >
        <MdDelete />
      </button>
    </div>
  );
};

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);

  return (
    <div className="w-full space-y-3 py-4">
      <div className="space-y-1">
        {cartItems.length == 0 ? (
          <h1 className="text-center">Sepet Boş</h1>
        ) : (
          cartItems.map((item) => <CartItem product={item} />)
        )}
      </div>
      <button
        className="float-right py-2 px-4 border rounded-lg disabled:text-gray-400"
        disabled={cartItems.length == 0}
        onClick={handleClearCart}
      >
        Sepeti Temizle
      </button>
    </div>
  );
};

export default CartPage;
