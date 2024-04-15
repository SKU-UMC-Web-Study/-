import React from "react";

function Modal({closeModal}) {
  const handleClose = () => {
    closeModal(); };

    return (
      <div className="container">
        <div className="modal">
            <p id="title">안녕하세요</p>
            <p>모달 내용은 어쩌고 저쩌고...</p>
            <button id="close" onClick={handleClose}>닫기</button>
          </div>
        </div>
      
    );
  }

export default Modal;
