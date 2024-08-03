// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [resourseType, setResourseType] = useState("Posts");
//   const [resourseData, setResourseData] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
//       .then((response) => response.json())
//       .then((data) => setResourseData(data))
//       .catch((error) => console.error("Error:", error.name));
//   }, [resourseType]);

//   return (
//     <>
//       <div>UseEffect Example ...</div>
//       <button onClick={() => setResourseType("Posts")}>Posts</button>
//       <button onClick={() => setResourseType("Users")}>Users</button>
//       <button onClick={() => setResourseType("Comments")}>Comments</button>
//       <h2>Current Resourse Type: {resourseType}</h2>
//       {resourseData.map((item) => (
//         <pre key={JSON.stringify(item)}>{JSON.stringify(item)}</pre>
//       ))}
//     </>
//   );
// };

// export default UseEffect;

// Complex Example of useEffect Hook..

import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div>Complex Example of useEffect Hook...</div>

      <p>{windowWidth}</p>
    </>
  );
};

export default UseEffect;
