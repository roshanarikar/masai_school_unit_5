import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "./components/Button";
import { Button } from "antd";
import { Button } from "@ant-design/icons"

function App() {
  return (
    <div className="App">
      <Button type='primary'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      </div>
  )
}

export default App
