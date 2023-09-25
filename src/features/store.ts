import { configureStore } from "@reduxjs/toolkit";
import OpenBurgerSlice from "./OpenBurgerSlice";
import { BurgerProps } from "./OpenBurgerSlice";
import InfoArraySlice, { InfoProps } from "./InfoArraySlice";
import OpenFilterSlice, { FilterProps } from "./OpenFilterSlice";
import CalculateAddSlice, { calculateProps } from "./CalculateAddSlice";
import TakeNameSlice, { nameProps } from "./TakeNameSlice";
import FilteredInfoSlice, { FilteredInfoProps } from "./FilteredInfoSlice";

const store = configureStore({
  reducer: {
    openBurger: OpenBurgerSlice,
    info: InfoArraySlice,
    openFilter: OpenFilterSlice,
    calculate: CalculateAddSlice,
    text: TakeNameSlice,
    filtered: FilteredInfoSlice,
  },
});

export type Rootstate = {
  openBurger: BurgerProps;
  info: InfoProps;
  openFilter: FilterProps;
  calculate: calculateProps;
  text: nameProps;
  filtered: FilteredInfoProps;
};

export default store;
