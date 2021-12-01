import styled from "styled-components";

// Atomic Design Pattern
// https://zoomkoding.github.io/디자인패턴/우아한테크캠프/2020/07/09/atomic-design-pattern.html

const backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: rgba(0, 0, 0, 0.7); */
  background: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
`;

export default backdrop;
