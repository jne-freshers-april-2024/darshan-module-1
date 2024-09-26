import {createContext, useState} from "react";

export const context= createContext(0);

const CountextProvider=(props)=>{
    const [count, setCount]=useState(0)
    return(
        <context.Provider  value={{count, setCount}}>
          {props.children}
        </context.Provider>
    )
}
export default CountextProvider;