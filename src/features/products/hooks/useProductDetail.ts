import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types";
import { getProductById } from "../../../api/products";

export function useProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    // evaluar si es un numero el que recibo por el param
    const parsedId = Number(id);
    if (!id || isNaN(parsedId)) {
      console.warn("ID inválido:", id);
      return;
    }

    const fetchdata = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, [id]);

  return { product };
}
