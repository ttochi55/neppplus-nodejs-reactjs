import styled from "styled-components";
import { useState } from "react";

const ModalComponent = ({ title, onClose, onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    onClose();
    onSubmit(value);
  };

  return (
    <Container>
      <h1>{title}</h1>
      <TextInput onChange={handleChange} />
      <BtnClose onClick={onClose}>닫기</BtnClose>
      <BtnClose onClick={handleSubmit}>저장</BtnClose>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  min-height: 200px;
  background: #fff;
  border: 1px solid #efefef;
  border-radius: 4px;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TextInput = styled.input``;
const BtnClose = styled.button``;

export default ModalComponent;
