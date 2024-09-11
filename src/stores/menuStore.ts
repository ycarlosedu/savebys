import { create } from "zustand";

export enum MENU {
  SUCESS_DONATE = "sucessDonateOpened",
  RECEIVE_SUCESS_DONATION = "sucessReceiveDonationOpened",
  RECIPIENT_FORM = "recipientFormOpened",
  BUYER_FORM = "buyerFormOpened",
  SHEET = "sheetOpened"
}

const initialState = {
  [MENU.SUCESS_DONATE]: false,
  [MENU.RECEIVE_SUCESS_DONATION]: false,
  [MENU.RECIPIENT_FORM]: false,
  [MENU.BUYER_FORM]: false,
  [MENU.SHEET]: false
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
