import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditTodoState, Todo } from "../types";

const initialState: EditTodoState = {
  enabled: false,
  target: undefined,
};

const editTodoSlice = createSlice({
  name: "edittodo",
  initialState,
  reducers: {
    enable: (state, action: PayloadAction<Todo>) => {
      state.enabled = true;
      state.target = action.payload;
    },
    disable: (state) => {
      state.enabled = false;
      state.target = undefined;
    },
  },
});

export const { enable, disable } = editTodoSlice.actions;
export default editTodoSlice.reducer;
