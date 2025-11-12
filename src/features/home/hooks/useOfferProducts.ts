import { useQuery } from "@tanstack/react-query";
import { getOfferProducts } from "../../../api/products";

export const useOfferProducts = (limit: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", "offers"],
    queryFn: () => getOfferProducts(limit),
    staleTime: 1000 * 60 * 10,
  });

  return {
    offerProducts: data,
    isLoading,
    isError,
    error,
  };
};
