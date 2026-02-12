import { Link } from "react-router-dom";
import ProductCard from "../../products/components/ProductCard";
import { useOfferProducts } from "../hooks/useOfferProducts";

export default function Ofertas() {
  const limit: number = 4;
  const { offerProducts, isLoading, error, isError } = useOfferProducts(limit);

  if (isLoading) {
    return (
      <section className="rounded-3xl bg-base-100 border border-base-300 p-6 text-center">
        <span className="loading loading-spinner" />
        <div className="mt-2 text-sm text-base-content/70">Cargando productos…</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="rounded-3xl bg-base-100 border border-base-300 p-6">
        <h3 className="font-semibold">No se pudieron cargar las ofertas</h3>
        <p className="text-sm text-base-content/70 mt-1">{`${error}`}</p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Ofertas</h2>
          <p className="text-sm text-base-content/70 mt-1">
            Productos destacados con buen precio.
          </p>
        </div>

        <Link to="/products" className="btn btn-ghost btn-sm rounded-2xl">
          Ver todo →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {offerProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pt-4 flex justify-center">
        <Link to="/products" className="btn btn-outline rounded-2xl">
          Ver todas las ofertas
        </Link>
      </div>
    </section>
  );
}
