import { createSlice } from "@reduxjs/toolkit";
import { LoginStatus } from "../types";

const initialState: LoginStatus = {
  logined: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.logined = true;
    },
    logout: (state) => {
      state.logined = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
