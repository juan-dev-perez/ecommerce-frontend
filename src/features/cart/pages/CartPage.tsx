import { Link } from "react-router-dom";
import { useCart } from "../../../store/cart.store";
import { formatPrice } from "../../../utils/currencyFormat";
import QuantitySelector from "../../../components/QuantitySelector";

export default function CartPage() {
  const { items, removeFromCart, clearCart, getTotalItems, getTotalPrice, updateProductQuantityCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Tu carrito está vacío 🛒</h2>
        <Link to="/" className="btn btn-primary mt-6">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (productId: number, nuevaCantidad: number) => {
    updateProductQuantityCart(productId, nuevaCantidad);
  };

console.log(items);


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Tu carrito</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-md">
            <div className="card-body flex flex-col md:flex-row gap-4 items-center">
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
              </Link>

              <div className="flex-1">
                <Link
                  to={`/products/${item.id}`}
                  className="text-lg font-semibold"
                >
                  {item.name}
                </Link>
                <p className="text-sm text-gray-500">
                  Cantidad: {item.quantity}
                </p>
                <p className="text-sm">
                  Precio unitario: {formatPrice(item.price)}
                </p>
                <p className="text-sm font-medium">
                  Subtotal: {formatPrice(item.price * item.quantity)}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <QuantitySelector cantidad={item.quantity} productStock={item.stock} onCantidadChange={(nuevaCantidad) => handleQuantityChange(item.id,nuevaCantidad )} />
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">
            Total: {formatPrice(getTotalPrice())}
          </p>
          <p className="text-sm text-gray-500">{getTotalItems()} ítems</p>
        </div>
        <div className="flex gap-3">
          <button onClick={clearCart} className="btn btn-outline btn-error">
            Vaciar carrito
          </button>
          <button className="btn btn-primary">Proceder al pago</button>
        </div>
      </div>
    </div>
  );
}
