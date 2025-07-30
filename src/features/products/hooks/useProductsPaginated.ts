import { useEffect, useState } from "react";
import type { ProductPaginate } from "../types";
import { initialProductPaginate } from "./useFetchProducts";
import { getProducts } from "../../../api/products";

export function useProductsPaginated() {
  const [products, setProducts] = useState<ProductPaginate>(initialProductPaginate);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1); // página actual

  const fetchProducts = async (pageNumber: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts(pageNumber,12);
      setProducts(data);
    } catch (err) {
      console.error("[useProductsPaginated]", err);
      setError("No se pudieron cargar los productos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return {
    products: products.data,
    meta: products.meta,
    page,
    setPage,
    loading,
    error,
  };
}
