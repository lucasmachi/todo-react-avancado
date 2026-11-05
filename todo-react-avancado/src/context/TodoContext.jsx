import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext(null);

const initialTodos = [
  { id: "welcome-1", title: "Organizar as prioridades da semana", completed: true, createdAt: Date.now() - 86400000 },
  { id: "welcome-2", title: "Estudar hooks avançados do React", completed: false, createdAt: Date.now() },
  { id: "welcome-3", title: "Dar uma pausa e tomar água", completed: false, createdAt: Date.now() }
];

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todo-react-avancado-tasks", initialTodos);
  const [filter, setFilter] = useState("all");

  const addTodo = useCallback((title) => {
    const normalizedTitle = title.trim();
    if (!normalizedTitle) return;
    setTodos((current) => [
      { id: crypto.randomUUID(), title: normalizedTitle, completed: false, createdAt: Date.now() },
      ...current
    ]);
  }, [setTodos]);

  const toggleTodo = useCallback((id) => {
    setTodos((current) => current.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }, [setTodos]);

  const removeTodo = useCallback((id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }, [setTodos]);

  const clearCompleted = useCallback(() => {
    setTodos((current) => current.filter((todo) => !todo.completed));
  }, [setTodos]);

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  }, [todos, filter]);

  const stats = useMemo(() => {
    const completed = todos.filter((todo) => todo.completed).length;
    return {
      total: todos.length,
      completed,
      active: todos.length - completed,
      progress: todos.length ? Math.round((completed / todos.length) * 100) : 0
    };
  }, [todos]);

  const value = useMemo(() => ({
    todos,
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
    stats
  }), [todos, filteredTodos, filter, addTodo, toggleTodo, removeTodo, clearCompleted, stats]);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos deve ser utilizado dentro de TodoProvider.");
  return context;
}