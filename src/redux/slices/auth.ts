import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isLoggined: boolean;
}

const initialState: AuthState = {
  isLoggined: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggined: (state, action) => {
      state.isLoggined = action.payload;
    },
  },
});

export const { setIsLoggined } = authSlice.actions;

export default authSlice.reducer;
