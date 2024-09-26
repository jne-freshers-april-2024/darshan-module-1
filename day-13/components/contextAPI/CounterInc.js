import React, { useContext } from "react";
import { context } from "./context";


const CounterInc=()=>{

    const addCount=useContext(context);
   
    

    return(
        <div>
            <button onClick={()=>addCount.setCount(addCount.count  + 1)}> Count Inc</button>
        </div>
    )
}
export default CounterInc;