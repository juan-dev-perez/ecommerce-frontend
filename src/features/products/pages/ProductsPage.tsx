import { useFetchProducts } from "../hooks/useFetchProducts";
import { ProductCard } from "../components/ProductCard";

export default function ProductsPage() {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
