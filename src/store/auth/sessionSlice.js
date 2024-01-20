/* eslint-disable no-empty-pattern */

import { createSlice } from "@reduxjs/toolkit";

const accessTokenBook = localStorage.getItem('accessTokenBook')

const initialState = {
  token: accessTokenBook || '',
  signedIn: accessTokenBook ? true : false
};

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState,

  reducers:  {
    setSignInSuccess: (state, action) => {
        state.signedIn = true
        state.token = action.payload
        localStorage.setItem('accessTokenBook', action.payload)
    },
    setSignOutSuccess: (state) => {
        state.signedIn = false
        state.token = ''
    },
    //
}
});

export const { setSignInSuccess, setSignOutSuccess } = sessionSlice.actions;





export default sessionSlice.reducer;