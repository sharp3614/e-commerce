import React from "react";
// if (!products) {
//     return <h1>Loading...</h1>;
//   }<div className="h-2 bg-gray-400 rounded-full w-48 mb-4"></div>
const ProductLoader = () => {
  return (
    <div className="max-w-sm animate-pulse border justify-between self-stretch rounded-lg hover:shadow-lg w-full">
      <div className="w-full hover:shadow-lg bg-gray-400"></div>
    </div>
  );
};

export default ProductLoader;
