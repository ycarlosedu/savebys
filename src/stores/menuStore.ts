import { create } from "zustand";

export enum MENU {
  SUCESS_DONATE = "sucessDonateOpened"
}

const initialState = {
  [MENU.SUCESS_DONATE]: false
};

type InitialState = typeof initialState;

type Store = InitialState & {
  toggleMenu: (menuName: MENU) => void;
  updateMenu: (menuName: MENU, value: boolean) => void;
};

const useMenuStore = create<Store>((set, get) => ({
  ...initialState,
  toggleMenu: (menuName) => {
    set({
      [menuName]: !get()[menuName]
    });
  },
  updateMenu: (menuName, value) => {
    set({
      [menuName]: value
    });
  },
  reset: () => {
    set(initialState);
  }
}));

export default useMenuStore;