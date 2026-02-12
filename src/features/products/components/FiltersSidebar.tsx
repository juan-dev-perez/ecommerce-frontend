import { useFilterStore } from "../../../store/filter.store";
import { useCategoryTree } from "../hooks/useCategoryTree";
import { ActiveFilters } from "./ActiveFilters";
import CategoryNode from "./CategoryNode";

export default function FiltersSidebar() {
  const activeCategory = useFilterStore((state) => state.filters.category);
  const updateFilter = useFilterStore((state) => state.updateFilter);

  const { categoryTree, isLoading, isError } = useCategoryTree();

  const handleCategorySelect = (categorySlug: string | null) => {
    updateFilter("category", categorySlug);
  };

  if (isLoading) return <div className="text-sm text-base-content/70">Cargando categorías…</div>;
  if (isError) return <div className="text-sm text-error">Error al cargar categorías</div>;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold">Filtros</h2>
        <p className="text-sm text-base-content/60">Refiná tu búsqueda.</p>
      </div>

      <ActiveFilters />

      <div className="divider my-1" />

      <div>
        <h3 className="text-sm font-semibold text-base-content/70 uppercase tracking-wide mb-2">
          Categorías
        </h3>

        <nav>
          <ul className="space-y-1">
            <li>
              <button
                className={`w-full text-left rounded-2xl px-3 py-2 hover:bg-base-200 transition ${
                  activeCategory === null ? "bg-base-200 font-semibold text-primary" : ""
                }`}
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
      </div>
    </div>
  );
}
