import { TodoItem } from "./types";
import "./Todo.css";
interface TodoListItemProps {
  todoItem: TodoItem;
  toggleTodo: (item: TodoItem) => void;
  deleteTodo: (item: TodoItem) => void;
}
function TodoListItem({ todoItem, toggleTodo, deleteTodo }: TodoListItemProps) {
  // 显示 todoItem 状态和删除按钮
  // 根据 todoItem.completed = true，显示删除线
  // 切换 todoItem 状态
  const handleToggle = () => {
    toggleTodo(todoItem);
  };

  // 删除 todoItem
  const handleDelete = () => {
    deleteTodo(todoItem);
  };

  return (
    <div>
      <span className={todoItem.completed ? "completed" : ""}>
        {todoItem.text}
      </span>
      <button onClick={handleToggle}>完成</button>
      <button onClick={handleDelete}>删除</button>
    </div>
  );
}

export default TodoListItem;
