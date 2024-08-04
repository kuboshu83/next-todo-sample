"use client";

import React, { useState } from "react";

type TodoItem = {
  id: string;
  title: string;
  body: string;
  deadline?: Date;
  isDone: boolean;
  progress: number;
  group?: string;
};

const todoItems: TodoItem[] = [
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

type TodoProps = {
  item: TodoItem;
  items: TodoItem[];
  setItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
};

const Todo: React.FC<TodoProps> = ({ item, items, setItems }: TodoProps) => {
  const deleteTodoItem = (item: TodoItem, items: TodoItem[]) => {
    const updated = items.filter((x) => x.id != item.id);
    setItems(updated);
  };
  return (
    <div>
      <div
        className="mr-2 flex flex-row-reverse"
        onClick={(e) => {
          deleteTodoItem(item, items);
        }}
      >
        削除
      </div>
      <div className="flex justify-center text-3xl p-2">{item.title}</div>
      <div className="flex items-center w-full min-h-20 p-2 text-xl">
        {item.body}
      </div>
      <div className="flex justify-between text-sm">
        <div className="flex">
          <div className="ml-2">
            期限：
            {item.deadline
              ? item.deadline.toLocaleDateString("sv-SE")
              : undefined}
          </div>
          <div className="ml-2">状態：{item.isDone ? "完了" : "進行中"}</div>
          <div className="ml-2">進捗：{item.progress}%</div>
        </div>
        <div>
          {item.group && <div className="ml-2">group: {item.group}</div>}
        </div>
        <div className="flex">
          <div className="mr-2">編集</div>
        </div>
      </div>
    </div>
  );
};

const Top: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>(todoItems);
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
                <Todo item={todoItem} items={items} setItems={setItems} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Top;
