import FiltersSidebar from "../components/FiltersSidebar";
import { FilterURLSync } from "../components/FilterURLSync";
import Paginator from "../components/Paginator";
import ProductCard from "../components/ProductCard";
import SortBar from "../components/SortBar";
import { useFetchProducts } from "../hooks/useFetchProducts";

export default function ProductsPage() {
  const { data: response, isError, error } = useFetchProducts();

  if (isError) {
    console.log(error);
    return (
      <div className="rounded-3xl bg-base-100 border border-base-300 p-6">
        <h2 className="text-lg font-semibold">Error cargando productos</h2>
        <p className="text-sm text-base-content/70 mt-1">
          Revisá la consola para más detalles.
        </p>
      </div>
    );
  }

  const products = response?.data || [];
  const meta = response?.meta || { page: 0, lastPage: 0, total: 0 };

  return (
    <>
      <FilterURLSync />

      {/* Header */}
      <div className="rounded-3xl bg-base-100 border border-base-300 p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Productos
            </h1>
            <p className="text-sm text-base-content/70 mt-1">
              {meta.total} productos encontrados
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            <div className="md:hidden">
              {/* Botón para filtros en mobile (si tu FiltersSidebar no soporta drawer, igual deja el botón listo) */}
              <label htmlFor="filters-drawer" className="btn btn-outline btn-sm rounded-2xl">
                Filtros
              </label>
            </div>
            <SortBar />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        {/* Sidebar desktop */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <div className="rounded-3xl bg-base-100 border border-base-300 p-4">
              <div className="font-semibold mb-3">Filtros</div>
              <FiltersSidebar />
            </div>
          </div>
        </aside>

        {/* Content */}
        <section className="lg:col-span-9">
          {products.length === 0 ? (
            <div className="rounded-3xl bg-base-100 border border-base-300 p-10 text-center">
              <h3 className="text-lg font-semibold">No hay productos para mostrar</h3>
              <p className="text-sm text-base-content/70 mt-1">
                Probá ajustar filtros o búsqueda.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="mt-8">
                <Paginator meta={meta} />
              </div>
            </>
          )}
        </section>
      </div>

      {/* Drawer simple para mobile (opcional, no rompe nada aunque no lo uses) */}
      <input id="filters-drawer" type="checkbox" className="drawer-toggle hidden" />
    </>
  );
}
