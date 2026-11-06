import {
  createContext, useContext, useEffect,
  useState, useMemo, useCallback
} from "react";

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

  // Stable add function
  const addTodo = useCallback((text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
  }, []);

  // Toggle completion
  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  }, []);

  // Delete todo
  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  // Edit todo text
  const editTodo = useCallback((id, newText) => {
    if (!newText.trim()) return;

    setTodos(prev => prev.map(todo =>
      todo.id === id
        ? { ...todo, text: newText.trim() }
        : todo
    ));
  }, []);

  // Remove completed todos
  const clearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  }, []);

  // Memoize shared context values
  const value = useMemo(() => ({
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted
  }), [
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted
  ]);

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
