import { create } from 'zustand';

export interface FilterState {
  page: number;
  limit: number;
  search: string;
  category: string | null;
  brand: string | null;
  priceMin: number | string;
  priceMax: number | string;
  sortBy: 'price' | 'createdAt' | 'name';
  sortOrder: 'asc' | 'desc';
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
  sortBy: "createdAt",
  sortOrder: "desc",
};

export const useFilterStore = create<FilterStore>((set) => ({
  // El estado
  filters: initialState,

  // La acción para actualizar un filtro
  updateFilter: (key, value) => set((state) => ({
    filters: {
      ...state.filters,
      [key]: value,
      // Reiniciar la página a 1 si el filtro no es la propia paginación
      page: key !== 'page' ? 1 : (value as number) ,
    }
  })),

  // Acción para resetear todos los filtros
  resetFilters: () => set({ filters: initialState }),
}));
