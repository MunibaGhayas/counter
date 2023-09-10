import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1> COUNTER </h1>
      </div>
      <div className="counter">
        <button className="counter-minus" onClick={() => setCount(count - 1)}>
          -
        </button>
        <div className="counter-count">
          <h1>{count}</h1>
        </div>
        <button className="counter-plus" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
