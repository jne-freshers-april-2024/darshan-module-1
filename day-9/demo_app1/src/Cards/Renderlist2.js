import React, { useState } from "react";

const Renderlist2=()=>{

    const [cards, setCards]= useState([])

    const fetchData=async ()=>{
        let data=await fetch("https://jsonplaceholder.typicode.com/posts");
        let objectData=await data.json();

        setCards(objectData);
    }
    return(
        <>
        
        </>
    )
}

export default Renderlist2;