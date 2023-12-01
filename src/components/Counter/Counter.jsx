import React, { useState } from "react";

const Counter = () => {
  let [i, setI] = useState(0);

  const increment = () => {
    setI(++i);
  };

  const decrement = () => {
    setI(--i);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {i}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;