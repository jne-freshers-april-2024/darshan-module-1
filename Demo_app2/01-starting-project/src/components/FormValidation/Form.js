import React, { useState } from "react";
import './formStyle.css'

const Form=()=>{

    const [inputName, setInputName]=useState('');
    const [inputIsvalid, setInputIsValid]=useState(false);
    const [entreNameTouch, setNameTouch]= useState(false)




    const onHandleInputName=(event)=>{
        setInputName(event.target.value);
        if(inputName === ''){
            setInputIsValid(false);
            console.log(inputIsvalid.value);    
            return;
            
        }
        else if(inputName.length >0){
            setInputIsValid(true);
            return inputName;
        }
    }

    const onFormHandler=(event)=>{
        event.preventDefault();

        setInputName(event.target.value);
        setNameTouch(true)

      

        console.log(inputName);
        
    }
    const nameInputIsInvalid= !inputIsvalid && entreNameTouch

    const formConntrol= nameInputIsInvalid ? 'form-container invalid' : 'form-container';

    return(
        <div>
        <form className={ formConntrol } onClick={onFormHandler}    >
            <label className="form-label">Enter name</label>
            <input type="text" id="name" className="form-input " onChange={onHandleInputName}></input>

            {nameInputIsInvalid && <p>name is required</p>}
            <label className="form-label">Enter email</label>
            <input type="email" id="email" className="form-input " onChange={onHandleInputName}></input>

            <label className="form-label">Enter phone number</label>
            <input type="number" id="number" className="form-input "  onChange={onHandleInputName}></input>
 
 
            <button className="submit-button" type="Submit" >Submit</button>
        </form>
    </div>
    )

}
export default Form;