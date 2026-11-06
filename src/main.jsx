import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "./contexts/TodoContext.jsx";
import { FilterProvider } from "./contexts/FilterContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import "./index.css";

// Wrap app with three providers
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  </React.StrictMode>
);
