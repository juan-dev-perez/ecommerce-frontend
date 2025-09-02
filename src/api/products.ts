import { http } from "./client";
import type { Product, ProductPaginate } from "../features/products/types";

export const getProducts = (page = 1, limit = 12) => http.get<ProductPaginate>(`/products?page=${page}&limit=${limit}`);

export const getProductById = (id: string): Promise<Product> =>
  http.get(`/products/${id}`);

export const createProduct = (product: Partial<Product>): Promise<Product> =>
  http.post("/products", product);

export const updateProduct = (
  id: string,
  product: Partial<Product>
): Promise<Product> => http.patch(`/products/${id}`, product);

export const deleteProduct = (id: string): Promise<void> =>
  http.delete(`/products/${id}`);
