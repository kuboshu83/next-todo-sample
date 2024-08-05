import { useDispatch } from "react-redux";
import { deleteTodoById, getAllTodos } from "./api";
import { Todo } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { setTodos } from "../../features/TodoListSlice";
import { enable } from "../../features/EditTodoSlice";

const formatDate = (date?: Date): string | undefined => {
  // return date?.toLocaleDateString("sv-SE"); //<=なぜか使えない
  return date?.toString().replaceAll("-", "/").substring(0, 10);
};

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  const dispatch = useDispatch();
  const deleteTodoItem = async (item: Todo): Promise<void> => {
    await deleteTodoById(item.id);
    const fetchedTodos = await getAllTodos();
    dispatch(setTodos(fetchedTodos));
  };

  return (
    <div>
      <div
        className="mr-2 flex flex-row-reverse"
        onClick={(e) => {
          deleteTodoItem(todo);
        }}
      >
        削除
      </div>
      <div className="flex justify-center text-3xl p-2">{todo.title}</div>
      <div className="flex items-center w-full min-h-20 p-2 text-xl">
        {todo.body}
      </div>
      <div className="flex justify-between text-sm">
        <div className="flex">
          <div className="ml-2">
            期限：
            {formatDate(todo.deadline) ?? "未設定"}
          </div>
          <div className="ml-2">状態：{todo.isDone ? "完了" : "進行中"}</div>
          <div className="ml-2">進捗：{todo.progress}%</div>
        </div>
        <div>
          {todo.group && <div className="ml-2">group: {todo.group}</div>}
        </div>
        <div className="flex">
          <button className="mr-2" onClick={() => dispatch(enable(todo))}>
            編集
          </button>
        </div>
      </div>
    </div>
  );
};
