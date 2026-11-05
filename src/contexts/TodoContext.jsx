import { createContext, useContext, useEffect, useState, useMemo } from "react";

// Create shared todo context
const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  // Load saved todos
  const [todos, setTodos] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("todos"));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  // Save todos when changed
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  function addTodo(text) {
    if (!text.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
    console.log("Added todo:", newTodo);
  }

  // Toggle completion
  function toggleTodo(id) {
    setTodos(prev => prev.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  }

  // Delete todo
  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  // Edit todo text
  function editTodo(id, newText) {
    if (!newText.trim()) return;

    setTodos(prev => prev.map(todo =>
      todo.id === id
        ? { ...todo, text: newText.trim() }
        : todo
    ));
  }

  // Remove completed todos
  function clearCompleted() {
    setTodos(prev => prev.filter(todo => !todo.completed));
  }

  // Share state and actions
  const value = useMemo(() => ({
    todos, addTodo, toggleTodo, deleteTodo,
    editTodo, clearCompleted
  }), [todos]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook for easy access
export function useTodos() {
  return useContext(TodoContext);
}
