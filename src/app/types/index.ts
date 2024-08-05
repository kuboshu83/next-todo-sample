export type Todo = {
  id: string;
  title: string;
  body: string;
  deadline?: Date;
  isDone: boolean;
  progress: number;
  group?: string;
};

export type LoginState = {
  logined: boolean;
};

export type NewTodoState = {
  enabled: boolean;
};

export type EditTodoState = {
  enabled: boolean;
};

export type TodoListState = {
  todos: Todo[];
};
