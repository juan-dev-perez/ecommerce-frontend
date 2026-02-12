import { useEffect, useState } from "react";
import { useCart } from "../../../store/cart.store";
import { formatPrice } from "../../../utils/currencyFormat";
import type { Product } from "../types";
import QuantitySelector from "../../../common/components/QuantitySelector";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const img = product.images?.[0]?.url || "https://placehold.co/900x700";
  const desc = (product.description || "").trim();

  const handleQuantityChange = (nuevaCantidad: number) => setCantidad(nuevaCantidad);

  const handleAdd = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.images?.[0]?.url ?? "",
        stock: product.stock,
      },
      cantidad
    );

    setCantidad(1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  // opcional: reset cuando cambia de producto
  useEffect(() => setCantidad(1), [product.id]);

  return (
    <div className="space-y-5">
      {/* Breadcrumb simple */}
      <div className="text-sm text-base-content/70">
        <Link to="/products" className="link link-hover">Productos</Link>
        <span className="mx-2">/</span>
        <span className="text-base-content">{product.name}</span>
      </div>

      <div className="rounded-3xl bg-base-100 border border-base-300 overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Media */}
          <div className="bg-base-200">
            <div className="p-4 md:p-6">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-base-100 border border-base-300">
                <img
                  src={img}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-5 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              {product.name}
            </h1>

            {desc ? (
              <p className="mt-3 text-sm md:text-base text-base-content/70">
                {desc}
              </p>
            ) : (
              <p className="mt-3 text-sm md:text-base text-base-content/50">
                Sin descripción
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-end gap-6">
              <div>
                <div className="text-xs text-base-content/60">Precio</div>
                <div className="text-2xl font-bold text-primary">
                  {formatPrice(product.price)}
                </div>
              </div>

              <div>
                <div className="text-xs text-base-content/60">Stock</div>
                <div className="badge badge-outline">
                  {product.stock > 0 ? `${product.stock} disponibles` : "Sin stock"}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-base-200 p-4">
              <div className="text-sm font-semibold mb-3">Cantidad</div>
              <QuantitySelector
                cantidad={cantidad}
                productStock={product.stock}
                onCantidadChange={handleQuantityChange}
              />

              <button
                className="btn btn-primary mt-4 w-full rounded-2xl"
                onClick={handleAdd}
                disabled={product.stock <= 0}
              >
                Agregar al carrito
              </button>

              <div className="mt-3 text-xs text-base-content/60">
                Tip: en tu portfolio, este flujo (slug → carrito) suma mucho.
              </div>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-top toast-end top-24">
          <div className="alert alert-success">
            <span>Producto agregado al carrito ✅</span>
          </div>
        </div>
      )}
    </div>
  );
}
