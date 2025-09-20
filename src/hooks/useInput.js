import React, { useState } from "react";

export default function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  function resetValue() {
    setValue("");
  }

  const binding = {
    value: value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, binding, resetValue];
}
