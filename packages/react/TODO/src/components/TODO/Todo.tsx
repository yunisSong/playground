import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import { TodoItem } from "./types";

function Todo() {
  // 定一个状态 存储 TodoItem 列表
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  // 定义 filter 的状态
  const [filter, setFilter] = useState<string>("all");

  // 定义一个方法 向 todoList 添加一个新的 todoItem，方法的入参是一个文本
  const addTodo = (text: string) => {
    console.log("text: ", text);
    // 生成一个��一的 id
    const stringHash = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // 将hash转换为32位整数
      }
      return hash;
    };
    const id = stringHash(text);
    // 创建一个新的 todoItem
    const newTodo: TodoItem = {
      id,
      text,
      completed: false,
    };
    // ��新的 todoItem 添加到 todoList 中
    setTodoList([...todoList, newTodo]);
  };

  const toggleTodo = (item: TodoItem) => {
    const newTodoList = todoList.map((todoItem) => {
      if (todoItem.id === item.id) {
        return { ...todoItem, completed: !todoItem.completed };
      }
      return todoItem;
    });
    setTodoList(newTodoList);
  };
  const deleteTodo = (item: TodoItem) => {
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== item.id);
    setTodoList(newTodoList);
  };
  // 根据 filter 筛选 列表
  const filterStatue = () => {
    switch (filter) {
      case "completed":
        return todoList.filter((item) => item.completed);
      case "active":
        return todoList.filter((item) => !item.completed);
      default:
        return todoList;
    }
  };

  return (
    <div>
      <h1>todo list</h1>
      <TodoAdd addTodoItem={addTodo}></TodoAdd>
      <TodoList
        todoList={filterStatue()}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      ></TodoList>
      <TodoFilter filter={setFilter}></TodoFilter>
    </div>
  );
}

export default Todo;
