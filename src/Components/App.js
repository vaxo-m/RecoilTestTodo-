import React, { useState, useEffect } from 'react';
import NewTodo from './NewTodo'
import TodoList from './TodoList'
import TextField from '@material-ui/core/TextField';
import { RecoilRoot, useRecoilState } from 'recoil'
import { todoListState } from '../recoil.js'

import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1>Hey there! ;)</h1>
      <NewTodo />
      <TodoList />
    </div>

  );
}

export default App;
