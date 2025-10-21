import { useFilterStore } from "../../../store/filter.store";
import { useCategoryTree } from "../hooks/useCategoryTree";
import CategoryNode from "./CategoryNode";

export default function FiltersSidebar() {
  const activeCategory = useFilterStore((state) => state.filters.category);
  const updateFilter = useFilterStore((state) => state.updateFilter);

  const { categoryTree, isLoading, isError } = useCategoryTree();

  const handleCategorySelect = (categorySlug: string | null) => {
    updateFilter("category", categorySlug);
  };

  if (isLoading) return <div>Cargando categorías...</div>;
  if (isError) return <div>Error al cargar categorías</div>;

  return (
    <>
      <h2>Filtros</h2>
      <h3>Categorías</h3>
      <nav>
        <ul>
          {/* Opción para limpiar el filtro de categoría */}
          <li>
            <button
              className={activeCategory === null ? "font-bold" : ""}
              onClick={() => handleCategorySelect(null)}
            >
              Todas
            </button>
          </li>
          {categoryTree.map((rootNode) => (
            <CategoryNode
              key={rootNode.id}
              node={rootNode}
              onCategorySelect={handleCategorySelect}
              activeCategorySlug={activeCategory}
            />
          ))}
        </ul>
      </nav>

      {/* Aquí podríamos añadir más filtros en el futuro (precio, etc.) */}
    </>
  );
}
