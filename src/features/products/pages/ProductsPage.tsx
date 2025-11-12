import FiltersSidebar from "../components/FiltersSidebar";
import Paginator from "../components/Paginator";
import ProductCard from "../components/ProductCard";
import SortBar from "../components/SortBar";
import { useFetchProducts } from "../hooks/useFetchProducts";

export default function ProductsPage() {
  const { data: response, isError, error } = useFetchProducts();

  if (isError) {
    console.log(error);
    return;
  }

  const products = response?.data || [];
  const meta = response?.meta || { page: 0, lastPage: 0, total: 0 };

  return (
    <div className="container mx-auto">
      <h1 className="text-neutral text-3xl font-bold mb-2  mt-10">
        Todos los productos
      </h1>

      <div className="flex justify-between items-center">
        <p className="text-secondary">{meta.total} productos encontrados</p>
        <SortBar />
      </div>
      <div className="divider"></div>

      <div className="flex">
        <aside className="w-1/4">
          <div className="sticky top-20 self-start">
            <FiltersSidebar />
          </div>
        </aside>

        <main className="w-3/4 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Paginator meta={meta} />
        </main>
      </div>
    </div>
  );
}
