import styled from "styled-components";

const BackdropComponent = ({ onClose }) => {
  return <Backdrop onClick={onClose} />;
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
`;

export default BackdropComponent;
