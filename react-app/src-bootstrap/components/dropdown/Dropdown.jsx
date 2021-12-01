import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// 1. useState로 변수 선언
// 2. button 누르면 변수 변경
// 3. 변수에 따라서 Menu 컴포넌트 조절

const Dropdown = () => {
  const [active, setActive] = useState(false);
  const dropdownEl = useRef(null);

  // 최초로 한번 렌더링 될때만 이벤트 등록 하기
  useEffect(() => {
    const onClick = (e) => {
      console.log("click");
      document.body.addEventListener("click", (e) => {
        // https://developer.mozilla.org/ko/docs/Web/API/Node/contains
        if (dropdownEl.current && !dropdownEl.current.contains(e.target)) {
          setActive(false);
        }
      });
    };

    // 등록된 이벤트 초기화 하기
    document.body.removeEventListener("click", onClick);

    // 등록된 이벤트 완전하게 초기화 하기
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper ref={dropdownEl}>
      <Button onClick={() => setActive(!active)}>dropdown</Button>
      <Menu active={active}>
        <Item>Item1</Item>
        <Item>Item2</Item>
        <Item>Item3</Item>
        <Item>Item4</Item>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Button = styled.div`
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #198754;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
`;
const Menu = styled.ul`
  position: absolute;
  background-color: #fff;
  width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ddd;
  display: ${({ active }) => !active && "none"};
`;
const Item = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

export default Dropdown;
