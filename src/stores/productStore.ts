import { Product } from "@/services/fecomerciors";
import { create } from "zustand";

import { getLocalStorage, LOCAL_STORAGE, setLocalStorage } from "@/constants";

const initialState = {
  products: getLocalStorage(LOCAL_STORAGE.PRODUCTS, []) as Product[],
  currentPage: 1,
  totalPages: 1,
  filters: {
    category: "Todos"
  }
};

type Filter = keyof typeof initialState.filters;

type InitialState = typeof initialState;

type Store = InitialState & {
  addProduct: (product: Product) => void;
  removeProduct: (id: Product["id"]) => void;
  goToPage: (page: number) => void;
  updateTotalPages: (pages: number) => void;
  updateFilter: (filter: Filter, value: string) => void;
  resetFilters: () => void;
  reset: () => void;
};

const useProductStore = create<Store>((set, get) => ({
  ...initialState,
  addProduct: (product) => {
    const newProducts = [...get().products, product];
    setLocalStorage(LOCAL_STORAGE.PRODUCTS, newProducts);
    set({
      products: newProducts
    });
  },
  removeProduct: (id) => {
    const newProducts = get().products.filter((product) => product.id !== id);
    setLocalStorage(LOCAL_STORAGE.PRODUCTS, newProducts);
    set({
      products: newProducts
    });
  },
  goToPage: (page) => {
    set({
      currentPage: page
    });
  },
  updateTotalPages: (pages) => {
    set({
      totalPages: pages
    });
  },
  updateFilter: (filter, value) => {
    const newFilters = {
      ...get().filters,
      [filter]: value
    };
    set({
      filters: newFilters
    });
  },
  resetFilters: () => {
    set({
      filters: initialState.filters
    });
  },
  reset: () => {
    set(initialState);
  }
}));

export default useProductStore;
