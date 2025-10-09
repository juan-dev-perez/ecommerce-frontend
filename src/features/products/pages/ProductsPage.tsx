import FiltersSidebar from "../components/FiltersSidebar";
import Paginator from "../components/Paginator";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";

export default function ProductsPage() {
  const { data: response, isError, error } = useFetchProducts();

  if (isError) {
    console.log(error);
    return;
  }

  const products = response?.data || [];
  const meta = response?.meta || {page:0, lastPage: 0};

  return (
    <div className="container mx-auto">
      {/* Encabezado H1 */}
      <h1 className="text-primary text-3xl font-bold mb-4 text-center mt-10">
        Todos los productos
      </h1>

      <FiltersSidebar/>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Paginator meta={meta} />
    </div>
  );
}

