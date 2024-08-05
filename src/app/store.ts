import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/LoginSlice";
import newTodoReducer from "./features/NewTodoSlice";
import todoListReducer from "./features/TodoListSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    newtodo: newTodoReducer,
    todolist: todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
