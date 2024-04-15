import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const [newTodoContent, setNewTodoContent] = useState("");

  const handleInputChange = (e) => {
    setNewTodoContent(e.target.value);
  };

  const addTodo = () => {
    if (newTodoContent.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        content: newTodoContent,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoContent("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 id="title">UMC Study Plan</h1>
        <div className="number">
          <input
            type="text"
            id="input-box"
            placeholder="UMC 스터디 계획을 작성해보세요!"
            value={newTodoContent}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="todos">
          <div className="todo-list">
            <p id="p1">해야 할 일</p>
            {todos
              .filter((todo) => !todo.isDone)
              .map((todo) => (
                <div key={todo.id} className="todo">
                  <span>{todo.content}</span>
                  <div>
                    <button id="finish"  onClick={() => toggleTodo(todo.id)}>완료</button>
                  </div>
                </div>
              ))}
          </div>
          <div className="todo-list">
            <p id="p2">해낸 일</p>
            {todos
              .filter((todo) => todo.isDone)
              .map((todo) => (
                <div key={todo.id} className="todo">
                  <span>{todo.content}</span>
                  <div>
                    <button id="delete"   onClick={() => deleteTodo(todo.id)}>삭제</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;