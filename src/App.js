import React from "react";
// import UseState from "./component/UseState.tsx";
// import UseEffect from "./component/UseEffect.tsx"
// import MyComponent from "./component/MyComponent.tsx";

// import { ThemeProvider } from "./component/ThemeContext.js";
// import UseContext from "./component/UseContext.tsx";
// import UseRef from "./component/UseRef.tsx";
// import UseMemo from "./component/UseMemo.jsx";
import UseCallback from './component/UseCallback.tsx'

const App = () => {
  return (
    <>
      <h1>React Hook Example By WebDevSimplified </h1>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <MyComponent></MyComponent> */}

      {/* <ThemeProvider>
        <UseContext />
      </ThemeProvider> */}

      {/* <UseRef></UseRef> */}
      {/* <UseMemo></UseMemo> */}
      <UseCallback />
    </>
  );
};

export default App;
