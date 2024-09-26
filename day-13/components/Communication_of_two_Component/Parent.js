
import { useState } from "react";
import Childs from "./Child";

const Parent=()=>{

    const [nameFromChild, setNameFromChild]=useState("");

    const getDataFromChild=(data)=>{
        setNameFromChild(data);
    }
    console.log(nameFromChild);
    
    return(
        <>
        <p> Data from child component</p>
        <Childs sendNameToParent={getDataFromChild}></Childs>
        </>
    )
}
export default Parent;
