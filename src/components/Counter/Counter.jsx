import React, { useRef, useState } from "react";

const Counter = () => {
  let count = useRef(0);
  
  const incrementCount = () => { 
    count.current++;
    console.log(count.current);
    console.log(divElem);
    divElem.current.style.color = 'red'
  }

  const divElem = useRef(null);

  let [i, setI] = useState(0);

  const increment = () => {
    setI(++i);
  };

  const decrement = () => {
    setI(--i);
  };

  return (
    <div ref={divElem}>
      <button onClick={incrementCount}>incrementCount</button>

      <button onClick={decrement}>-</button>
      {i}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;