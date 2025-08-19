import ProductDetail from "../components/ProductDetail";
import { useProductDetail } from "../hooks/useProductDetail";

export default function ProductDetailPage() {

    const { product } = useProductDetail();

  return (
    <>
    { !product ? 
      <h1>Producto no encontrado</h1> 
    : 
      <ProductDetail product={product} /> }
    </>
  )
}
