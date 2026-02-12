import { useFilterStore, type SortOptions } from "../../../store/filter.store";

const sortOptionsMap: Record<SortOptions, string> = {
  "createdAt-desc": "Más reciente",
  "createdAt-asc": "Más antiguo",
  "price-asc": "Menor precio",
  "price-desc": "Mayor precio",
  "name-asc": "Nombre A-Z",
  "name-desc": "Nombre Z-A",
};

export default function SortBar() {
  const filters = useFilterStore((state) => state.filters);
  const updateFilter = useFilterStore((state) => state.updateFilter);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilter("sort", event.target.value as SortOptions);
  };

  return (
    <label className="flex items-center gap-2">
      <span className="text-sm text-base-content/70">Ordenar:</span>
      <select
        value={filters.sort}
        onChange={handleSortChange}
        className="select select-bordered select-sm rounded-2xl"
      >
        {Object.entries(sortOptionsMap).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
