import React from "react";
function Ui() {
  return (
    <div className="App">
      <div className="container">
        <h1 id="title">UMC Study Plan</h1>
        <div className="number">
          <input
            type="text"
            id="input-box"
            placeholder="UMC 스터디 계획을 작성해보세요!"
          ></input>
        </div>
        <p id="p1">해야 할 일</p>
        <p id="p2">해낸 일</p>
      </div>
    </div>
  );
}

export default Ui;
