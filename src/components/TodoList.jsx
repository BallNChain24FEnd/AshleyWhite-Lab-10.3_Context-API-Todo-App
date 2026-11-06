import { useTodos } from "../contexts/TodoContext";
import { useFilter } from "../contexts/FilterContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  // Read both contexts
  const { todos, clearCompleted } = useTodos();
  const { filter } = useFilter();

  // Show matching todos
  const visibleTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completed = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-list">
      <p className="progress">
        {completed} of {todos.length} tasks completed
      </p>

      {visibleTodos.length === 0 ? (
        <p className="empty">No matching todos.</p>
      ) : (
        visibleTodos.map(todo => (
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
