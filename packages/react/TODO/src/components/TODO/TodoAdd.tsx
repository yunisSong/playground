// 定义 props
// 定义函数 addTodoItem，函数入参为 string 类型，返回类型为 void类型

import { useState } from "react";

interface TodoAddProps {
  addTodoItem: (text: string) => void;
}
function TodoAdd({ addTodoItem }: TodoAddProps) {
  // 获取 input 标签的值变化
  const [task, setTask] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  // 添加 代办事件
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoItem(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoAdd;
