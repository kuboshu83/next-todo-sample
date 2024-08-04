export type TodoProps = {
  item: Item;
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export type AddTodoProps = {
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export type Item = {
  id: string;
  title: string;
  body: string;
  deadline?: Date;
  isDone: boolean;
  progress: number;
  group?: string;
};
