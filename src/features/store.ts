import { configureStore } from "@reduxjs/toolkit";
import OpenBurgerSilce from "./OpenBurgerSilce";
import { BurgerProps } from "./OpenBurgerSilce";
import InfoArraySlice, { InfoProps } from "./InfoArraySlice";
import OpenFilterSlice, { FilterProps } from "./OpenFilterSlice";
import CalculateAddSlice, { calculateProps } from "./CalculateAddSlice";
import TakeNameSlice, { nameProps } from "./TakeNameSlice";

const store = configureStore({
  reducer: {
    openBurger: OpenBurgerSilce,
    info: InfoArraySlice,
    openFilter: OpenFilterSlice,
    calculate: CalculateAddSlice,
    text: TakeNameSlice,
  },
});

export type Rootstate = {
  openBurger: BurgerProps;
  info: InfoProps;
  openFilter: FilterProps;
  calculate: calculateProps;
  text: nameProps;
};

export default store;
