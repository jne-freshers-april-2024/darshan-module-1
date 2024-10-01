import React, { useState } from "react";

const Event=()=>{
    const [name, setName]=useState("");
    const onClickEvent=()=>{
        setName("Darshan");
        
    }

    const [value, setValue] =useState("")

    const onChangeEvent=(event)=>{
      setValue(event.target.value);
    }
    return(
        <div
        style={{ textAlign: "center", margin: "auto" }}
    >
        <h1 style={{ color: "Green" }}>
            GeeksforGeeks
        </h1>
        <h3>
            Exemple for React onChange Event Handler
        </h3>
        <input value={value} onChange={onChangeEvent} />
        <br />
        <div>User Input:- {value}</div>
        </div>

            // {/* <h2>Good Morning</h2>
            // {/* <h3> Your Name  : Click on button to see name </h3>  */}
            // {name ? <h3> Your Name  : {name} </h3> : null}
          
            // <button type="submit" onClick={onClickEvent}>Click</button> 

            
        
    )
}
export default Event;