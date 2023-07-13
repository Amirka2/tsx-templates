import './App.css';
import React, {useState} from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState(false);
  let handleAnswer = function (e: React.MouseEvent<HTMLButtonElement>) {
    setOpen(!open);
    setAnswer((e.target as any).textContent === 'OK')
  }
  return (
      <div className="App">
        <button className="open-modal-btn" onClick={() => setOpen(!open)}>Open</button>
        {open && (
            <div className="overlay">
              <div className="modal">
                <p>some text</p>
                <div className="buttons">
                  <button onClick={handleAnswer}>Decline</button>
                  <button onClick={handleAnswer}>OK</button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}

export default App;