import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  // Display todo components
  return (
    <main className="app">
      <section className="todo-card">
        <p className="eyebrow">FOCUSFLOW</p>
        <h1>My Todo List</h1>
        <p>Small steps, big progress.</p>

        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}
