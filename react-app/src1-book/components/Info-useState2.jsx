import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  return (
    <>
      <div>
        <input
          placeholder="이름 입력"
          onChange={({ target }) => setName(target.value)}
        />
        <input
          placeholder="닉네임 입력"
          onChange={({ target }) => setNickName(target.value)}
        />
      </div>
      <h3>이름: {name}</h3>
      <h3>닉네임: {nickName}</h3>
    </>
  );
};

export default Info;
