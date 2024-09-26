import React, { useEffect, useState } from "react";
import './styles.css'; // Import the CSS file

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const actualWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    
    // Cleanup function to remove the event listener    
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  }, []);

  return (
    <div className="container">
      <p>The total width of the screen:</p>
      <h3>{width}</h3>
    </div>
  );
};

export default UseEffectCleanup;