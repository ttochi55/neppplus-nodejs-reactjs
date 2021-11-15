import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    // alert(username + ":" + message); // es5
    alert(`${username} : ${message}`); // es6
  };

  return (
    <>
      <input
        placeholder="username"
        name="username"
        onChange={handleChangeName}
      />
      <input placeholder="message" name="message" onChange={handleChange} />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
