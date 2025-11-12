import { initialState, useFilterStore } from "../../../store/filter.store";

export const ActiveFilters = () => {
  const filters = useFilterStore((state) => state.filters);
  const removeFilter = useFilterStore((state) => state.removeFilter);

  const activeFilterPills = [];

  if (filters.search) {
    activeFilterPills.push({
      key: "search",
      label: `Búsqueda: "${filters.search}"`,
    });
  }
  if (filters.category) {
    // de momento lo hacemos con el slug
    activeFilterPills.push({
      key: "category",
      label: `Categoría: ${filters.category}`,
    });
  }
  if (filters.brand) {
    activeFilterPills.push({
      key: "brand",
      label: `Marca: ${filters.brand}`,
    });
  }
  if (filters.priceMin) {
    activeFilterPills.push({
      key: "priceMin",
      label: `Desde: $${filters.priceMin}`,
    });
  }
  if (filters.priceMax) {
    activeFilterPills.push({
      key: "priceMax",
      label: `Hasta: $${filters.priceMax}`,
    });
  }

  if (activeFilterPills.length === 0) {
    return null;
  }

  return (
    <div className="my-3">
      <div className=" flex flex-wrap gap-2">
        {activeFilterPills.map((pill) => (
          <div
            key={pill.key}
            className="flex items-center bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            <span>{pill.label}</span>
            <button
              onClick={() =>
                removeFilter(pill.key as keyof typeof initialState)
              }
              className="ml-2 text-gray-500 hover:text-gray-800"
              aria-label={`Eliminar filtro ${pill.label}`}
            >
              {/* Icono de 'X' */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
