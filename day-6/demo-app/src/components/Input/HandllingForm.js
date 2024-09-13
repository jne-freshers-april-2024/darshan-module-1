

import React, { useState } from "react";

import "./styles.css";

const HandlerForm = () => {

  const [enteredTitle, setEnterTitle] = useState('');

  const [enterAmount, setEnterAmount] = useState('');

  const [enterDate, setDate] = useState('');

  const inputChangeHandler=(identifier, value)=>{
    if(identifier === 'title'){
        setEnterTitle(value);
    }else if(identifier === 'date'){
        
        setDate(value);

    }else{
        setEnterAmount(value);
    }
  } 
  const submitHandler=(event)=>{
        event.preventDefault();

        const inputData={
            title : enteredTitle,
            amount : enterAmount,
            date : enterDate
        }


        console.log(inputData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new_inputforms_controls">
          <div className="new_inputforms_control">
            <label>Title</label>
            <input type="text" id="title" placeholder="Enter Title" required onChange={(event) =>inputChangeHandler("title", event.target.value)}
            ></input>
          </div>
          <div className="new_inputforms_control">
            <label>Amount</label>
            <input type="text" id="amount" placeholder="Enter amount" required onChange={(event) =>inputChangeHandler("amount", event.target.value)} ></input>
          </div>
          <div className="new_inputforms_control">
            <label>Date</label>
            <input  type="Date" id="date" placeholder="Select Date" required onChange={(event) =>inputChangeHandler("date", event.target.value)}></input>
          </div>

          <div>
            <button type="Submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HandlerForm;
