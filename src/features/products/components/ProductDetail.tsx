import { formatPrice } from "../../../utils/currencyFormat";
import type { Product } from "../types";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
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
        {" "}
        {formatPrice(product.price)}
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Agregar al carrito
      </button>
    </div>
  );
}
