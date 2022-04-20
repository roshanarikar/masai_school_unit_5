import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from "./components/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Count : 0</h2>
      <Button/>
    </div>
  )
}

export default App
