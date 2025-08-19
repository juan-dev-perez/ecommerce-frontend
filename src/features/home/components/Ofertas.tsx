import { Link } from "react-router-dom";
import ProductCard from "../../products/components/ProductCard";
import { useFetchProducts } from "../../products/hooks/useFetchProducts";

export default function Ofertas() {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-primary text-3xl font-bold mb-4 text-center">
        Productos en oferta
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="my-15 flex justify-center">
        <Link to={'/products'} className="btn btn-neutral btn-wide hover:bg-white hover:text-neutral">
          Ver todas las ofertas
        </Link>
      </div>
    </div>
  );
}
