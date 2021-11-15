import React, { useState } from "react";
import styled from "styled-components";

// 1. useState로 변수 선언
// 2. button 누르면 변수 변경
// 3. 변수에 따라서 Menu 컴포넌트 조절

// Using Javascript: Remove and create new DOM object.
// const Dropdown = () => {
//   const [active, setActive] = useState(false);

//   return (
//     <Wrapper active={active}>
//       <Button onClick={() => setActive(!active)}>dropdown</Button>
//       {active && (
//         <Menu>
//           {data.map(({ id, text }) => (
//             <Item key={id}>{text}</Item>
//           ))}
//         </Menu>
//       )}
//     </Wrapper>
//   );
// };

// Using CSS: Just Visibility DOM object.
const Dropdown = () => {
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
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

  /* Using Javascript */
  /* display: none; */

  /* Using CSS */
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
