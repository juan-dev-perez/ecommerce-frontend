import { useEffect, useState } from "react";
import { getAllCategories, type Category } from "../../api/categories";

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
