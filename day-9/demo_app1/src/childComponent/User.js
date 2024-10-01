import React from 'react';
import './child.css'

const data={
    
        userId: 3,
        model: "Honda City",
        price: 210000,
        Company: "mahindra",
        date: new Date(2024, 9, 15), 
}

const User=(props)=>{
    return(
        <div className="child-com">
            <h2>User name : {props.data}</h2>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}
export default User;