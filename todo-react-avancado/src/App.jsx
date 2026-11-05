import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import React from "react";

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <h1>
          Organize, acompanhe e controle tarefas
        </h1>
      </section>

      <section className="workspace">
        <div className="workspace-heading">
          <h2>Minha lista de tarefas</h2>
        </div>

        <TodoForm />
        <TodoList />
      </section>
    </main>
  );
}