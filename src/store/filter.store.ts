import { create } from 'zustand';

export type SortOptions = 'price-asc' | 'price-desc' | 'createdAt-asc' | 'createdAt-desc' | 'name-asc' | 'name-desc';

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
  updateFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
}

const initialState: FilterState = {
  page: 1,
  limit: 12,
  search: '',
  category: null,
  brand: null,
  priceMin: '',
  priceMax: '',
  sort: "createdAt-desc",
};

export const useFilterStore = create<FilterStore>((set) => ({
  // El estado
  filters: initialState,

  // La acción para actualizar un filtro
  updateFilter: (key, value) => set((state) => {
    const newFilters = {
      ...state.filters,
      [key]: value,
    };

    // Si el filtro que se cambia NO es la página, reiniciamos a la página 1.
    if (key !== 'page') {
      newFilters.page = 1;
    }

    return { filters: newFilters };
  }),

  // Acción para resetear todos los filtros
  resetFilters: () => set({ filters: initialState }),
}));
