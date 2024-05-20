import React from "react";
import Product from "./Product";
import useSWR from "swr";
import { useSearch } from "../../hooks/use-search";
const fetcher = async (...args) =>
  await fetch(...args).then((response) => response.json());

const Products = () => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/products`,
    fetcher
  );
  const { query } = useSearch();
  const filteredProducts =
    data &&
    data.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()));
  if (error) return <h1>{error}</h1>;
  return (
    <main className="">
      {data === 0 ? (
        <h1 className="w-screen text-center">
          Aradığınız ürün stoklarımızda mevcut değildir...
        </h1>
      ) : isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Products;
