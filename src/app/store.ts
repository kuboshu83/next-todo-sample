import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/LoginSlice";
import newTodoReducer from "./features/NewTodoSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    newtodo: newTodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
