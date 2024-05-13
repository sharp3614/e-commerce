import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    q: "",
  });
  const query = searchParams.get("q");
  return { query, setSearchParams };
};
