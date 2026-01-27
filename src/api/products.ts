import { http } from "./client";
import type { Product, ProductPaginate } from "../features/products/types";

export const getProducts = (params: Record<string, any>) => {
  return http.get<ProductPaginate>(`/products/`, { params });
};

export const getOfferProducts = (limit: number): Promise<Product[]> =>
  http.get(`/products/offers?limit=${limit}`);

export const getProductBySlug = (slug: string): Promise<Product> =>
  http.get(`/products/${slug}`);

export const createProduct = (product: Partial<Product>): Promise<Product> =>
  http.post("/products", product);

export const updateProduct = (
  id: string,
  product: Partial<Product>
): Promise<Product> => http.patch(`/products/${id}`, product);

export const deleteProduct = (id: string): Promise<void> =>
  http.delete(`/products/${id}`);
