"use client";

import { useState } from "react";
import { AddTodoProps, Item } from "./types";
import { v4 as uuidv4 } from "uuid";
import { addTodo, getAllTodos } from "./api";
import { useDispatch } from "react-redux";
import { disable } from "../../features/NewTodoSlice";

export const AddTodo: React.FC<AddTodoProps> = ({ setItems }: AddTodoProps) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [group, setGroup] = useState<string>("");
  const [deadline, setDealLine] = useState<Date | undefined>(undefined);

  const clearForm = () => {
    setTitle("");
    setBody("");
    setGroup("");
    setDealLine(undefined);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo: Item = {
      id: uuidv4(),
      title: title,
      body: body,
      deadline: deadline,
      isDone: false,
      progress: 0,
      group: group ? group : undefined,
    };
    clearForm();
    await addTodo(todo);
    var todos = await getAllTodos();
    setItems(todos);
    dispatch(disable());
  };

  const dispatch = useDispatch();

  const onCancel = () => {
    clearForm();
    dispatch(disable());
  };

  return (
    <form
      className="flex flex-col  bg-white rounded-3xl p-5 min-w-1/2 gap-2"
      onSubmit={async (e) => {
        await onSubmit(e);
      }}
    >
      <input
        type="text"
        className="flex justify-center text-3xl p-2 border border-gray-400 rounded-md"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="flex items-center w-full min-h-20 p-2 border border-gray-400 rounded-md"
        placeholder="todo body ..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="date"
        className="border border-gray-400 rounded-md p-1"
        value={deadline?.toLocaleDateString("sv-SE")}
        onChange={(e) => setDealLine(new Date(Date.parse(e.target.value)))}
      />
      <input
        type="text"
        placeholder="group"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        className="border border-gray-400 rounded-md p-1"
      />
      <button
        type="button"
        className="bg-blue-400 rounded-md"
        onClick={onCancel}
      >
        キャンセル
      </button>
      <button type="submit" className="bg-blue-400 rounded-md">
        保存
      </button>
    </form>
  );
};
