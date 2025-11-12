import { create } from "zustand";

export type SortOptions =
  | "price-asc"
  | "price-desc"
  | "createdAt-asc"
  | "createdAt-desc"
  | "name-asc"
  | "name-desc";

export interface FilterState {
  page: number;
  limit: number;
  search: string;
  category: string | null;
  brand: string | null;
  priceMin: number | string;
  priceMax: number | string;
  sort?: SortOptions;
}

interface FilterStore {
  filters: FilterState;
  updateFilter: <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => void;
  removeFilter: <K extends keyof FilterState>(key: K) => void;
  resetFilters: () => void;
}

export const initialState: FilterState = {
  page: 1,
  limit: 12,
  search: "",
  category: null,
  brand: null,
  priceMin: "",
  priceMax: "",
  sort: "createdAt-desc",
};

export const useFilterStore = create<FilterStore>((set) => ({
  // El estado
  filters: initialState,

  // La acción para actualizar un filtro
  updateFilter: (key, value) =>
    set((state) => {
      const newFilters = {
        ...state.filters,
        [key]: value,
      };

      // Si el filtro que se cambia NO es la página, reiniciamos a la página 1.
      if (key !== "page") {
        newFilters.page = 1;
      }

      return { filters: newFilters };
    }),
  removeFilter: (key: keyof FilterState) =>
    set((state) => {
      // No cambia la pagia, ni el ordenamiento
      if (["page", "limit", "sort"].includes(key)) {
        return state;
      }

      return {
        filters: {
          ...state.filters,
          [key]: initialState[key],
          page: 1,
        },
      };
    }),

  resetFilters: () => set({ filters: initialState }),
}));
