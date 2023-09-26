import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ErrorMessageProps {
  ErrorMessage: boolean;
}

const initialState: ErrorMessageProps = {
  ErrorMessage: false,
};

const ErrorMessageSlice = createSlice({
  name: "ErrorMesssage",
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<boolean>) => {
      state.ErrorMessage = action.payload;
    },
  },
});

export const { setErrorMessage } = ErrorMessageSlice.actions;
export default ErrorMessageSlice.reducer;
