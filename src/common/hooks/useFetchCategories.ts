import { useEffect, useState } from "react";
import { getAllCategories} from "../../api/categories";
import type { Category } from "../../features/products/types";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  return { categories };
};
