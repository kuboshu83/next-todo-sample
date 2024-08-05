import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/LoginSlice";
import newTodoReducer from "./features/NewTodoSlice";
import todoListReducer from "./features/TodoListSlice";
import editTodoReducer from "./features/EditTodoSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    newtodo: newTodoReducer,
    todolist: todoListReducer,
    edittodo: editTodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
