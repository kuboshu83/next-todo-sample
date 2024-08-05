"use client";

import React, { useEffect, useState } from "react";
import { TodoItem } from "./todoItem";
import { getAllTodos } from "./api";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { setTodos } from "../../features/TodoListSlice";
import { useDispatch } from "react-redux";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todolist.todos);
  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      console.log("get all todo is called");
      const fetchedTodos = await getAllTodos();
      dispatch(setTodos(fetchedTodos));
    };
    fetchTodos();
  }, []);
  const newTodoEditorEnabled = useSelector(
    (state: RootState) => state.newtodo.enabled
  );
  return (
    <div className="flex bg-gray-300 justify-center items-center w-full">
      <ul>
        {todos.map((todo) => {
          return (
            <li
              className="bg-white rounded-3xl p-2 m-2 min-w-1/2"
              key={todo.id}
            >
              <TodoItem todo={todo} />
            </li>
          );
        })}
      </ul>
      {/* {newTodoEditorEnabled ? <AddTodo /> : null} */}
    </div>
  );
};

export default TodoList;
