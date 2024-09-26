import React, { useContext } from "react";
import '../contextAPI/styles.css';
import { contextCart } from "./CartContext";

const Item=(props)=>{
    const addCarts=useContext(contextCart);
    return(
        <div className="container">
            <p>Item name = {props.name}</p>
            <p>price = {props.price}</p>
            <p>brand = {props.brand}</p>
            
            <button onClick={()=>addCarts.setItems([...addCarts.items,{name:props.name,price:props.price,brand:props.brand}])}> Add to Card</button>
        </div>
    )
}
export default Item;