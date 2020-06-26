import React, { useEffect } from 'react';
import { todoListState } from '../../recoil.js'
import { RecoilRoot, useRecoilState } from 'recoil'
import TextField from '@material-ui/core/TextField';

const TodoListItemPreview = ({todo}) => {

  let [state, setState] = useRecoilState(todoListState);
  const done = () => {
    const newList = state.map((item) => {
      if(item.id===todo.id) {
        return {
          ...item,
          isDone:!item.isDone
        }
      }
      return item
    })
    setState(newList);
  }
  useEffect( () => {

  },[todo])
  // <button onClick={ () => remove(i) }>Remove</button> */
  // <button onClick={edit}>Edit</button>
  return (
    <li className={todo.isDone ? "todo-item done" : "todo-item"} >

        <p>{todo.text}</p>
        <button onClick={done}>Done</button>
    </li>
  );
}

export default TodoListItemPreview;
