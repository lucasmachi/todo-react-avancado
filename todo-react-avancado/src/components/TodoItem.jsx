import { memo } from "react";
import { Check, Trash2 } from "lucide-react";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={`todo-item ${todo.completed ? "is-completed" : ""}`}>
      <button
        className="check-button"
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? `Reabrir tarefa: ${todo.title}` : `Concluir tarefa: ${todo.title}`}
        aria-pressed={todo.completed}
      >
        {todo.completed && <Check size={15} strokeWidth={3} />}
      </button>
      <span className="todo-title">{todo.title}</span>
      <button
        className="remove-button"
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label={`Remover tarefa: ${todo.title}`}
      >
        <Trash2 size={17} />
      </button>
    </li>
  );
}

export default memo(TodoItem);