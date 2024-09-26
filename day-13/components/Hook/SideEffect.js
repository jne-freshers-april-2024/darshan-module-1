import React, { useEffect, useState } from "react";
import './styles.css'; // Import the CSS file

const SideEffect = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((count) => count + 1);
  };

  const reduceCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Components Render");
  }, [count]);

  return (
    <div className="container">
      <button onClick={addCount} className="button add-button">Add Count</button>
      <button onClick={reduceCount} className="button reduce-button">Reduce Count</button>
      <h2>{count}</h2>
    </div>
  );
};

export default SideEffect;

  // <div>
    //     <Greeting isLoggedIn={isLoggedIn}></Greeting>
    //     <button onClick={handleLoginToggle}>Click ME</button>
    // </div>
  // const [isLoggedIn, setIsLoggedIn]=useState(false);

  // const handleLoginToggle = () => {
  //     setIsLoggedIn(true);
  //   };
  // function Greeting({ isLoggedIn }) {
  //    return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
  //   }