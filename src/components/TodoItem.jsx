import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();

  // Editing state
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  // Save edited todo
  function handleSave() {
    if (!text.trim()) return;
    editTodo(todo.id, text);
    setEditing(false);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        aria-label={`Complete ${todo.text}`}
      />

      {editing ? (
        <input
          className="edit-input"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") handleSave();
          }}
          aria-label="Edit todo"
        />
      ) : (
        <span className={todo.completed ? "done" : ""}>
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        {editing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}

        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
