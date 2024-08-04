"use client";

import React, { useEffect, useState } from "react";
import { TodoItem } from "./todoItem";
import { Item } from "./types";

const TodoList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3001/tasks`)
      .then((x) => {
        return x.json();
      })
      .then((x) => {
        setItems(x);
      });
  }, []);
  return (
    <div className="flex bg-gray-300 justify-center items-center w-full">
      <div className="flex flex-col justify-center h-full w-auto">
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
      </div>
    </div>
  );
};

export default TodoList;
