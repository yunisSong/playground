import TodoListItem from "./TodoListItem";
import { TodoItem } from "./types";
interface TodoListProps {
  todoList: TodoItem[];
  toggleTodo: (item: TodoItem) => void;
  deleteTodo: (item: TodoItem) => void;
}

function TodoList({ todoList, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <div>
      {todoList.map((todoItem) => (
        <TodoListItem
          key={todoItem.id}
          todoItem={todoItem}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
