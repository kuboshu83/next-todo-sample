import { Todo } from "../api/top/types";

export type LoginStatus = {
  logined: boolean;
};

export type NewTodoStatus = {
  enabled: boolean;
};

export type TodoListState = {
  todos: Todo[];
};
