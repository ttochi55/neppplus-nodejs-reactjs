import { useState } from "react";

// useRef 는 useState 와 비슷하다.
// 변화된 값은 유지되지만 렌더링과 상관없는 값을 담을때 useRef 를 사용한다.
// useState: 값이 변하면 렌더링이 일어난다.
// useRef: 값이 변해도 렌더링이 일너나지 않는다.
// useRef: 특정 DOM 을 선택할 때 사용한다.

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => setNumber(e.target.value);
  const onInsert = (e) => {
    // const nextList = list.concat(parseInt(number));
    const nextList = [...list, parseInt(number)];
    // list.push(number);
    setList(nextList);
    setNumber("");
  };

  return (
    <>
      <div>
        <input value={number} onChange={onChange} />
        <button onClick={onInsert}>등록</button>
        <ul>
          {list.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <div>
          <b>평균값:</b> {getAverage(list)}
        </div>
      </div>
    </>
  );
};

export default Average;
