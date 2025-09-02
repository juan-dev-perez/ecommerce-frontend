import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/currencyFormat";
import type { Product } from "../types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="card bg-base-100 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden">
      <Link to={`/products/${product.id}`} className="block">
          <img
            src={product.images?.[0]?.url || "https://placehold.co/600x400"}
            alt={`Imagen del producto "${product.name}"`}
            className="h-60 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
      </Link>

      <div className="card-body">
        <Link to={`/products/${product.id}`}>
          <h2 className="card-title">{product.name}</h2>
        </Link>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex justify-between items-center mt-5">
          <p className="text-2xl font-bold">{formatPrice(product.price)}</p>
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            Ver Producto
          </Link>
        </div>
      </div>
    </div>
  );
}
