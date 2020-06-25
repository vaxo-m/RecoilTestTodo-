import React, { useState } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil'
import { todoListState } from '../../recoil.js'
import TextField from '@material-ui/core/TextField';

const NewTodo = ({handleTodo}) => {

  const [text, setText] = useState("");
  let [state, setState] = useRecoilState(todoListState);
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

    }
  }

  console.log(state);

  return (
    <div className="textField">
       {console.log("rendered new todo")}
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
