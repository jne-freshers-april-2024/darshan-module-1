import React, { useState } from "react";

// import "../../App.css";

import "./styles.css";

const InputForm = () => {
  

  const [enteredTitle, setEnterTitle] =useState('');

  const [enterAmount, setEnterAmount] = useState('');

  const [enterDate, setDate] = useState('');

  // const changeTitleHandler=(event)=>{
  //     setEnterTitle(event.target.value);
  // }

  // const changeAmountHandler=(event)=>{
  //     setEnterAmount(event.target.value);
  // }

  // const changeDateHandler=(event)=>{
  //     setDate(event.target.value)
  // }  
  const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });

  const changeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });

    setUserInput ((preState)=>{
        return {...preState, enterTitle: event.target.value}
    })
  };

  // Alternative creating a shared Handler function
  const inputChabgeHandler=(identifier, value)=>{
    if(identifier === 'TItle'){
        setEnterTitle(value);
    }else if(identifier === 'amount'){
        setEnterAmount(value);

    }else{
        setDate(value);
    }
  } 

  
  return (
    <form>
      <div className="new_inputforms_controls">
        <div className="new_inputforms_control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            required
            onChange={inputChabgeHandler}
          ></input>
        </div>
        <div className="new_inputforms_control">
          <label>Amount</label>
          <input
            type="text"
            id="amount"
            placeholder="Enter amount"
            required
            onChange={(event)=> inputChabgeHandler('title',event.target.value) }
          ></input>
        </div>
        <div className="new_inputforms_control">
          <label>Date</label>
          <input
            type="Date"
            id="date"
            placeholder="Select Date"
            required
            onChange={changeHandler}
          ></input>
        </div>

        <div>
          <button type="Submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
