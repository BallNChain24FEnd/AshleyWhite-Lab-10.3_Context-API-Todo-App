import { useTodos } from "../contexts/TodoContext";

export default function TodoList() {
  // Read shared todos
  const { todos } = useTodos();

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty">No todos yet! Add one above.</p>
      ) : (
        todos.map(todo => (
          <p key={todo.id}>{todo.text}</p>
        ))
      )}
    </div>
  );
}
