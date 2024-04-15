import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Ui from "./components/Ui";

function App() {

  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);
  
  return (
    <Ui/>
  );
}

export default App;
