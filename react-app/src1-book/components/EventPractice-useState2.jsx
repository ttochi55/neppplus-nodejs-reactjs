import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({ message: "", username: "", message2: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    alert(`${form.username} : ${form.message} : ${form.message2}`);
  };

  return (
    <>
      <input placeholder="username" name="username" onChange={handleChange} />
      <input placeholder="message" name="message" onChange={handleChange} />
      <input placeholder="message" name="message2" onChange={handleChange} />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
