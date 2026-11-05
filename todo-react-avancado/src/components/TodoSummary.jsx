import { memo } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import { useTodos } from "../context/TodoContext";
import React from 'react';

function TodoSummary() {
  const { stats, clearCompleted } = useTodos();

  return (
    <section className="summary">
      <div className="summary-topline">
        <div className="summary-label"><Sparkles size={16} /> Seu progresso</div>
        <span className="progress-percent">{stats.progress}%</span>
      </div>
      <div className="progress-track" role="progressbar" aria-label="Progresso das tarefas" aria-valuemin={0} aria-valuemax={100} aria-valuenow={stats.progress}>
        <span className="progress-fill" style={{ width: `${stats.progress}%` }} />
      </div>
      <div className="summary-bottom">
        <span><strong>{stats.completed}</strong> de {stats.total} tarefas concluídas</span>
        {stats.completed > 0 && (
          <button className="clear-button" type="button" onClick={clearCompleted}>
            <RotateCcw size={14} />
            Limpar concluídas
          </button>
        )}
      </div>
    </section>
  );
}

export default memo(TodoSummary);