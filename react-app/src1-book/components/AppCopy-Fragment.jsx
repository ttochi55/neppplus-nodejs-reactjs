import { Fragment } from "react";
import "./App.css";

function App() {
  // const name = "리액트";
  const name = 0;
  // falsy: 거짓 같은 값
  // 0 "" false undefined null NaN

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 48,
    fontWeight: "bold",
    padding: "16px",
  };

  const classList = ["react", "react2"].join(" ");

  return (
    <>
      <input />
      <br />

      {/* <div
        style={{
          backgroundColor: "black",
          color: "aqua",
          fontSize: 48,
          fontWeight: "bold",
          padding: "16px",
        }}
      >
        {name}
      </div> */}
      <div style={style}>{name}</div>

      {/* <div className="react">{name}</div> */}
      <div className={classList}>{name}</div>

      {name === "hello" ? <h1>Hello World!</h1> : <h2>Hello React!</h2>}
      {name === "hello" && <h1>Hello World!</h1>}
      {name === "hello" ? <h1>Hello World!</h1> : <></>}
      {name || "name값은 falsy 합니다."}

      {/* {showModal && <Modal />} */}
      {/*
        <h1>{name} Hello</h1>
        <h2>Working?</h2>
        */}
    </>
  );
}

export default App;
