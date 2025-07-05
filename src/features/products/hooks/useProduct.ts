// import { useEffect, useState } from 'react';
// import type { Product } from '../types';
// import { getProductById } from '../../../api/products';

// export function useProduct(id: string) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return;

//     const fetchProduct = async () => {
//       try {
//         const data = await getProductById(id);
//         setProduct(data);
//       } catch (err) {
//         console.error('[useProduct]', err);
//         setError('No se pudo cargar el producto.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   return { product, loading, error };
// }
