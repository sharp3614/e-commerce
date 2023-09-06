import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  if (!products) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-full h-[98%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8 overflow-y-auto">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
