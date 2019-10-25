import React, { useReducer } from "react";
const init = initCount => {
  return { count: initCount };
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return init(action.payload);
    default:
      throw new Error("check for condition");
  }
};

const Counter = ({ initCount = 0 }) => {
  const [state, dispatch] = useReducer(counterReducer, initCount, init);
  const handleIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET", payload: initCount });
  };
  return (
    <>
      <h1>Counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={handleDecrease}>-</button>&nbsp;&nbsp;&nbsp;
      <button onClick={handleIncrease}>+</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;
