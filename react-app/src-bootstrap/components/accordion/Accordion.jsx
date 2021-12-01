import React, { useState } from "react";
import styled, { css } from "styled-components";

// const Accordion = (props) => {
const Accordion = ({ data }) => {
  // 현재 어떤 아이템이 선택이 되어 있는지 확인
  const [activeIndex, setActiveIndex] = useState(1);

  const handleIndex = (index) => {
    // 1. 이미 열린 item을 클릭하였는가?
    //    -> 모든 item의 active를 false로.
    // 2. 아니면 activeIndex 값을 index 로.

    // if (activeIndex === index) {
    //   setActiveIndex(-1);
    // } else {
    //   setActiveIndex(index);
    // }

    const nextIndex = activeIndex === index ? -1 : index;
    setActiveIndex(nextIndex);
  };

  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id} active={index === activeIndex}>
          <Header onClick={() => handleIndex(index)}>
            {index} - {title}
          </Header>
          <Body>{content}</Body>
          {/* <Body active={index === activeIndex}>{content}</Body> */}
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  padding: 0;
  list-style: none;
`;
const Item = styled.li`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;

  ${({ active }) =>
    active &&
    css`
      ${Header} {
        background-color: #e7f1ff;
        color: #0c63e4;
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  color: #212529;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  padding: 1rem 1.25rem;
  cursor: pointer;
`;
const Body = styled.div`
  padding: 1rem 1.25rem;
  /* display: ${({ active }) => (active ? "block" : "none")}; */
  display: none;
`;

export default Accordion;
