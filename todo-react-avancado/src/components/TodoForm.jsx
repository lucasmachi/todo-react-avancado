import { useState } from "react";
import { Plus } from "lucide-react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="todo-title">Nova tarefa</label>
      <input
        id="todo-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="O que você precisa fazer?"
        maxLength={140}
      />
      <button className="add-button" type="submit" disabled={!title.trim()}>
        <Plus size={19} strokeWidth={2.5} />
        <span>Adicionar</span>
      </button>
    </form>
  );
}