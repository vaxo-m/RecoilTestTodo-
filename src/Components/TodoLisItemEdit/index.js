import React, { useState } from 'react';
import { todoListState } from '../../recoil.js'
import { RecoilRoot, useRecoilState } from 'recoil'
import TextField from '@material-ui/core/TextField';

const TodoLisItemEdit = ({todo}) => {
  const [editedTodoText, setEditedTodoText] = useState(todo.text)
  let [state, setState] = useRecoilState(todoListState);

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      // handleChangedTodo(i);
    const newList = state.map((item) => {
      if(item.id===todo.id) {
        return {
          ...item,
          text:editedTodoText,
          isEditMode:!item.isEditMode
        }
      }
      return item;
    })
    setState(newList)
    }
  }

  // onChange={ (e) => changeHandler(e, i) }
  return (
    <form className="" noValidate autoComplete="off" >
      <TextField
        id="filled-text-input"
        value={editedTodoText}
        variant="filled"
        size="small"
        fullWidth
        margin="normal"
        autoFocus
        onKeyPress={ (e) => onKeyPress(e) }
        onChange={ (e) => setEditedTodoText(e.target.value)}
      />
    </form>
  );
}

export default TodoLisItemEdit;
