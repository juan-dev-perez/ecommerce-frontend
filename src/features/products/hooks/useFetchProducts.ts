import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useFilterStore } from "../../../store/filter.store";
import { getProducts } from "../../../api/products";

export function useFetchProducts(limit?: number) {
  
  let filters = useFilterStore((state) => state.filters);
  let sortBy, sortOrder: string = '';

  if (limit) {
    filters = { ...filters, limit };
  }

  if(filters.sort){
    [sortBy, sortOrder] = filters.sort.split('-');
  }


  const cleanFilters = { ...filters, sortBy, sortOrder };

  delete cleanFilters.sort;

  (Object.keys(cleanFilters) as Array<keyof typeof cleanFilters>).forEach(
    (key) => {
      if (cleanFilters[key] === null || cleanFilters[key] === "") {
        delete cleanFilters[key];
      }
    }
  );

  const queryInfo = useQuery({
    queryKey: ["products", cleanFilters],
    queryFn: () => getProducts(cleanFilters),
    placeholderData: keepPreviousData,
  });

  return {
    ...queryInfo,
    filters,
  };
}
