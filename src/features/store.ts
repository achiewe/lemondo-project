import { configureStore } from "@reduxjs/toolkit";
import OpenBurgerSilce from "./OpenBurgerSilce";
import { BurgerProps } from "./OpenBurgerSilce";

const store = configureStore({
  reducer: {
    openBurger: OpenBurgerSilce,
  },
});

export type Rootstate = {
  openBurger: BurgerProps;
};

export default store;
