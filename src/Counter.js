import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  function subCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="count">
      <h1 style={{ margin: "0" }}>{count}</h1>
      <button onClick={addCount}>+</button>
      <button onClick={subCount}>-</button>
      <button onClick={resetCount}>resret</button>
    </div>
  );
}

export default Counter;
