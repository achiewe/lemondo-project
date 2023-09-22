import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Info } from "../../type";

export interface InfoProps {
  info: Info[];
}

const initialState: InfoProps = {
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
