import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = ({ product }) => {
  return (
    <div
      className="border flex flex-col justify-between self-stretch rounded-lg w-full hover:shadow-lg"
    >
      <div className="bg-white rounded-lg  p-4">
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
        <div className=" border shadow-lg rounded-lg p-2 hover:bg-gray-400 hover:text-white cursor-pointer">
          <MdOutlineAddShoppingCart size={24} />
        </div>
      </div>
    </div>
  );
};

export default Product;
