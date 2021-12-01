import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Bootstrap = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Dropdown Show</button>
      {show && <Dropdown />}
    </div>
  );
};

export default Bootstrap;
