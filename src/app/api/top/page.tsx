"use client";

import React, { useState } from "react";
import { TodoItem } from "./todoItem";
import { Item } from "./types";
import { todoItems } from "./data";

const TodoList: React.FC = () => {
  const [items, setItems] = useState<Item[]>(todoItems);
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
