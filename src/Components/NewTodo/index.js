import React, { useState } from 'react';
import { useRecoilState } from 'recoil'
import { todoListState } from '../../recoil.js'
import TextField from '@material-ui/core/TextField';

const NewTodo = ({handleTodo}) => {
  const [text, setText] = useState("");
  let [ , setState] = useRecoilState(todoListState);
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      setState((oldState) => [
        ...oldState, {
          id: Date.now(),
          text,
          isDone: false,
          isEditMode: false
        }
      ]);
      setText("");
    }
  }


  return (
    <div className="textField">
       <TextField
         id="outlined-basic"
         label="Enter new todo"
         variant="outlined"
         size="small"
         fullWidth
         margin="normal"
         value={text}
         onChange={ (e) => setText(e.target.value) }
         onKeyPress={onKeyPress}
       />
    </div>
  );
}

export default NewTodo;
