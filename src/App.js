import "./App.css";
import Counter from "./Counter";
import { React } from "react";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  function handleClose() {
    setShow(!show);
  }
  return (
    <div className="Page">
      <div className="box-space">Counter-App</div>
      <div className="App">
        {show && <Counter />}
        <div>
          <button onClick={handleClose}>{show ? "Close" : "Open"}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
