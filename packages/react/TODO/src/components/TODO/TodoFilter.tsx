interface TodoFilterProps {
  filter: (status: string) => void;
}

function TodoFilter({ filter }: TodoFilterProps) {
  return (
    <div>
      <button onClick={() => filter("all")}>All</button>
      <button onClick={() => filter("active")}>Active</button>
      <button onClick={() => filter("completed")}>Completed</button>
    </div>
  );
}

export default TodoFilter;
