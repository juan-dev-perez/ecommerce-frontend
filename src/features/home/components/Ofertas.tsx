import { Link } from "react-router-dom";
import ProductCard from "../../products/components/ProductCard";
import { useFetchProducts } from "../../products/hooks/useFetchProducts";
// import { useFilterStore } from "../../../store/filter.store";

export default function Ofertas() {
  // const resetFilters = useFilterStore(state => state.resetFilters);
  // resetFilters();
  const limit:number = 4;
  const { data:response, isLoading, error, isError } = useFetchProducts(limit);

  if (isLoading) return <div className="text-center">Cargando productos...</div>;
  if (isError) return <div className="text-center text-red-500">{`${error}`}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-primary text-3xl font-bold mb-4 text-center">
        Productos en oferta
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {response?.data.map((product) => (
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
