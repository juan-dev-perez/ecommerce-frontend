import type { Category } from "../features/products/types";
import { http } from "./client";

// export const getAllCategories = (): Promise<Category[]> => http.get('/categories');

export const getActiveCategories = (): Promise<Category[]> => http.get('/categories');