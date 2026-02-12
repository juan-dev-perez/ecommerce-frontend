import { X } from "lucide-react";
import { initialState, useFilterStore } from "../../../store/filter.store";

export const ActiveFilters = () => {
  const filters = useFilterStore((state) => state.filters);
  const removeFilter = useFilterStore((state) => state.removeFilter);

  const activeFilterPills: { key: string; label: string }[] = [];

  if (filters.search) activeFilterPills.push({ key: "search", label: `Búsqueda: “${filters.search}”` });
  if (filters.category) activeFilterPills.push({ key: "category", label: `Categoría: ${filters.category}` });
  if (filters.brand) activeFilterPills.push({ key: "brand", label: `Marca: ${filters.brand}` });
  if (filters.priceMin) activeFilterPills.push({ key: "priceMin", label: `Desde: $${filters.priceMin}` });
  if (filters.priceMax) activeFilterPills.push({ key: "priceMax", label: `Hasta: $${filters.priceMax}` });

  if (activeFilterPills.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {activeFilterPills.map((pill) => (
        <div
          key={pill.key}
          className="inline-flex items-center gap-2 rounded-full bg-base-200 border border-base-300 px-3 py-1 text-sm"
        >
          <span className="text-base-content/80">{pill.label}</span>
          <button
            onClick={() => removeFilter(pill.key as keyof typeof initialState)}
            className="btn btn-ghost btn-xs btn-circle"
            aria-label={`Eliminar filtro ${pill.label}`}
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};
