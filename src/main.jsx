import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "./contexts/TodoContext.jsx";
import { FilterProvider } from "./contexts/FilterContext.jsx";
import "./index.css";

// Provide todos and filters
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </TodoProvider>
  </React.StrictMode>
);
