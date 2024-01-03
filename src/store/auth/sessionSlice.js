/* eslint-disable no-empty-pattern */

import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  token: "",
  signedIn: false,
};

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSignInStatus: (state, action) => {
      state.signedIn = action.payload;
    },
  },
});

export const { setToken, setSignInStatus } = sessionSlice.actions;

export default sessionSlice.reducer;