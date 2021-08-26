import texture from './Assets/SVGTEXTURE1.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import {CardStack} from './Components/CardStack'

//import the header card


function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setStatus(!status)}>
        {status ? "just regular Priority": "mechanical"}
      </button>
      <CardStack status = {status}></CardStack>
      <img src={texture} alt="React Logo" />
    </div>
  );
}

export default App;



