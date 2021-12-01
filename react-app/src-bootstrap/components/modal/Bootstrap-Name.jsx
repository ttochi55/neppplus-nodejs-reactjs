import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./backdrop";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (text) => {
    setName(text);
    setShowModal(false);
  };

  return (
    <div>
      <h2>이름: {name}</h2>
      <button onClick={() => setShowModal(!showModal)}>이름 바꾸기</button>
      {showModal && (
        <Modal
          onClose={closeModal}
          onSubmit={handleSubmit}
          title="이름 바꾸기"
        />
      )}
      {showModal && <Backdrop onClick={() => setShowModal(false)} />}
    </div>
  );
};

export default Bootstrap;
