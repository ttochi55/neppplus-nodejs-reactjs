import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(0);
  const handleNumber = (n) => {
    setNumber(number + n);
  };
  return (
    <>
      <h2>현재 카운터 값은 {number}입니다.</h2>
      <button onClick={() => handleNumber(10)}>+10</button>
      <button onClick={() => handleNumber(3)}>+10</button>
      <button onClick={() => handleNumber(1)}>+10</button>
      <button onClick={() => handleNumber(-1)}>+10</button>
    </>
  );
};

export default Counter2;
