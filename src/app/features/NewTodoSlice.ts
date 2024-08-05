import { createSlice } from "@reduxjs/toolkit";
import { NewTodoState } from "../types";

const initialState: NewTodoState = {
  enabled: false,
};

const newTodoSlice = createSlice({
  name: "newtodo",
  initialState,
  reducers: {
    enable: (state) => {
      state.enabled = true;
    },
    disable: (state) => {
      state.enabled = false;
    },
  },
});

export const { enable, disable } = newTodoSlice.actions;
export default newTodoSlice.reducer;
