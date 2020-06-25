import React from 'react';

import TextField from '@material-ui/core/TextField';

const TodoLisItemEdit = ({todo, changeHandler, handleChangedTodo, i}) => {
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleChangedTodo(i);
      e.preventDefault();
    }
  }

  return (
    <form className="" noValidate autoComplete="off" >
      <TextField
        id="filled-text-input"
        value={todo.text}
        variant="filled"
        size="small"
        fullWidth
        margin="normal"
        autoFocus

        onChange={ (e) => changeHandler(e, i) }
        onKeyPress={ (e) => onKeyPress(e, i) }
      />
    </form>
  );
}

export default TodoLisItemEdit;
