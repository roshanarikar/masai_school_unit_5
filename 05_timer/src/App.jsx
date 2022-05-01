import logo from './logo.svg';
import './App.css';
import { Timer } from "./components/timer";
import { useState } from "react"

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <Timer startTime={0} endTime={15} />
    </div>
  );
}

export default App;
