import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { FaStar } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .then(async (json) => setProduct(await json));
  }, []);
  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <>
      {product ? (
        <div className="w-full h-full flex flex-col px-16 gap-4 pt-8">
          <div className="flex  gap-4">
            <div className="w-96 bg-white rounded-lg shadow-xl p-4 border-2">
              <button
                className=" float-right"
                onClick={() => setFavorite(!favorite)}
              >
                {favorite ? (
                  <AiTwotoneHeart size={24} className=" text-red-500" />
                ) : (
                  <AiOutlineHeart size={24} className="hover:text-red-500" />
                )}
              </button>
              <img
                src={product.image}
                alt=""
                className="w-72 rounded-lg mx-auto"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-light">{product.title}</h1>
              <h4 className="text-slate-600 text-2xl font-bold">
                {product.category}
              </h4>
              <div className="flex items-center">
                <FaStar />
                <p className="ml-2 text-2xl font-bold text-gray-900">
                  {product.rating.rate}
                </p>
              </div>
              <span className="font-bold text-3xl">${product.price}</span>
              <div className="flex justify-center items-center h-full">
                <button
                  onClick={handleAddToCart}
                  className="flex border  rounded-lg shadow-xl px-4 py-2"
                >
                  <MdOutlineAddShoppingCart size={24} />
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="overflow-y-auto pb-8 pt-4 border rounded-lg shadow-xl px-4">
            <h1 className="font-bold text-3xl mb-4">Description</h1>
            <p>{product?.description}</p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ProductDetails;
