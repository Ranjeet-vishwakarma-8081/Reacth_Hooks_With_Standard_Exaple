import React from "react";
import CustomUseLocalStorage from "./CustomUseLocalStorage.js";

export default function useLocalStorage() {
  const [name, setName] = CustomUseLocalStorage("name", "");

  const handleChange = (e: { target: { value: any; }; }) => {
    setName(e.target.value);
  };
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}
