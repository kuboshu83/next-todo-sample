"use client";

import { useSelector } from "react-redux";
import TodoList from "./api/top/page";
import Modal from "react-modal";
import { RootState } from "./store";
import { AddTodo } from "./api/top/addTodo";
import { EditTodo } from "./components/editTodo";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Home() {
  const isNewTodoEditorEnabled = useSelector(
    (state: RootState) => state.newtodo.enabled
  );
  const { enabled, target } = useSelector((state: RootState) => state.edittodo);
  return (
    <main className="w-full flex">
      <Modal isOpen={isNewTodoEditorEnabled} style={customStyles}>
        <AddTodo />
      </Modal>
      <Modal isOpen={enabled} style={customStyles}>
        <EditTodo todo={target!} />
      </Modal>

      <TodoList />
    </main>
  );
}
