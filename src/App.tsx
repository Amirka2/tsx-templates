import './App.css';
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
      <div className="App">
        <div className="counter">
          <h1>Counter</h1>
          <h2>{counter}</h2>
          <div className="buttons">
            <button className="minus" onClick={() => setCounter(counter - 1)}>-</button>
            <button className="plus" onClick={() => setCounter(counter + 1)}>+</button>
          </div>
        </div>
      </div>
  );
}

export default App;
