import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Todo } from './Components/Todo'
import { Home } from './Components/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>TODO</h1>
      <div>
        <a href="/">Home</a>
      </div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='todo/:id' element={<Todo/>}/>
      </Routes>
    </div>
  )
}

export default App