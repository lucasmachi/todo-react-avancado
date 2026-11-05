# Todo React Avançado

Uma aplicação de lista de tarefas desenvolvida com React para praticar Context API, hooks customizados e memoization. A interface é responsiva e utiliza `localStorage` para manter as tarefas salvas no navegador.

## Tecnologias utilizadas

- React
- Vite
- Context API (`createContext` e `useContext`)
- Hooks (`useState`, `useEffect`, `useMemo`)
- Hook customizado (`useLocalStorage`)
- `React.memo`
- Lucide React
- CSS responsivo com abordagem Mobile First

## Funcionalidades

- Adicionar tarefas
- Marcar tarefas como concluídas ou pendentes
- Remover tarefas
- Filtrar tarefas por todas, pendentes e concluídas
- Persistir tarefas no `localStorage`
- Exibir indicadores de progresso

## Como executar localmente

É necessário ter Node.js instalado.

1. Extraia os arquivos do projeto.
2. Abra o terminal na pasta `todo-react-avancado`.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```text
todo-react-avancado/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoFilters.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoSummary.jsx
│   ├── context/
│   │   └── TodoContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```
