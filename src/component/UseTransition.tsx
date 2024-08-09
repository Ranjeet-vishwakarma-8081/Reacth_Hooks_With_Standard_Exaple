import React, { useState, useTransition } from "react";

export default function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20_00;

  function handleChange(e) {
    const inputEleValue = e.target.value;
    setInput(inputEleValue);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(inputEleValue);
      }
      setList(l);
    });
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <div>Loading ...</div>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </>
  );
}
