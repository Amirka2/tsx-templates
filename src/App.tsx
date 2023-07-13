import React from 'react';
import './App.css';

import Game from "./Game";
import Result from "./Result";

function App() {
  return (
    <div className="App">
      <Game question={'xxx'} options={['xxx', 'xx']} correct={0}></Game>
      <Result result={1/10}></Result>
    </div>
  );
}

export default App;
