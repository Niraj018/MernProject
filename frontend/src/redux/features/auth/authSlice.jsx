// import { createSlice } from "@reduxjs/toolkit";

// const name = JSON.parse(localstorage.getItem("name"))

// const initialState = {
//   isLoggedIn: false,
//   name: name ? name : "",
//   user: {
//     name: "",
//     email: "",
//     phone: "",
//     description: "",
//     photo: "",
//   },
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     SET_LOGIN(state,action){
//       state.isLogin = action.payload
//     },
//     SET_NAME(state,action){
//       localStorage.setItem("name",JSON.stringify(action.payload));
//       state.name = action.payload
//     },
//     SET_USER(state,action){
//       const profile = action.payload;
//       state.user.name = profile.name;
//       state.user.email = profile.email;
//       state.user.phone = profile.phone;
//       state.user.description = profile.description;
//       state.user.photo= profile.photo;
//     },
//   },
// });

// export const {SET_LOGIN,SET_NAME,SET_USER} = authSlice.actions;

// export const selectISLoggedIn = (state) =>  state.auth.isLoggedIn
// export const selectName = (state) =>  state.auth.name
// export const selectUser = (state) =>  state.auth.user


// export default authSlice.reducer;

import React from 'react'

const authSlice = () => {
  return (
    <div>authSlice</div>
  )
}

export default authSlice