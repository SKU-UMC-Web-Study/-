import logo from './logo.svg';
import './App.css';
import { useState } from 'react';





function App() {
  const [title, settitle] = useState(0);

  return (
    <div className="App">
      <div><h1>{title}</h1></div>
      <button onClick={()=>{settitle(title+1)}}>+1</button>
      <button onClick={()=>{settitle(title-1)}}>-1</button>
      
      
    </div>
  );
}

export default App;
