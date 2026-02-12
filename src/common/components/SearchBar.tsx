import { useEffect, useState, type FormEvent } from "react";
import { useFilterStore } from "../../store/filter.store";
import { useLocation, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

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

    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  useEffect(() => {
    setLocalSearch(searchTermFromStore);
  }, [searchTermFromStore]);

  return (
    <form onSubmit={handleSubmit} role="search">
      <label className="input input-bordered w-full flex items-center gap-2 rounded-2xl bg-base-100">
        <Search size={18} className="text-base-content/50" />
        <input
          type="text"
          placeholder="Buscar productos…"
          className="grow"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          aria-label="Término de búsqueda"
        />
        <button type="submit" className="btn btn-ghost btn-sm rounded-xl" aria-label="Buscar">
          Buscar
        </button>
      </label>
    </form>
  );
};
