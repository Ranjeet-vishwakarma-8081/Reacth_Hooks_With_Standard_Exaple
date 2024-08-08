import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}

export default UseRef;
