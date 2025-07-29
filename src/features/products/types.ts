export interface Product {
  id: string;
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
    page: number;
    lastPage: number
  }
}