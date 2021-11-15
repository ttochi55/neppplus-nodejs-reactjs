import { useState } from "react";

const VendingMachine = () => {
  const [coin, setCoin] = useState(21100);

  const handleClick = (num) => {
    setCoin(coin + num);
  };

  // 디바운스: 이벤트 호출 짧은 시간안에 호출이 계속 될 경우 8 번 호출이 약 3번으로 줄어 드는 효과
  return (
    <>
      <h1>현재 코인: {coin}</h1>
      <button onClick={() => handleClick(100)}>100</button>
      <button onClick={() => handleClick(500)}>500</button>
      <button onClick={() => handleClick(1000)}>1000</button>
      <button onClick={() => handleClick(5000)}>5000</button>
    </>
  );
};

export default VendingMachine;
