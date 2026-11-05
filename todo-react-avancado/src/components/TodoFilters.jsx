import { memo } from "react";
import { ListTodo, Circle, CheckCircle2 } from "lucide-react";
import { useTodos } from "../context/TodoContext";
import React from 'react';

const filters = [
  { id: "all", label: "Todas", icon: ListTodo },
  { id: "active", label: "Pendentes", icon: Circle },
  { id: "completed", label: "Concluídas", icon: CheckCircle2 }
];

function TodoFilters() {
  const { filter, setFilter, stats } = useTodos();

  return (
    <div className="filters" aria-label="Filtrar tarefas">
      {filters.map(({ id, label, icon: Icon }) => (
        <button
          className={`filter-button ${filter === id ? "is-active" : ""}`}
          key={id}
          onClick={() => setFilter(id)}
          type="button"
          aria-pressed={filter === id}
        >
          <Icon size={16} />
          <span>{label}</span>
          <span className="filter-count">{id === "all" ? stats.total : id === "active" ? stats.active : stats.completed}</span>
        </button>
      ))}
    </div>
  );
}

export default memo(TodoFilters);