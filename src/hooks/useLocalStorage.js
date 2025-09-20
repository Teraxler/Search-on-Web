import React, { useEffect, useState } from "react";

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export default function useLocalStorage(key, initValue = null) {
  const [value, setValue] = useState(
    initValue != null ? initValue : () => getFromLocalStorage(key)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
