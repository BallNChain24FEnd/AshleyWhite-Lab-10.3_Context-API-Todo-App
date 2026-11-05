import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

export default function TodoInput() {
  // Input state
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  // Submit new todo
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs to get done?"
        aria-label="New todo"
      />
      <button type="submit" disabled={!text.trim()}>
        Add Todo
      </button>
    </form>
  );
}
