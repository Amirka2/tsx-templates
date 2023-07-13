import React from 'react';
import './App.css';

import Game from "./Game";
import Result from "./Result";

function App() {
  return (
    <div className="App">
      <Game question={'xxx'} options={['', '']} correct={0}></Game>
      <Result></Result>
    </div>
  );
}

export default App;
