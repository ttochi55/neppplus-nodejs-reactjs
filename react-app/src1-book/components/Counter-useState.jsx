import { useState } from "react";

const Counter = () => {
  // const number = useState(0)[0];
  // const setNumber = useState(0)[1];
  // const useState = (default) => {
  //   const state = default;
  //   const setState = () => {};
  //   return [state, setState];
  // };

  const a = 1;
  const [number, setNumber] = useState(a);
  // const [arr, setArr] = useState([1, 2, 3]);

  const handleClick = () => {
    // number = number + 1;
    setNumber(number + 1);
  };

  return (
    <>
      <div style={{ padding: 50 }}>
        <h1>{number}</h1>
        <button onClick={handleClick}>+1</button>
      </div>
    </>
  );
};

export default Counter;
