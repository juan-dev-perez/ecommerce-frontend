import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/currencyFormat";
import type { Product } from "../types";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const img = product.images?.[0]?.url || "https://placehold.co/600x400";
  const desc = (product.description || "").trim();

  return (
    <div className="group rounded-3xl bg-base-100 border border-base-300 overflow-hidden hover:shadow-sm transition">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] bg-base-200 overflow-hidden">
          <img
            src={img}
            alt={`Imagen del producto "${product.name}"`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition" />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${product.slug}`} className="block">
          <h2 className="font-semibold leading-snug line-clamp-2">
            {product.name}
          </h2>
        </Link>

        {desc ? (
          <p className="mt-1 text-sm text-base-content/70 line-clamp-2">
            {desc}
          </p>
        ) : (
          <p className="mt-1 text-sm text-base-content/50">
            Sin descripción
          </p>
        )}

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <div className="text-xs text-base-content/60">Precio</div>
            <div className="text-xl font-bold tracking-tight">
              {formatPrice(product.price)}
            </div>
          </div>

          <Link
            to={`/products/${product.slug}`}
            className="btn btn-primary btn-sm rounded-2xl"
          >
            Ver
          </Link>
        </div>
      </div>
    </div>
  );
}
