import { useState } from 'react'

import {Navbarjs} from "./components/Navbar"
import { Sidebar } from './components/Maindiv/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbarjs />
  
      <Sidebar />
    </div>
  )
}

export default App
