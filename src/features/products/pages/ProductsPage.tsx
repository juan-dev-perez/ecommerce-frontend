import ProductCard from "../components/ProductCard";
import { useProductsPaginated } from "../hooks/useProductsPaginated";

export default function ProductsPage() {
  const { products, meta, page, setPage, error } =
    useProductsPaginated();

  if (error) return <div className="text-center text-red-500">{error}</div>;

  const handleOnClic = (newNumPage: number):void => {
    setPage(newNumPage);
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-primary text-3xl font-bold mb-4 text-center mt-10">
        Todos los productos
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2 mb-10">
        <button
          onClick={() => handleOnClic(page - 1)}
          disabled={page === 1}
          className={`btn btn-sm ${
            page === 1 ? "btn-disabled" : "btn-outline"
          }`}
        >
          « Anterior
        </button>
        {[...Array(meta.lastPage)].map((_, i) => (
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
          disabled={page === meta.lastPage}
          className={`btn btn-sm ${
            page === meta.lastPage ? "btn-disabled" : "btn-outline"
          }`}
        >
          Siguiente »
        </button>
      </div>
    </div>
  );
}
