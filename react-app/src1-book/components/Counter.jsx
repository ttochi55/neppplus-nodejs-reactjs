const Counter = () => {
  let number = 0;

  const handleClick = () => {
    number = number + 1;
    console.log(number);
  };

  return (
    <>
      <div style={{ padding: 50 }}>
        <h1>{number}</h1>
        <button onClick={handleClick}>+1</button>
      </div>
    </>
  );
};

export default Counter;
