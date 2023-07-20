// TodoList.js

import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Filter from './Filter';
import Search from './Search';
// import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { title: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodoStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterType === 'completed') return todo.completed;
    if (filterType === 'incomplete') return !todo.completed;
    return true;
  });

  const searchedTodos = filteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className='todoHeading'>Todo Application</h2>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add new todo..."
      />
      <button onClick={addTodo}>Add Todo</button>
      <Filter filterType={filterType} setFilterType={setFilterType} />
      <ul>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => toggleTodoStatus(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
