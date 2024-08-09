import React, { useRef, useState } from "react";

export default function UseImperativeHandle() {
  const [value, setValue] = useState("red");
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Focus input</button>
    </>
  );
}
