import React, { useState } from "react";
import "./Counter.css";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      
      <h1>Counter: {count}</h1>
      <div className="buttons">
        <input
          type="button"
          value="Increment"
          onClick={() => setCount(count + 1)}
        />
        <input
          type="button"
          value="Decrement"
          onClick={() => setCount(count - 1)}
        />
      </div>
    </div>
  );
};

export default CounterFunction;
