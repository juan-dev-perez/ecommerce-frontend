import { http } from "./client";
import type { Product, ProductPaginate } from "../features/products/types";

export const getProducts = () => http.get<ProductPaginate>("/product");

export const getProductById = (id: string): Promise<Product> =>
  http.get(`/product/${id}`);

export const createProduct = (product: Partial<Product>): Promise<Product> =>
  http.post("/product", product);

export const updateProduct = (
  id: string,
  product: Partial<Product>
): Promise<Product> => http.patch(`/product/${id}`, product);

export const deleteProduct = (id: string): Promise<void> =>
  http.delete(`/product/${id}`);
