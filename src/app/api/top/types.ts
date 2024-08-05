export type TodoProps = {
  item: Todo;
  items: Todo[];
  setItems: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export type AddTodoProps = {
  setItems: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export type Todo = {
  id: string;
  title: string;
  body: string;
  deadline?: Date;
  isDone: boolean;
  progress: number;
  group?: string;
};
