import React from "react";
import "./counter.css";

const Counter = () => {
  const [get, set] = React.useState({
    value: 0,
  });
  function countUp() {
    let i = get.value;
    i++;
    set(() => ({
      value: i,
    }));
  }
  function countDown() {
    let j = get.value;
    j--;
    set(() => ({
      value: j,
    }));
  }
  return (
    <div className="body">
      <header>
        <h1>{get.value}</h1>
      </header>
      <div className="foot">
        <button className="up" onClick={countUp}>
          +
        </button>
        <button className="down" onClick={countDown}>
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
