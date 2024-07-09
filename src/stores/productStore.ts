import { Product } from "@/services/fecomerciors";
import { create } from "zustand";

import { getLocalStorage, LOCAL_STORAGE, setLocalStorage } from "@/constants";

const initialState = {
  products: getLocalStorage(LOCAL_STORAGE.PRODUCTS, []) as Product[]
};

type InitialState = typeof initialState;

type Store = InitialState & {
  addProduct: (product: Product) => void;
  removeProduct: (id: Product["id"]) => void;
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
  reset: () => {
    set(initialState);
  }
}));

export default useProductStore;
