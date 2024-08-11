import React, { useState, useCallback } from "react";
import List from "../ListForUseCallback.tsx";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (increment: number) => {
      return [
        number + increment,
        number + 1 + increment,
        number + 2 + increment,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>

        <List getItems={getItems} />
      </div>
    </>
  );
};

export default UseCallback;
