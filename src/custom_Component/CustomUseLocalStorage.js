import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = window.localStorage.getItem(key);
  
  if (savedValue !== null) {
    return JSON.parse(savedValue);
  }
  return initialValue;
}

// Custom Hook to save and retrieve state from local storage
export default function CustomUseLocalStorageHook(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)));
  
  return [value, setValue];
}
