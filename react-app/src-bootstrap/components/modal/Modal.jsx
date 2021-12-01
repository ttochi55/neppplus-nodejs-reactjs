import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Modal = ({ title, onClose, onSubmit }) => {
  // 1. closeModal 함수를 <Modal /> 컴포넌트에 전달
  // 2. Modal 컴포넌트에서 closeModal 함수를 props에서 받아오기
  // 3. BtnClose 누르면 받아온 closeModal 함수 실행
  const [text, setText] = useState("");

  // Scroll Fixed
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // clean up function
    return () => (document.body.style.overflow = "");
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(text);
  };

  return (
    <Container>
      <Header>{title}</Header>
      <Body>
        Modal body text goes here.
        <input onChange={handleChange} />
      </Body>
      <Footer>
        <BtnClose onClick={onClose}>Close</BtnClose>
        <BtnSubmit onClick={handleSubmit}>Submit</BtnSubmit>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
`;
const Body = styled.div`
  padding: 15px;
`;
const Footer = styled.div`
  border-top: 1px solid #ddd;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.button`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  background: #6c757d;
  color: #efefef;
  font-size: 15px;
  cursor: pointer;
`;
const BtnClose = styled(Btn)``;
const BtnSubmit = styled(Btn)`
  background: #0d6efd;
`;

export default Modal;
