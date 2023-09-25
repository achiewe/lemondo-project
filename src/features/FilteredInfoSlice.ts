import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Info } from "../../type";

export interface FilteredInfoProps {
  filtered: Info[];
}

const initialState: FilteredInfoProps = {
  filtered: [],
};

const FilteredInfoSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    setFilteredData: (state, action: PayloadAction<Info[]>) => {
      state.filtered = action.payload;
    },
  },
});

export const { setFilteredData } = FilteredInfoSlice.actions;
export default FilteredInfoSlice.reducer;
