import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>{counter} times clicked.</h2>
      <div className="btn_container">
        <button onClick={updateCounter}>Click</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}
