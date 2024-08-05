import { createSlice } from "@reduxjs/toolkit";
import { EditTodoState } from "../types";

const initialState: EditTodoState = {
  enabled: false,
};

const editTodoSlice = createSlice({
  name: "edittodo",
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

export const { enable, disable } = editTodoSlice.actions;
export default editTodoSlice.reducer;
