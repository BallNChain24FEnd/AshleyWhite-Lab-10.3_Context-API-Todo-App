import { useTodos } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  // Read todos and clear action
  const { todos, clearCompleted } = useTodos();

  const completed = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-list">
      <p className="progress">
        {completed} of {todos.length} tasks completed
      </p>

      {todos.length === 0 ? (
        <p className="empty">No todos yet! Add one above.</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}

      {completed > 0 && (
        <button className="clear-btn" onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  );
}
