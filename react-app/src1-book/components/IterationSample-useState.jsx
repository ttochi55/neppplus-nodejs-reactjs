const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];

  // 배열을 수정해서 새로운 배열은 만들때 map 함수 사용함.
  const newArray = names.map((value, i) => {
    return <li>{`${value}는 ${i}번째 요소입니다.`}</li>;
  });
  console.log(newArray);

  return (
    <ul>
      {names.map((name) => (
        <li>{name}입니다</li>
      ))}
      {newArray}
    </ul>
  );
};

export default IterationSample;
