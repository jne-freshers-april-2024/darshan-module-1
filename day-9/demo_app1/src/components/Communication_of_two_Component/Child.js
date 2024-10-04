import React, { useState } from "react"; 

const Childs=({sendNameToParent})=>{

    const [name , setName]= useState("");

    const handleClick=()=>{
        setName(sendNameToParent);
    }

    return(
        <>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <button onClick={handleClick}>Send Data to Parent</button>
        </>
    );
}
export default Childs;