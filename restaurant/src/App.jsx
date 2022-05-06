import { useState } from "react";
import { Form } from "./components/form";
import { Res } from "./components/show";
import "./App.css";

function App() {
  const [rate, setRate] = useState(0);
  const [type, setType] = useState("")
  const [num,setNum] = useState(0)
  const handleButton = (el)=>{
    setRate(el.target.id)
    setNum(0)
  }
  const handlecash=(el)=>{
    setType("true")
    setNum(1)
  }
  const handleCard=(el)=>{
    setType("false")
    setNum(1)
  }
  const handleAll=(el)=>{
    setType("0")
    setNum(1)
  }

  return (
    <div className="App">
      <Form />
      <div>
        <button id="1" onClick={handleButton}>1star</button>
        <button id="2" onClick={handleButton}>2star</button>
        <button id="3" onClick={handleButton}>3star</button>
        <button id="4" onClick={handleButton}>4star</button>
      </div>
      <div>
        <button id="false" onClick={handlecash}>cash only</button>
        <button id="true" onClick={handleCard}>card only</button>
        <button onClick={handleAll}> all</button>
      </div>
      <Res rate={rate} type={type} num={num}/>
      
    </div>
  );
}

export default App;