import { ProductCard } from "../components/ProductCard";
import { useProductsPaginated } from "../hooks/useProductsPaginated";

export default function ProductsPage() {
  const { products, meta, page, setPage, loading, error } = useProductsPaginated();

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-primary text-3xl font-bold mb-4 text-center mt-10">Todos los productos</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2 mb-10">
        {[...Array(meta.lastPage)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`btn btn-sm ${page === i + 1 ? "btn-primary" : "btn-outline"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
