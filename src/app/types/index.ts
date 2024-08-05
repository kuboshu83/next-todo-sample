export type Todo = {
  id: string;
  title: string;
  body: string;
  deadline?: Date;
  isDone: boolean;
  progress: number;
  group?: string;
};

export type LoginStatus = {
  logined: boolean;
};

export type NewTodoStatus = {
  enabled: boolean;
};

export type EditTodoState = {
  enabled: boolean;
};

export type TodoListState = {
  todos: Todo[];
};
