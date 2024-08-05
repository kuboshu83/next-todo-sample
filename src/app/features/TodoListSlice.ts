import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";
import { TodoListState } from "../types";

const initialState: TodoListState = {
  todos: [],
};

const todoListSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = todoListSlice.actions;
export default todoListSlice.reducer;
