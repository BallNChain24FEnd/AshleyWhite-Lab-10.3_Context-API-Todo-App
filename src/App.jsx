import { useTheme } from "./contexts/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  // Read selected theme
  const { theme } = useTheme();

  return (
    <main className={`app ${theme}`}>
      <section className="todo-card">
        <header className="app-header">
          <p className="eyebrow">FOCUSFLOW</p>
          <ThemeToggleButton />
        </header>

        <h1>My Todo List</h1>
        <p className="subtitle">Small steps, big progress.</p>

        <TodoInput />
        <FilterButtons />
        <TodoList />

        <footer>Made with focus and React ♡</footer>
      </section>
    </main>
  );
}
