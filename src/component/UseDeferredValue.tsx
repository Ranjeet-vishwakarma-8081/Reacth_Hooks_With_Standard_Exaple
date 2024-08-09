import React, { useState } from "react";
import List from "./ListForUseDeferredValue.js";

export default function UseDeferredValue() {

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
}
