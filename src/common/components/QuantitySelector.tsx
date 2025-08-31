type Props = {
  cantidad: number;
  productStock: number;
  onCantidadChange: (nuevaCantidad: number) => void;
};

export default function QuantitySelector({
  cantidad,
  productStock,
  onCantidadChange,
}: Props) {
  const handleDecrement = () => {
    if (cantidad > 1) {
      onCantidadChange(cantidad - 1);
    }
  };

  const handleIncrement = () => {
    if (cantidad < productStock) {
      onCantidadChange(cantidad + 1);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex gap-2 items-center rounded-lg border-borde border justify-between w-32">
        <button
          onClick={handleDecrement}
          className={`btn btn-md btn-ghost text-xl ${
            cantidad <= 1 && "btn-disabled"
          }`}
          disabled={cantidad <= 1}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={handleIncrement}
          className={`btn btn-md btn-ghost text-xl ${
            productStock === cantidad && "btn-disabled"
          }`}
          disabled={cantidad === productStock}
        >
          +
        </button>
      </div>
    </div>
  );
}
