import React, { useEffect, useState, useEffectEvent } from "react";

export default function UseEffectEvent() {
  const [count, setCount] = useState(null);

  const handleEvent = useEffectEvent(() => {
    console.log(`The current count is  ${count}`);
  });

  useEffect(() => {
    // This effect runs only once, when the component mounts
    const interval = setInterval(() => {
      // Call the stable event handler inside the effect
      setCount((prevCount) => prevCount + 1);
      handleEvent();
    }, 2000);

    return () => clearInterval(interval);
  }, [handleEvent]);

  // handleEvent is stable and doesn't cause re-renders
  return (
    <>
      <div>Count : {count}</div>
    </>
  );
}
