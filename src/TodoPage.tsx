import React, { useState } from 'react';
import { useTodoStore } from './store';

const TodoPage = () => {
  const [text, setText] = useState('');
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
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