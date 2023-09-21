import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BurgerProps {
  openBurger: boolean;
}

const initialState: BurgerProps = {
  openBurger: false,
};

const OpenBurgerSlice = createSlice({
  name: "openBurger",
  initialState,
  reducers: {
    setOpenBurger: (state) => {
      state.openBurger = !state.openBurger;
    },
  },
});

export const { setOpenBurger } = OpenBurgerSlice.actions;
export default OpenBurgerSlice.reducer;
