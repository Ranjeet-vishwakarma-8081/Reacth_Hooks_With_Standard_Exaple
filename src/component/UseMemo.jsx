import React, { useMemo } from "react";

const UseMemo = () => {

  const [number, setNumber] = React.useState(1);

  const value = useMemo(() => {
    console.log("Memoized value calculated");
    return number * 2;
  },[number]);

  const handleClick = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <>
      <button onClick={handleClick} >Click Here</button>
      <p>{`The Current Number is ${number} and its value is ${value}`}</p>
    </>
  );
};

export default UseMemo;
