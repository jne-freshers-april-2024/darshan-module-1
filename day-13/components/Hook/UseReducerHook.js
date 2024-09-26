import React, { useReducer } from "react";

import './styles.css';


const  reduce=(state, action )=>{
  
    if(action.type === "INCREMENT"){ 
        console.log(action)
        return state +1;
    }
    else if(action.type === "DECREMENT"){
        return state -1
     }
}

const UseReducerHook = () => {
        const [state, dispatch]=useReducer(reduce, 0)
  
    return (
        <div className="container">
            <button onClick={()=> dispatch({type :"INCREMENT"})} className="button add-button">Add Count</button>
            <button onClick= {()=> dispatch({type :"DECREMENT"})}  className="button reduce-button">Reduce Count</button>
            <h2>{state}</h2>
        </div>
    )

}
export default UseReducerHook;