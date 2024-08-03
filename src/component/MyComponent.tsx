import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or updated");
    return () => {
      console.log("Component will unmount");
    };
  }, [count]);

  return (
    
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
    </div>
  );
}

export default MyComponent;
