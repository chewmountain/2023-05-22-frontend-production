import React, { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);

  return (
    <div>
      <button onClick={inc}>{count}</button>
    </div>
  );
};
