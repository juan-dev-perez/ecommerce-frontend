import { useMemo } from "react";
import { useCategories } from "./useCategories";
import { buildCategoryTree } from "../utils/category-tree";

/**
 * Hook para obtener las categorías en una estructura de árbol.
 * Reutiliza la lógica de obtención de datos y la de transformación.
 */
export const useCategoryTree = () => {
  // 1. Obtenemos los datos planos y los estados de carga/error.
  const { categories: flatCategories, isLoading, isError, error } = useCategories();

  // 2. Usamos useMemo para la optimización.
  // La función buildCategoryTree solo se volverá a ejecutar si la lista
  // de flatCategories cambia. No en cada re-render.
  const categoryTree = useMemo(() => {
    if (!flatCategories) {
      return []; // Si no hay datos, devolvemos un array vacío.
    }
    return buildCategoryTree(flatCategories);
  }, [flatCategories]);

  return {
    categoryTree, // El árbol de categorías listo para usar.
    isLoading,
    isError,
    error
  };
};
