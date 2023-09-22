import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Info } from "../../type";

export interface infoProps {
  info: Info[];
}

const initialState: infoProps = {
  info: [],
};

const InfoArraySlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<Info[]>) => {
      state.info = action.payload;
    },
  },
});

export const { setInfo } = InfoArraySlice.actions;
export default InfoArraySlice.reducer;
