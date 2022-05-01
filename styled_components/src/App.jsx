import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "./components/Button";

function App() {
  return (
    <div className="App">
     <Button text="primary">Primary</Button>
     <Button text="default">Default Button</Button>
     <Button text="dashed">Dashed Button</Button>
     <br />
     <Button text="text">Text Button</Button>
     <Button text="link">Link Button</Button>
    </div>
  )
}

export default App
