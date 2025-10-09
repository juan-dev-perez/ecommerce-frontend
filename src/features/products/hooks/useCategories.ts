import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../../../api/categories';

export const useCategories = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categories'], 
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 5, 
  });

  return {
    categories: data, 
    isLoading,
    isError,
    error,
  };
};
