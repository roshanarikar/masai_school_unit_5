import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const MobileOS = ["Android","Blackberry","iPhone","Windows Phone"]
  const MobileM = ["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
    <h3>Mobile Operating System</h3>
    <ul>
    {MobileOS.map((e)=>{
      return <li>{e}</li>
    })}
    </ul>
    <br />
    <h3>Mobile Manufacturees</h3>
    <ul>
    {MobileM.map((e)=>{
      return <li>{e}</li>
    })}
    </ul>
    </div>
  )
}

export default App
