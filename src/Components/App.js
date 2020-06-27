import React from 'react';
import NewTodo from './NewTodo'
import TodoList from './TodoList'

import './App.css';

const App = () => {

  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>

  );
}

export default App;
