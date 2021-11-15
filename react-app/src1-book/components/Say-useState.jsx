import { useState } from "react";

const Say = () => {
  // message값을 useState로 관리
  // let message = "메시지";

  const [message, setMessage] = useState("초기값");
  const [color, setColor] = useState("black");

  const handleEnter = () => {
    // message = "안녕하세요";
    setMessage("안녕하세요");
  };
  const handleLeave = () => {
    // message = "안녕히 가세요";
    setMessage("안녕히 가세요");
  };

  return (
    <>
      <div>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleLeave}>퇴장</button>

        <h1 style={{ color }}>{message}</h1>

        <button style={{ color: "red" }} onClick={() => setColor("red")}>
          빨간색
        </button>

        <button style={{ color: "green" }} onClick={() => setColor("green")}>
          초록색
        </button>

        <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
          파랑색
        </button>
      </div>
    </>
  );
};

export default Say;
