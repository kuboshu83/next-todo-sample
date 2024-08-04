import { Item } from "./types";

export const getAllTodos = async (): Promise<Item[]> => {
  const res = await fetch(`http://localhost:3001/tasks`);
  const todos = res.json();
  return todos;
};

export const deleteTodoById = async (id: string): Promise<void> => {
  await fetch(`http://localhost:3001/tasks/${id}`, { method: "delete" });
};

export const addTodo = async (item: Item): Promise<void> => {
  await fetch(`http://localhost:3001/tasks`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
