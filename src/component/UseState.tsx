// Simple Example of useState By using premitive Data Type...

// import React from "react";

// const UseState = () => {
//   const [count, setCount] = React.useState(0);
//   const decreaseCountBy_1 = () => {
//     setCount((prevCount) => prevCount - 1);
//   };
//   const increaseCountBy_1 = () => {
//     setCount((nextCount) => nextCount + 1);
//   };

//   return (
//     <>
//       <p>useSatate Example with Primitive Data Types...</p>

//       <button type="button" onClick={decreaseCountBy_1}>
//         -
//       </button>
//       <span>{count}</span>
//       <button type="button" onClick={increaseCountBy_1}>
//         +
//       </button>
//     </>
//   );
// };

// export default UseState;

// Complex Example of useState by using Non-Primitive Data Types...

import React, { useState } from "react";

const UseState = () => {
  const [state, setState] = useState({ count: 0, theme: "light" });
  const count = state.count;
  const theme = state.theme;

  const decreaseCount = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count - 1 }));
  };
  const increaseCount = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };
  return (
    <>
      <p>useSatate Example with Non-Primitive Data Types...</p>
      <button type="button" onClick={decreaseCount}>
        -
      </button>
      <span>Count: {count}</span>
      <span>Theme: {theme}</span>
      <button type="button" onClick={increaseCount}>
        +
      </button>
    </>
  );
};

export default UseState;
