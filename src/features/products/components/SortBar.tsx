import { useFilterStore, type SortOptions } from "../../../store/filter.store";

const sortOptionsMap: Record<SortOptions, string> = {
    'createdAt-desc' : 'Mas reciente',
    'createdAt-asc' : 'Mas antiguo',
    'price-asc' : 'Menor precio',    
    'price-desc' : 'Mayor precio',
    'name-asc' : 'Nombre A-Z',
    'name-desc' : 'Nombre Z-A'
};

export default function SortBar() {
  const filters = useFilterStore(state => state.filters);
  const updateFilter = useFilterStore(state => state.updateFilter);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilter('sort', event.target.value as SortOptions);
  };

  return (
    <div className="flex items-center justify-end">
      <label htmlFor="sort-by" className="text-sm text-gray-600 mr-2">
        Ordenar por:
      </label>
      <select
        id="sort-by"
        value={filters.sort}
        onChange={handleSortChange}
        className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.entries(sortOptionsMap).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
