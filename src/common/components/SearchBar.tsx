import { useEffect, useState, type FormEvent } from "react";
import { useFilterStore } from "../../store/filter.store";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const searchTermFromStore = useFilterStore((state) => state.filters.search);
  const updateFilter = useFilterStore((state) => state.updateFilter);
  const [localSearch, setLocalSearch] = useState(searchTermFromStore);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (localSearch !== searchTermFromStore) {
      updateFilter("search", localSearch);
    }
    
    if (location.pathname !== '/products') {
      navigate('/products');
    }
  };

  useEffect(() => {
    setLocalSearch(searchTermFromStore);
  }, [searchTermFromStore]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md ml-6"
      role="search"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          aria-label="Término de búsqueda"
        />

        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center justify-center w-10 text-gray-400 hover:text-gray-600"
          aria-label="Buscar"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
