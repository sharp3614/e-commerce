import React, { useState } from "react";
import { useSearch } from "../hooks/use-search";

const Search = () => {
  const { setSearchParams } = useSearch();

  return (
    <form>
      <input
        type="search"
        className="w-full px-2 py-4 outline-none shadow-lg rounded-lg border"
        placeholder="Macbook, Phone, Clothes"
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set("q", e.target.value);
              return prev;
            },
            { replace: true }
          )
        }
      />
    </form>
  );
};

export default Search;
