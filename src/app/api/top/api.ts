import { Item } from "./types";

export const getAllTodos = async (): Promise<Item[]> => {
  const res = await fetch(`http://localhost:3001/tasks`);
  const todos = res.json();
  return todos;
};

export const deleteTodoById = async (id: string): Promise<void> => {
  fetch(`http://localhost:3001/tasks/${id}`, { method: "delete" });
};
