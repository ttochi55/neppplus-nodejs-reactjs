import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState(["눈사람", "얼음", "눈", "바람"]);
  const [text, setText] = useState("");

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
    setNames((prev) => [...prev, text]);

    setText("");
  };

  return (
    <div>
      <input name="name" value={text} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}입니다</li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
