import { useMemo } from "react";
import { useCategories } from "./useCategories";
import { buildCategoryTree } from "../utils/category-tree";

export const useCategoryTree = () => {
  const {
    categories: flatCategories,
    isLoading,
    isError,
    error,
  } = useCategories();

  const categoryTree = useMemo(() => {
    if (!flatCategories) {
      return [];
    }
    return buildCategoryTree(flatCategories);
  }, [flatCategories]);

  return {
    categoryTree,
    isLoading,
    isError,
    error,
  };
};
