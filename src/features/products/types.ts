export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  discountPercentage?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  images?: {
    id: string;
    url: string;
  }[];
}

export interface ProductPaginate {
  data: Product[];
  meta: {
    total: number
    page: number;
    lastPage: number,
  }
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    isActive: boolean;
    parentId: number;
    createdAt: string;
}