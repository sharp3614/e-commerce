import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState();
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        setProducts(
          json.filter((item) => {
            return Object.keys(item).some((key) =>
              item[key].toString().toLowerCase().includes(input)
            );
          })
        )
      );
    console.log(products);
  }, [input]);

  if (!products) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="w-1/2 mx-auto pb-4">
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-2 py-4 outline-none shadow-lg rounded-lg border"
          placeholder="Macbook, Phone, Clothes"
        />
      </div>
      {products == 0 ? (
        <h1 className="w-screen text-center">
          Aradığınız ürün stoklarımızda mevcut değildir...
        </h1>
      ) : (
        <div className="w-full h-[85%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-8 pb-40 pt-0 overflow-y-auto">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
