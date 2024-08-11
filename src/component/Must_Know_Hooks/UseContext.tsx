import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext.js";

const UseContext = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    padding: "2rem",
    borderRadius: "0.5rem",
    margin: "1rem",
    border: darkTheme ? "0.5px solid white" : "0.5px solid red",
  };

  return (
    <>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <div style={themeStyles}>FunctionContextComponent Example ...</div>
    </>
  );
};

export default UseContext;
