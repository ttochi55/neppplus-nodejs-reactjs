import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({ message: "", username: "" });
  const { username, message } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    alert(`${username} : ${message}`);
    setForm({ message: "", username: "" });
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <input
        placeholder="username"
        name="username"
        onChange={handleChange}
        value={username}
      />
      <input
        placeholder="message"
        name="message"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={message}
      />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
