import { configureStore } from "@reduxjs/toolkit";
import OpenBurgerSilce from "./OpenBurgerSilce";
import { BurgerProps } from "./OpenBurgerSilce";
import InfoArraySlice, { infoProps } from "./InfoArraySlice";

const store = configureStore({
  reducer: {
    openBurger: OpenBurgerSilce,
    info: InfoArraySlice,
  },
});

export type Rootstate = {
  openBurger: BurgerProps;
  info: infoProps;
};

export default store;
