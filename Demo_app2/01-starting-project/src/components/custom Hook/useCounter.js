
import React ,{ useEffect, useState } from "react";
import './styles.css';

const useCounter=()=>{
    const [incCount, setIncCount] = useState(0);
    const [decCount, setdecCount] = useState(0);
    useEffect(() => {
        const intervalIncrese = setInterval(() => {
            setIncCount(incCount + 1)
        }, 1000);

        const intervalDecrease = setInterval(() => {
            setdecCount(decCount - 1)
        }, 1000)

        return()=> {
            
            clearInterval(intervalIncrese);
            clearInterval(intervalDecrease);
        }
    },[incCount,decCount])

    return {incCount,decCount};
}
export default useCounter;