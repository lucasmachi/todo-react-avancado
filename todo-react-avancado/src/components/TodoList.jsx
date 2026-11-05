import { memo } from "react";
import { ClipboardList } from "lucide-react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { filteredTodos, toggleTodo, removeTodo, filter } = useTodos();

  if (filteredTodos.length === 0) {
    const message = filter === "completed"
      ? "Nenhuma tarefa concluída por enquanto."
      : filter === "active"
        ? "Você não tem tarefas pendentes. Tudo em dia!"
        : "Sua lista está vazia. Adicione a primeira tarefa.";

    return (
      <div className="empty-state">
        <span className="empty-icon"><ClipboardList size={25} /></span>
        <p>{message}</p>
        <span>Pequenos passos também são progresso.</span>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={removeTodo} />
      ))}
    </ul>
  );
}

export default memo(TodoList);