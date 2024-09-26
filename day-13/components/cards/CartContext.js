import React, { createContext, useState } from "react";


export const contextCart= createContext(0);

const CartContextprovider=(props)=>{

    const[items , setItems]= useState([]);

    return(
        <contextCart.Provider value={{items,setItems }}>
            {props.children}
        </contextCart.Provider>
    )
}
export default CartContextprovider;