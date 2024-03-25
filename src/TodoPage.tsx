import { useTodoStore } from './store';

const TodoPage = () => {
  const { todos, addTodo, removeTodo, toggleTodo, currentTodo, setCurrentTodo } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={currentTodo} onChange={(e) => setCurrentTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;