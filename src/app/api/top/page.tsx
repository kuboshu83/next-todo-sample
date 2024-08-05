"use client";

import React, { useEffect, useState } from "react";
import { TodoItem } from "./todoItem";
import { Item } from "./types";
import { getAllTodos } from "./api";
import { AddTodo } from "./addTodo";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const TodoList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      console.log("get all todo is called");
      const todos = await getAllTodos();
      setItems(todos);
    };
    fetchTodos();
  }, []);
  const newTodoEditorEnabled = useSelector(
    (state: RootState) => state.newtodo.enabled
  );
  return (
    <div className="flex bg-gray-300 justify-center items-center w-full">
      <ul>
        {items.map((todoItem) => {
          return (
            <li
              className="bg-white rounded-3xl p-2 m-2 min-w-1/2"
              key={todoItem.id}
            >
              <TodoItem item={todoItem} items={items} setItems={setItems} />
            </li>
          );
        })}
      </ul>
      {newTodoEditorEnabled ? <AddTodo setItems={setItems} /> : null}
    </div>
  );
};

export default TodoList;
