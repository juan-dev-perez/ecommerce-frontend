import { useEffect, useState } from "react";
import type { ProductPaginate } from "../types";
import { getProducts } from "../../../api/products";

const initialProductPaginate: ProductPaginate = {
  data: [],
  meta: {
    page: 1,
    lastPage: 1,
  },
};

export function useFetchProducts() {
  const [products, setProducts] = useState<ProductPaginate>(initialProductPaginate);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("[useFetchProducts]", err);
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
}
