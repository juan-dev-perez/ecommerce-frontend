import { useFilterStore } from "../../../store/filter.store";

interface params {
  meta: { page: number; lastPage: number };
}

export default function Paginator({ meta }: params) {
  const { page, lastPage } = meta;
  const updateFilter = useFilterStore((state) => state.updateFilter);

  const handleOnClic = (newNumPage: number): void => {
    updateFilter("page", newNumPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => handleOnClic(page - 1)}
        disabled={page === 1}
        className="btn btn-sm btn-outline rounded-2xl disabled:opacity-50"
      >
        « Anterior
      </button>

      {Array.from({ length: lastPage }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => handleOnClic(p)}
          className={`btn btn-sm rounded-2xl ${page === p ? "btn-primary" : "btn-outline"}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => handleOnClic(page + 1)}
        disabled={page === lastPage}
        className="btn btn-sm btn-outline rounded-2xl disabled:opacity-50"
      >
        Siguiente »
      </button>
    </div>
  );
}
