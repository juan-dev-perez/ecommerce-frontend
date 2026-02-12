import { Link } from "react-router-dom";
import { useCart } from "../../../store/cart.store";
import { formatPrice } from "../../../utils/currencyFormat";
import QuantitySelector from "../../../common/components/QuantitySelector";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
    updateProductQuantityCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-3xl bg-base-100 border border-base-300 p-10 text-center">
        <div className="text-4xl">🛒</div>
        <h2 className="mt-3 text-2xl font-bold">Tu carrito está vacío</h2>
        <p className="text-sm text-base-content/70 mt-1">
          Explorá productos y agregá lo que te guste.
        </p>
        <Link to="/products" className="btn btn-primary mt-6 rounded-2xl">
          Ver productos
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (productId: number, nuevaCantidad: number) => {
    updateProductQuantityCart(productId, nuevaCantidad);
  };

  const total = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-base-100 border border-base-300 p-5 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Carrito</h2>
        <p className="text-sm text-base-content/70 mt-1">
          {totalItems} ítems · Total {formatPrice(total)}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Items */}
        <section className="lg:col-span-8 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="rounded-3xl bg-base-100 border border-base-300 p-4 md:p-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/products/${item.slug}`} className="shrink-0">
                  <img
                    src={item.image || "https://placehold.co/300x300"}
                    alt={item.name}
                    className="w-full sm:w-28 h-48 sm:h-28 object-cover rounded-2xl bg-base-200"
                    loading="lazy"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/products/${item.slug}`}
                    className="font-semibold text-lg link link-hover"
                  >
                    {item.name}
                  </Link>

                  <div className="mt-1 text-sm text-base-content/70">
                    Precio unitario: <span className="font-medium text-base-content">{formatPrice(item.price)}</span>
                  </div>

                  <div className="mt-1 text-sm text-base-content/70">
                    Subtotal: <span className="font-semibold text-base-content">{formatPrice(item.price * item.quantity)}</span>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                    <QuantitySelector
                      cantidad={item.quantity}
                      productStock={item.stock}
                      onCantidadChange={(nuevaCantidad) =>
                        handleQuantityChange(item.id, nuevaCantidad)
                      }
                    />

                    <button
                      className="btn btn-outline btn-error btn-sm rounded-2xl"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Summary */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-3xl bg-base-100 border border-base-300 p-5 md:p-6">
            <h3 className="text-lg font-bold">Resumen</h3>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-base-content/70">Ítems</span>
                <span className="font-medium">{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-content/70">Subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-content/70">Envío</span>
                <span className="font-medium">A calcular</span>
              </div>
              <div className="divider my-2" />
              <div className="flex justify-between text-base">
                <span className="font-semibold">Total</span>
                <span className="font-bold">{formatPrice(total)}</span>
              </div>
            </div>

            <button className="btn btn-primary w-full mt-5 rounded-2xl">
              Proceder al pago
            </button>

            <button onClick={clearCart} className="btn btn-ghost w-full mt-2 rounded-2xl text-error">
              Vaciar carrito
            </button>

            <Link to="/products" className="btn btn-outline w-full mt-3 rounded-2xl">
              Seguir comprando
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
