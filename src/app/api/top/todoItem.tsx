import { Item, TodoProps } from "./types";

export const TodoItem: React.FC<TodoProps> = ({
  item,
  items,
  setItems,
}: TodoProps) => {
  const deleteTodoItem = (item: Item, items: Item[]) => {
    const updated = items.filter((x) => x.id != item.id);
    setItems(updated);
  };

  return (
    <div>
      <div
        className="mr-2 flex flex-row-reverse"
        onClick={(e) => {
          deleteTodoItem(item, items);
        }}
      >
        削除
      </div>
      <div className="flex justify-center text-3xl p-2">{item.title}</div>
      <div className="flex items-center w-full min-h-20 p-2 text-xl">
        {item.body}
      </div>
      <div className="flex justify-between text-sm">
        <div className="flex">
          <div className="ml-2">
            期限：
            {item.deadline ? item.deadline.toString() : undefined}
          </div>
          <div className="ml-2">状態：{item.isDone ? "完了" : "進行中"}</div>
          <div className="ml-2">進捗：{item.progress}%</div>
        </div>
        <div>
          {item.group && <div className="ml-2">group: {item.group}</div>}
        </div>
        <div className="flex">
          <div className="mr-2">編集</div>
        </div>
      </div>
    </div>
  );
};
