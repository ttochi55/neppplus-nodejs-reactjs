import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const handleNameChange = ({ target }) => {
    setName(target.value);
  };
  const handleNickNameChange = ({ target }) => {
    setNickName(target.value);
  };
  return (
    <>
      <div>
        <input placeholder="이름 입력" onChange={handleNameChange} />
        <input placeholder="닉네임 입력" onChange={handleNickNameChange} />
      </div>
      <h3>이름: {name}</h3>
      <h3>닉네임: {nickName}</h3>
    </>
  );
};

export default Info;
