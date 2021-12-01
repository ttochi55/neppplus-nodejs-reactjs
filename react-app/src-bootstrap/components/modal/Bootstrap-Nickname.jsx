import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./backdrop";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalNickname, setShowModalNickname] = useState(false);
  const [name, setName] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalNickname = () => {
    setShowModalNickname(false);
  };

  const handleSubmit = (text) => {
    setName(text);
    setShowModal(false);
  };

  const hideEveryModal = () => {
    setShowModal(false);
    setShowModalNickname(false);
  };

  return (
    <div>
      <h2>이름: {name}</h2>
      <button onClick={() => setShowModal(!showModal)}>이름 바꾸기</button>
      <button onClick={() => setShowModalNickname(!showModalNickname)}>
        별명 바꾸기
      </button>
      {showModal && (
        <Modal onClose={closeModal} onSubmit={handleSubmit} title="이름 변경" />
      )}
      {showModalNickname && (
        <Modal
          onClose={closeModalNickname}
          onSubmit={handleSubmit}
          title="닉네임 변경"
        />
      )}
      {(showModal || showModalNickname) && (
        <Backdrop onClick={hideEveryModal} />
      )}
    </div>
  );
};

export default Bootstrap;
