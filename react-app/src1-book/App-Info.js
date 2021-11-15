import Info from "./components/Info";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "보이기" : "숨기기"}
      </button>
      {visible && <Info />}
    </>
  );
};

export default App;
