import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  // useEffect: 첫번째 인자로 함수를 받고, 두번쨰 인자로 배열을 받는다.
  // 두번째 인자로 받을 배열 값이 아무것도 없을 경우 최초 한번 만 렌더링 된다.
  useEffect(() => {
    console.log("최초 렌더링 완료");
    // document.body.addEventListener();
    // 클린업 함수: 이 컴포넌트가 제거될때 아래 함수가 실행 된다.
    return () => {
      console.log("컴포넌트가 완전히 제거 되었다.");
      // document.body.removeEventListener();
    };
  }, []);

  // useEffect(() => {
  //   console.log("name 이 변경 되었다.");
  //   return () => {
  //     console.log("name이 변경 되어 다시 렌더링 되기 전");
  //   };
  // }, [name]);

  // useEffect(() => {
  //   console.log("nickName 이 변경 되었다.");
  // }, [nickName]);

  // useEffect(() => {
  //   console.log("둘 중 하나가 변경되었다.");
  // }, [name, nickName]);

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
