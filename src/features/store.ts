import { configureStore } from "@reduxjs/toolkit";
import OpenBurgerSilce from "./OpenBurgerSilce";
import { BurgerProps } from "./OpenBurgerSilce";
import InfoArraySlice, { InfoProps } from "./InfoArraySlice";
import OpenFilterSlice, { FilterProps } from "./OpenFilterSlice";

const store = configureStore({
  reducer: {
    openBurger: OpenBurgerSilce,
    info: InfoArraySlice,
    openFilter: OpenFilterSlice,
  },
});

export type Rootstate = {
  openBurger: BurgerProps;
  info: InfoProps;
  openFilter: FilterProps;
};

export default store;
