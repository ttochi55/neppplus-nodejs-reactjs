import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("초기값");
  const [style, setStyle] = useState({ color: "white", background: "black" });

  const handleEnter = () => {
    setMessage("안녕하세요");
  };
  const handleLeave = () => {
    setMessage("안녕히 가세요");
  };
  const handleChange = (color) => {
    // const newStyle = {...style};
    // newStyle.color = color;
    // const newStyle = {...style, color};
    // setStyle(newStyle);
    setStyle({ ...style, color });
  };

  return (
    <>
      <div>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleLeave}>퇴장</button>

        <h1 style={style}>{message}</h1>

        <button style={{ color: "red" }} onClick={() => handleChange("red")}>
          빨간색
        </button>

        <button
          style={{ color: "green" }}
          onClick={() => handleChange("green")}
        >
          초록색
        </button>

        <button style={{ color: "blue" }} onClick={() => handleChange("blue")}>
          파랑색
        </button>
      </div>
    </>
  );
};

export default Say;
