import React, { useEffect } from 'react';
import { todoListState } from '../../recoil.js'
import { useRecoilState } from 'recoil'

const TodoListItemPreview = ({todo, i}) => {
  let [state, setState] = useRecoilState(todoListState);
  const done = () => {
    const newList = state.map((item) => {
      if(item.id===todo.id) {
        return {
          ...item,
          isDone:!item.isDone
        }
      }
      return item;
    })
    setState(newList);
  }

  const edit = () => {
    const newList = state.map((item) => {
      if(item.id===todo.id) {
        return {
          ...item,
          isEditMode:!item.isEditMode
        }
      }
      return item;
    })
    setState(newList);
  }

  const remove = () => {
    setState([...state.slice(0, i), ...state.slice(i + 1)]);
  }

  useEffect( () => {

  },[todo])
  return (
    <li className={todo.isDone ? "todo-item done" : "todo-item"} >
        <p>{todo.text}</p>
        <button onClick={done}>Done</button>
        <button onClick={edit}>Edit</button>
        <button onClick={remove}>Remove</button>
    </li>
  );
}

export default TodoListItemPreview;
