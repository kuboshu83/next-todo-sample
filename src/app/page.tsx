"use client";

import { useSelector } from "react-redux";
import TodoList from "./api/top/page";
import Modal from "react-modal";
import { RootState } from "./store";
import { AddTodo } from "./api/top/addTodo";

export default function Home() {
  const isNewTodoEditorEnabled = useSelector(
    (state: RootState) => state.newtodo.enabled
  );
  return (
    <main className="w-full flex">
      <Modal isOpen={isNewTodoEditorEnabled}>
        <AddTodo />
      </Modal>
      <TodoList />
    </main>
  );
}
