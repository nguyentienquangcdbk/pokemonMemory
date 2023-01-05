import React, { useState } from "react";
import "./App.css";
import InteractScreen from "./components/InteractScreen";
import MainScreen from "./components/MainScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [status, setStatus] = useState("oneScreen");
  const [quantity, setQuantity] = useState(0);
  const [startAt, setStartAt] = useState(null);

  const start = (num) => {
    setQuantity(num);
    setStartAt(new Date().getTime());
    setStatus("twoScreen");
  };
  const result = (r) => {
    setStartAt(new Date().getTime() - startAt);
    setStatus(r);
  };

  return (
    <div className="App bg-slate-800">
      {status === "oneScreen" && <MainScreen onclick={start} />}
      {status === "twoScreen" && (
        <InteractScreen num={quantity} setStatus={result} />
      )}
      {status === "threeScreen" && (
        <ResultScreen setStatus={(f) => setStatus(f)} startAt={startAt} />
      )}
    </div>
  );
}

export default App;
