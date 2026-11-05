import { CalendarDays, CheckCircle2, Leaf } from "lucide-react";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import { useTodos } from "./context/TodoContext";

export default function App() {
  const { stats } = useTodos();
  const dateLabel = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(new Date());

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Todo Flow, início">
          <span className="brand-mark"><CheckCircle2 size={22} /></span>
          <span>todo<span className="brand-accent">flow</span></span>
        </a>
        <div className="date-chip"><CalendarDays size={15} /><span>{dateLabel}</span></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><Leaf size={14} /> UM PASSO DE CADA VEZ</span>
          <h1>Faça espaço para<br /><span>o que importa.</span></h1>
          <p>Organize suas tarefas, acompanhe seu progresso e celebre cada pequena conquista.</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-sun" />
          <div className="art-card art-card-back" />
          <div className="art-card art-card-front">
            <span className="art-check"><CheckCircle2 size={24} /></span>
            <span className="art-line art-line-long" />
            <span className="art-line art-line-short" />
            <span className="art-mini-check"><CheckCircle2 size={17} /></span>
            <span className="art-line art-line-medium" />
          </div>
          <span className="art-sparkle sparkle-one">✳</span>
          <span className="art-sparkle sparkle-two">✦</span>
        </div>
      </section>

      <section className="workspace">
        <div className="workspace-heading">
          <div>
            <h2>Minha lista</h2>
            <p>{stats.active === 0 ? "Tudo em dia. Aproveite o momento!" : `Você tem ${stats.active} ${stats.active === 1 ? "tarefa" : "tarefas"} esperando por você.`}</p>
          </div>
          <span className="task-badge">{stats.total} {stats.total === 1 ? "tarefa" : "tarefas"}</span>
        </div>

        <TodoForm />
        <TodoSummary />
        <TodoFilters />
        <TodoList />

        <footer className="workspace-footer">
          <span>Feito com intenção, um dia de cada vez.</span>
          <span className="footer-heart">♥</span>
        </footer>
      </section>

      <footer className="page-footer">TODO FLOW <span>·</span> SEU ESPAÇO, SEU RITMO</footer>
    </main>
  );
}