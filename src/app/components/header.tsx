export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="text-4xl ml-5">TodoApp</div>
      <div className="text-2xl mr-5 flex gap-4">
        <div>NewTodo</div>
        <div>Login</div>
      </div>
    </div>
  );
};
