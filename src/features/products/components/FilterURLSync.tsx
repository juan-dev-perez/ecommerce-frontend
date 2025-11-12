import { useSearchParams } from "react-router-dom";
import { initialState, useFilterStore } from "../../../store/filter.store";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

export const FilterURLSync = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useFilterStore(useShallow((state) => state.filters));
  const updateFilter = useFilterStore((state) => state.updateFilter);

  // Sincronizar el Estado de Zustand -> hacia la URL
  useEffect(() => {
    const newParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== initialState[key as keyof typeof initialState]) {
        newParams.set(key, String(value));
      }
    });

    setSearchParams(newParams, { replace: true });
  }, [filters, setSearchParams]);

  // EFECTO 2: Sincronizar la URL -> hacia el Estado de Zustand
  useEffect(() => {
    searchParams.forEach((value, key) => {
      if (key in initialState) {
        const parsedValue = !isNaN(Number(value)) ? Number(value) : value;
        updateFilter(key as any, parsedValue);
      }
    });
  }, []);

  return null;
};
