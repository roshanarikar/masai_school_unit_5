import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h3>Mobile Operating System</h3>
    <ul>
    <li>Android</li>
    <li>Blackberry</li>
    <li>iPhone</li>
    <li>Windows Phone</li>
    </ul>
    <br />
    <h3>Mobile Manufacturees</h3>
    <ul>
    <li>Samsung</li>
    <li>HTC</li>
    <li>Micromax</li>
    <li type="circle">Apple</li>
    </ul>
    </div>
  )
}

export default App
