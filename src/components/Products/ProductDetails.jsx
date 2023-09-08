import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import Layout from "../Layout";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(async (json) => setProduct(await json));
  }, []);

  return (
    <Layout>
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
                <div class="flex items-center">
                  <svg
                    class="w-6 h-6 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p class="ml-2 text-2xl font-bold text-gray-900">
                    {product.rating.rate}
                  </p>
              </div>
              <span className="font-bold text-3xl">${product.price}</span>
              <div className="flex justify-center items-center h-full">
                <button className="flex border  rounded-lg shadow-xl px-4 py-2">
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
    </Layout>
  );
};

export default ProductDetails;
