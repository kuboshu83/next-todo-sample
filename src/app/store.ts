import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/LoginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
