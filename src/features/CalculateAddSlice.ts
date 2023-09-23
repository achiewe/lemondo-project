import { createSlice } from "@reduxjs/toolkit";

export interface calculateProps {
  calculate: number;
}

const initialState: calculateProps = {
  calculate: 0,
};

const CalculateAddSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    setCalculate: (state) => {
      state.calculate = state.calculate + 1;
    },
  },
});

export const { setCalculate } = CalculateAddSlice.actions;
export default CalculateAddSlice.reducer;
