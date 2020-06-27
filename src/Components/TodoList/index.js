import React from 'react';
import TodoLisItemPreview from '../TodoLisItemPreview'
import { todoListState } from '../../recoil.js'
import { useRecoilState } from 'recoil'
import TodoLisItemEdit from '../TodoLisItemEdit'

import './style.css';

const TodoList = () => {
  let [state] = useRecoilState(todoListState);
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
