"use client";

import TodoList from "./api/top/page";
import Modal from "react-modal";

export default function Home() {
  const isOpen = true;
  return (
    <main className="w-full flex">
      {/* <Modal isOpen={isOpen}>モーダル開いた</Modal> */}
      <TodoList />
    </main>
  );
}
