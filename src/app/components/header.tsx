"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/LoginSlice";

export const Header: React.FC = () => {
  const isLogined = useSelector((state: RootState) => state.login.logined);
  const dispatch = useDispatch();
  const loginHandler = () => {
    if (isLogined) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };
  return (
    <div className="flex justify-between items-center h-full">
      <div className="text-4xl ml-5">TodoApp</div>
      <div className="text-2xl mr-5 flex gap-4">
        <div>NewTodo</div>
        <button onClick={loginHandler}>{isLogined ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};
