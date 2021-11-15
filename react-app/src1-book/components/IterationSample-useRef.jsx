import { useState, useRef } from "react";

// useState 로 선언되어있는 nextId 를 useRef 로 바꿔보자.
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [text, setText] = useState("");
  // const [nextId, setNextId] = useState(5);
  const nextId = useRef(5);

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleClick = (e) => {
    alert(text);
    setNames((prev) => [...prev, { id: nextId.current, text }]);
    setText("");
    // setNextId(nextId + 1);
    nextId.current++;
    console.log(nextId);
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
