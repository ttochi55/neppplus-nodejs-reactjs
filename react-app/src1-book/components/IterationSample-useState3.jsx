import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [text, setText] = useState("");
  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleClick = (e) => {
    alert(text);
    // names.push(text);

    // 1.
    // const newNames = [...names, text];
    // newNames.push(text);
    // setNames(newNames);

    // 2.
    // setNames((prev) => [...prev, text]);
    setNames((prev) => [...prev, { id: nextId, text }]);
    setText("");
    setNextId(nextId + 1);
  };

  const handleDelete = (id) => {
    const newNames = names.filter((name) => name.id !== id);
    console.log(newNames);
    setNames(newNames);
  };

  return (
    <div>
      <input name="name" value={text} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map(({ id, text }) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {text}입니다
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
