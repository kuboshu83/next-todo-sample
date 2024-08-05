"use client";

import { useState } from "react";
import { getAllTodos, updateTodo } from "../api/top/api";
import { useDispatch } from "react-redux";
import { disable as disableTodoEditor } from "../features/EditTodoSlice";
import { Todo } from "../types";
import { setTodos } from "../features/TodoListSlice";

type Props = {
  todo: Todo;
};

export const EditTodo: React.FC<Props> = ({ todo: initialTodo }: Props) => {
  const [todo, setTodo] = useState<Todo>(initialTodo);

  const dispatch = useDispatch();
  const closeTodoEditor = () => {
    dispatch(disableTodoEditor());
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateTodo(todo);
    var fetchedTodos = await getAllTodos();
    dispatch(setTodos(fetchedTodos));
    closeTodoEditor();
  };

  const onCancel = () => {
    closeTodoEditor();
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
        value={todo.deadline?.toString()}
        onChange={(e) =>
          setTodo({ ...todo, deadline: new Date(Date.parse(e.target.value)) })
        }
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
