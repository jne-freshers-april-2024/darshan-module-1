import React, { useEffect, useState } from "react";

const SideEffect=()=>{

    const [value, setValue]=useState("Hello")
    const [name, setName]=useState("darshan")
    console.log("App render components");

    useEffect(()=>{
        console.log(value);  

        console.log(name)
    }, 
    [value,name])

    return(
        <div style={{textAlign: "center", marginTop :200}}>
        <button  style={{ margin:6}} onClick={()=>{setValue('Home');setName('Gadakh')}}>Home</button>
        <button  style={{margin:6}} onClick={()=>{setValue('About')}}>About</button>
        <button  style={{margin:6}} onClick={()=>{setValue('Service')}}>Service</button>
        <button  style={{ margin:6}} onClick={()=>{setValue('Contact')}}>Contact</button>
        
        <h2>{value},{name}</h2>    
        </div>
    )
}
export default SideEffect;