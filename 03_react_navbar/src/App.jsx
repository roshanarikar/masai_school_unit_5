import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const middleNav = ["Services","Project","About"]
  return (
    <div className="App">
      <nav id='navbar'>
        <h3>LOGOBAKERY</h3>
        <div id='service'>
          {middleNav.map((e)=>{
            return <p>{e}</p>
          })}
        </div>
        <button>Contact</button>
      </nav>
    </div>
  )
}

export default App
