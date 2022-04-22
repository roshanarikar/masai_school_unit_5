import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <div className="App">
      <div>Count  
        <h1 className="scoreCount">
            {
              count
            }
          </h1>
        </div>
        <button onClick={() =>{
          setCount(count-1)
        }}> Sub 1</button>
      <button onClick={() =>{
          setCount(count+1)
        }}> Add 1</button>
      <button onClick={() =>{
          setCount(count*2)
        }}> Multiply by 2</button>
    </div>
  )
}

export default App
