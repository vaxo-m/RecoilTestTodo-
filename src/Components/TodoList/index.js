import React from 'react';
import TodoLisItemPreview from '../TodoLisItemPreview'
import { todoListState } from '../../recoil.js'
import { RecoilRoot, useRecoilState } from 'recoil'
import TodoLisItemEdit from '../TodoLisItemEdit'

import TextField from '@material-ui/core/TextField';


import './style.css';

const TodoList = () => {

  let [state, setState] = useRecoilState(todoListState);

  const renderTodos = () => {
    return state.map((todo, i) => {
      return todo.isEditMode ?
      <TodoLisItemEdit
        todo={todo}
        key={todo.id}
      />
      :
      <TodoLisItemPreview
        todo={todo}
        key={todo.id}
        i={i}
      />
    })
  }

  return (
    <ul className="todoList">
      {renderTodos()}
    </ul>
  );
}

export default TodoList;
