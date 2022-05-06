import { useState } from 'react';
import './App.css';
import { ManualTimer } from './components/ManualTimer/ManualTimer';
import StopWatch from './components/StopWatch/StopWatch';

function App() {
  const [ show, setShow ] = useState(true);
  return (
    <div className="App">
    <button onClick={ () => {
      setShow(!show);
    } } className="sub-main">
      { show ? "Timer" : "Stopwatch" }
       </button>
      { show ? <div className='stopwatch'> <StopWatch /></div> : <div className='timer'><ManualTimer /></div> }
     
    </div>
  );
}

export default App;