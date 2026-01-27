import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types";
import { getProductBySlug } from "../../../api/products";

export function useProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!slug) return;

    const fetchdata = async () => {
      try {
        const data = await getProductBySlug(slug);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, [slug]);

  return { product };
}
