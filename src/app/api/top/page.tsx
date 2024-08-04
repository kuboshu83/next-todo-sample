"use client";

import React, { useState } from "react";
import { TodoItem } from "./todoItem";

export type Item = {
  id: string;
  title: string;
  body: string;
  deadline?: Date;
  isDone: boolean;
  progress: number;
  group?: string;
};

const todoItems: Item[] = [
  {
    id: "1",
    title: "Next.jsの勉強をする",
    body: "Next.jsを使用して簡単なTodoアプリのGUIを作成する。",
    deadline: new Date("2024/8/10"),
    isDone: false,
    progress: 10,
    group: "TodoUser",
  },
  {
    id: "2",
    title: "Typescriptの勉強をする",
    body: "本を読む。",
    deadline: new Date("2024/8/10"),
    isDone: false,
    progress: 30,
    group: undefined,
  },
  {
    id: "3",
    title: "セキュリティの勉強をする",
    body: "本を読む。",
    deadline: new Date("2024/8/10"),
    isDone: false,
    progress: 30,
    group: undefined,
  },
];

const Top: React.FC = () => {
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

export default Top;
