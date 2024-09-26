import React, { useContext } from "react";
import { contextCart } from "./CartContext";

const Bills=()=>{

    const cart=useContext(contextCart);

    let totoal=cart.items.reduce((total, it) => total + parseFloat(it.price), 0)
    return(
        <div>
             <h3>Total Bill {totoal}</h3>
           {cart && cart.items.length > 0 ? (
        <ul>
            {cart.items.map((it, index) => (
                <li key={index}>
                    {it.name} - {it.price} - {it.brand}
                    
                </li>
            ))}
        </ul>
    ) : ( 
        <p>No items in cart.</p> 
    )}


            
        </div>
   
    )
}
export default Bills;