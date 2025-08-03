export function formatPrice(value: number, withSymbol: boolean = true): string {
  const formatted = new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  return withSymbol ? `$ ${formatted}` : formatted;
}
