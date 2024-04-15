import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal"

function App() {
  const [Open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    console.log("모달이 켜짐")
  };

  const closeModal = () => {
    setOpen(false);
    console.log("모달이 꺼짐")
  
  };

  return (
    <div className="App">
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="open" onClick={openModal}>버튼 열기</button>
      
      {Open && <Modal closeModal={closeModal} />}

          </div>
  );
}

<Modal/>



export default App;