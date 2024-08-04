import { Item } from "./types";

export const todoItems: Item[] = [
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
