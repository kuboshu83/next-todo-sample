"use client";

import { useState } from "react";
import { AddTodoProps, Todo } from "./types";
import { v4 as uuidv4 } from "uuid";
import { addTodo, getAllTodos } from "./api";
import { useDispatch } from "react-redux";
import { disable as disableTodoEditor } from "../../features/NewTodoSlice";

export const AddTodo: React.FC<AddTodoProps> = ({ setItems }: AddTodoProps) => {
  const initialTodo: Todo = {
    id: uuidv4(),
    title: "",
    body: "",
    deadline: undefined,
    isDone: false,
    progress: 0,
    group: undefined,
  };
  const [todo, setTodo] = useState<Todo>(initialTodo);

  const resetForm = () => {
    setTodo(initialTodo);
  };

  const dispatch = useDispatch();
  const closeNewTodoEditor = () => {
    dispatch(disableTodoEditor());
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
    await addTodo(todo);
    var todos = await getAllTodos();
    setItems(todos);
    closeNewTodoEditor();
  };

  const onCancel = () => {
    resetForm();
    closeNewTodoEditor();
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
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        className="flex items-center w-full min-h-20 p-2 border border-gray-400 rounded-md"
        placeholder="todo body ..."
        value={todo.body}
        onChange={(e) => setTodo({ ...todo, body: e.target.value })}
      />
      <input
        type="date"
        className="border border-gray-400 rounded-md p-1"
        value={todo.deadline?.toLocaleDateString("sv-SE")}
        onChange={(e) =>
          setTodo({ ...todo, deadline: new Date(Date.parse(e.target.value)) })
        }
      />
      <input
        type="text"
        placeholder="group"
        value={todo.group}
        onChange={(e) => setTodo({ ...todo, group: e.target.value })}
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
