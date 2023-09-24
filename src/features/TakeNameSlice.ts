import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface nameProps {
  text: string;
}

const initialState: nameProps = {
  text: " ",
};

const TakeNameSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { setText } = TakeNameSlice.actions;
export default TakeNameSlice.reducer;
