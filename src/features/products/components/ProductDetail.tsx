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
      <div className="flex items-center">
        <div className="flex gap-3 items-center rounded-lg border-borde border">
          <button 
          onClick={() => setCantidad(cantidad - 1)}
          className="btn btn-md btn-ghost text-xl text-slate-500">
            -
          </button>
          <span>{cantidad}</span>
          <button 
          onClick={() => setCantidad(cantidad + 1)}
          className="btn btn-md btn-ghost text-xl text-slate-500">
            +
          </button>
        </div>
      </div>
      <button
        className="btn btn-primary mt-3"
        onClick={() =>
          addToCart(
            {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.images?.[0]?.url ?? "",
            },
            cantidad
          )
        }
      >
        <span className="relative -top-0.5">Agregar al carrito</span>
      </button>
    </div>
  );
}
