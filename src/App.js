import React, { createContext, useState } from "react";
// import UseState from "./component/UseState.tsx";
// import UseEffect from "./component/UseEffect.tsx"
// import MyComponent from "./component/MyComponent.tsx";

import FunctionContextComponent from "./component/UseContext.tsx";

export const ThemeContext = createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <h1>React Hook Example By WebDevSimplified </h1>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <MyComponent></MyComponent> */}

      <ThemeContext.Provider value={darkTheme}>
        <button type="button" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
