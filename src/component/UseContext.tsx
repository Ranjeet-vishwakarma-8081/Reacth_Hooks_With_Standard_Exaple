import React, { useContext } from "react";
import { ThemeContext } from "../App";

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    padding: "2rem",
    borderRadius: "0.5rem",
    margin: "1rem",
    border: darkTheme ? "0.5px solid" : "0.5px solid red",
  };

  return (
    <>
      <div style={themeStyles}>FunctionContextComponent Example ... </div>
    </>
  );
};

export default FunctionContextComponent;
