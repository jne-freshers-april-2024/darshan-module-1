import React, { useContext } from "react";
import { context } from "./context";

const CounterMul=()=>{

    const mulCount=useContext(context);
    return(
        <div>
            <button onClick={()=>mulCount.setCount(mulCount.count *2 )}>Count Mul</button>
        </div>
    )
}
export default CounterMul;