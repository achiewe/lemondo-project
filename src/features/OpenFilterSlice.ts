import { createSlice } from "@reduxjs/toolkit";

export interface FilterProps {
  openFilter: boolean;
}

const initialState: FilterProps = {
  openFilter: false,
};

const OpentFilterSlice = createSlice({
  name: "openFilter",
  initialState,
  reducers: {
    setOpenFilter: (state) => {
      state.openFilter = !state.openFilter;
    },
  },
});

export const { setOpenFilter } = OpentFilterSlice.actions;
export default OpentFilterSlice.reducer;
