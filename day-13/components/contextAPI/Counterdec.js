import React, { useContext } from "react";
import { context } from "./context";
const Counterdec=()=>{
    const reduceCount=useContext(context);
    return(
        <div>
         <button onClick={()=>reduceCount.setCount(reduceCount.count  - 1)}> Count Inc</button>

        </div>
    )
}
export default Counterdec;