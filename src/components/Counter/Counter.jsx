import React, { useRef, useState } from "react";

const Counter = () => {
  let count = useRef(0);
  const divElem = useRef(null);

  let [i, setI] = useState(0);

  const incrementCount = () => { 
    count.current++;
    divElem.current.style.color = 'red'
  }

  const increment = () => {
    setI(++i);
  };

  const decrement = () => {
    setI(--i);
  };

  const factorial = factorialOf(i);

  return (
    <div ref={divElem}>
      <button onClick={incrementCount}>incrementCount</button>
      <button onClick={decrement}>-</button>
      {i}
      <button onClick={increment}>+</button>
      <div>{factorial}</div>
    </div>
  );
};


function factorialOf(n) {
  console.log('factorial');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default Counter;