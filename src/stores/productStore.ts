import { Product } from "@/services/fecomerciors";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { SESSION_STORAGE } from "@/constants";

const initialState = {
  products: [] as Product[],
  currentPage: 1,
  totalPages: 1,
  filters: {
    category: "Todos"
  },
  animateBagButton: false
};

type Filter = keyof typeof initialState.filters;

type InitialState = typeof initialState;

type Store = InitialState & {
  addProduct: (product: Product) => void;
  removeProduct: (id: Product["id"]) => void;
  increaseProductQuantity: (id: Product["id"]) => void;
  decreaseProductQuantity: (id: Product["id"]) => void;
  goToPage: (page: number) => void;
  updateTotalPages: (pages: number) => void;
  updateFilter: (filter: Filter, value: string) => void;
  resetFilters: () => void;
  reset: () => void;
  animateBagButton: boolean;
  setAnimateBagButton: (value: boolean) => void;
};

const useProductStore = create<Store>()(
  persist(
    (set, get) => ({
      ...initialState,
      addProduct: (product) => {
        const newProducts = [
          ...get().products,
          { ...product, quantitySelected: 1 }
        ];
        set({
          products: newProducts
        });
      },
      removeProduct: (id) => {
        const newProducts = get().products.filter(
          (product) => product.id !== id
        );
        set({
          products: newProducts
        });
      },
      increaseProductQuantity: (id) => {
        const newProducts = get().products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantitySelected: (product.quantitySelected || 1) + 1
            };
          }
          return product;
        });
        set({
          products: newProducts
        });
      },
      decreaseProductQuantity: (id) => {
        const newProducts = get().products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantitySelected: (product.quantitySelected || 2) - 1
            };
          }
          return product;
        });
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
          currentPage: initialState.currentPage,
          filters: newFilters
        });
      },
      resetFilters: () => {
        set({
          currentPage: initialState.currentPage,
          filters: initialState.filters
        });
      },
      reset: () => {
        set(initialState);
      },
      setAnimateBagButton(value) {
        set({ animateBagButton: value });
      }
    }),
    {
      name: SESSION_STORAGE.PRODUCTS,
      storage: createJSONStorage(() => sessionStorage),
      skipHydration: true
    }
  )
);

export default useProductStore;
