import type { Category } from "../types";

export interface CategoryNode extends Category {
  children: CategoryNode[];
}

/**
 * Transforma una lista plana de categorías en una estructura de árbol anidada.
 * @param categories La lista plana de categorías desde la API.
 * @returns Un array de categorías de nivel raíz, con sus hijos anidados.
 */
export function buildCategoryTree(categories: Category[]): CategoryNode[] {
  
  // Usamos un mapa para un acceso súper rápido a cada categoría por su ID.
  const categoryMap = new Map<number, CategoryNode>();

  // 1. Primera pasada: Inicializamos cada categoría como un nodo del árbol
  //    y la añadimos al mapa.
  categories.forEach(category => {
    categoryMap.set(category.id, { ...category, children: [] });
  });

  const tree: CategoryNode[] = [];

  // 2. Segunda pasada: Anidamos los hijos dentro de sus padres.
  categoryMap.forEach(node => {
    if (node.parentId) {
      const parent = categoryMap.get(node.parentId);
      // Si el padre existe, añadimos este nodo a sus hijos.
      if (parent) {
        parent.children.push(node);
      }
    } else {
      // Si no tiene padre, es un nodo de nivel raíz.
      tree.push(node);
    }
  });

  return tree;
}
