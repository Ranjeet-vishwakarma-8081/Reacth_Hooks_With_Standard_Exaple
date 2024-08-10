import React, { useRef, useState } from "react";
import CustomInputForUseImperativeHandle from "./CustomInputForUseImperativeHandle.js";

export default function UseImperativeHandle() {
  const [value, setValue] = useState("red");
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <CustomInputForUseImperativeHandle
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{}}
      />
      <button onClick={handleClick}>Focus input</button>
    </>
  );
}
