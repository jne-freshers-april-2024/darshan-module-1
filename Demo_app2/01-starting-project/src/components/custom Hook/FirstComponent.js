import React , {useState ,useEffect} from "react";
 
function FirstComponent(props){
     
    const [counter , setCounter] = useState(initializer);
     
    // Increases the value of counter by 1
       function resetCounter(){
        setCounter(counter + 1):
    }
     
    useEffect(() => {
        // Some logic 
        console.log(counter);
    } , [counter]);
     
    const clickedButton = resetCounter; 
     
    return (
        <div>
            <h1> This is the First Component</h1>
            <button onClick={clickedButton}> 
               Click here!
            </button>
        </div>
    );
}
 
export default FirstComponent;