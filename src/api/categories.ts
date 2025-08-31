import { http } from "./client";

export interface Category {
    id: number;
    name: string;
    slug: string;
    isActive: boolean;
}

export const getAllCategories = (): Promise<Category[]> => http.get('/categories');