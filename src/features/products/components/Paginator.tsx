import { useFilterStore } from "../../../store/filter.store";

interface params {
  meta: {
    page: number;
    lastPage: number;
  };
}

export default function Paginator({ meta }: params) {
  const { page, lastPage } = meta;

  const updateFilter = useFilterStore((state) => state.updateFilter);

  const handleOnClic = (newNumPage: number): void => {
    updateFilter("page", newNumPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-6 gap-2 mb-10">
      <button
        onClick={() => handleOnClic(page - 1)}
        disabled={page === 1}
        className={`btn btn-sm ${page === 1 ? "btn-disabled" : "btn-outline"}`}
      >
        « Anterior
      </button>
      {[...Array(lastPage)].map((_, i) => (
        <button
          key={i}
          onClick={() => handleOnClic(i + 1)}
          className={`btn btn-sm ${
            page === i + 1 ? "btn-primary" : "btn-outline"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => handleOnClic(page + 1)}
        disabled={page === lastPage}
        className={`btn btn-sm ${
          page === lastPage ? "btn-disabled" : "btn-outline"
        }`}
      >
        Siguiente »
      </button>
    </div>
  );
}
