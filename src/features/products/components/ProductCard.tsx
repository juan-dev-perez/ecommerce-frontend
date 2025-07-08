import { useCart } from "../../../store/cart.store";
import type { Product } from "../types";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  return (
    <div className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-all">
      <figure>
        <img
          src={product.images?.[0]?.url || "https://placehold.co/600x400"}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-semibold text-primary">
            ${product.price}
          </span>
          <button
            className="btn btn-sm btn-primary"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images?.[0]?.url ?? "",
              })
            }
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
