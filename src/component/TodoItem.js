// TodoItem.js

import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      {todo.title}
      <button  onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
