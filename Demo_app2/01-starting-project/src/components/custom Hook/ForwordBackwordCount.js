
import React, { useState } from "react";
import './styles.css';
import useCounter from "./useCounter";



const ForwordBackwordCount = () => {

    const inCounter=useCounter().incCount;
    const deCounter=useCounter().decCount;

    // const [incCount, setIncCount] = useState(0);
    // const [decCount, setdecCount] = useState(0);

    // useEffect(() => {
    //     const intervalIncrese = setInterval(() => {
    //         setIncCount(incCount + 1)
    //     }, 1000);

    //     const intervalDecrease = setInterval(() => {
    //         setdecCount(decCount - 1)
    //     }, 1000)

    //     return()=> {
            
    //         clearInterval(intervalIncrese);
    //         clearInterval(intervalDecrease);
    //     }
    // },[decCount,incCount])



    return(
        <div className=" containner">
            <div className="incre-container">
                <h3> {inCounter}</h3>
            </div>
            <div className="decre-container">
            <h3>  {deCounter}</h3>
            </div>
        </div>
    )

}
export default ForwordBackwordCount;