import React from "react";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./context/TodoContext";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);