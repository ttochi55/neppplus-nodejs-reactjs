import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const DropdownComponent = () => {
  const wrapper = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => setIsShow((prev) => !prev);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapper.current && !wrapper.current.contains(e.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Wrapper ref={wrapper}>
      <Button onClick={handleShow}>Dropdown</Button>
      <List isShow={isShow}>
        <Item>#1111111111</Item>
        <Item>#2</Item>
        <Item>#3</Item>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 100px;
  display: inline-block;
  position: relative;
`;
const Button = styled.button``;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #000;
  border-radius: 4px;
  position: absolute;
  left: -20px;
  top: 30px;
  display: ${({ isShow }) => !isShow && "none"};
`;
const Item = styled.li`
  padding: 5px 10px;
  & + & {
    border-top: 1px solid #efefef;
  }
`;

export default DropdownComponent;
