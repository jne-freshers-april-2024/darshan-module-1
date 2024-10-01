import React from "react";
import './inputList.css';
import Button from "../button/Button";
import { useState } from "react";

const InputList=props=>{
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setISValid] = useState(true);

    const goalInputChangeHandler = event => {
      if(event.target.value.length >0){
        setISValid(true);

      }
      setEnteredValue(event.target.value);
    };
  
    const formSubmitHandler = event => {
      event.preventDefault();
      if(enteredValue.trim().length===0){
        setISValid(false);
        return;
      }
      props.onAddGoal(enteredValue);
    };
  
    return (
      <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${!isValid ? 'isvalid' : ''}`}>
          <label >Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </div>
        <Button  type="submit">Add Goal</Button>
      </form>
    );
  };
  export default InputList ;