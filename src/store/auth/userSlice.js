
import { createSlice } from "@reduxjs/toolkit"





const initialState = {
    fullName: "",
    email: "",
    role: "user",
  };
  
  export const userSlice = createSlice({
    name: "auth/user",
    initialState,
    reducers: {
      setFullName: (state, action) => {
        state.fullName = action.payload;
      },
      setEmail: (state, action) => {
        state.email = action.payload;
      },
      setRole: (state, action) => {
        state.role = action.payload;
      },
    },
  });
  
  export const { setFullName, setEmail, setRole } = userSlice.actions;
  
  export default userSlice.reducer;


//  const initilState = {
//     fullName:"",
//     email: "",
//     role: "user"
// }

// export const  userSlice = createSlice({
//     name: "auth/user",
//     initilState,
//     reducers: {}
// }) 

// export const {} = userSlice.actions

// export default userSlice.reducer