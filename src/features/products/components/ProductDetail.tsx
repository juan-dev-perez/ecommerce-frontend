import { useState } from "react";
import { useCart } from "../../../store/cart.store";
import { formatPrice } from "../../../utils/currencyFormat";
import type { Product } from "../types";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.url ?? "",
      },
      cantidad
    );

    // resetear cantidad
    setCantidad(1);

    // mostrar el toast
    setShowToast(true);

    // ocultarlo a los 2.5s
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <img
        src={product.images?.[0]?.url || "https://placehold.co/600x400"}
        alt={product.name}
        className="w-full h-96 object-contain mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-bold text-green-600 mb-4">
        {formatPrice(product.price)}
      </p>

      {/* selectro de cantidad */}
      <div className="flex items-center">
        <div className="flex gap-2 items-center rounded-lg border-borde border justify-between w-32">
          <button
            onClick={() => setCantidad(cantidad - 1)}
            className={`btn btn-md btn-ghost text-xl ${
              cantidad <= 1 && "btn-disabled"
            }`}
            disabled={cantidad <= 1}
          >
            -
          </button>
          <span>{cantidad}</span>
          <button
            onClick={() => setCantidad(cantidad + 1)}
            className={`btn btn-md btn-ghost text-xl ${
              product.stock === cantidad && "btn-disabled"
            }`}
            disabled={cantidad === product.stock}
          >
            +
          </button>
        </div>
      </div>

      {/* boton agregar al carrito */}
      <button
        className="btn btn-primary mt-3"
        onClick={handleAdd}
      >
        <span className="relative -top-0.5">Agregar al carrito</span>
      </button>

      {/* toast */}
      {showToast && (
        <div className="toast toast-top toast-end top-20">
          <div className="alert alert-success alert-soft">
            <span>Producto agregado al carrito ✅</span>
          </div>
        </div>
      )}
    </div>
  );
}
