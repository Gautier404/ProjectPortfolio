import texture from './Assets/SVGTEXTURE1.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import {CardStack} from './Components/CardStack'
import {Switch} from './Components/Switch'
//import the header card


function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      <div className="AppContent">
        <Switch status = {status} setStatus = {setStatus}></Switch>
        <CardStack status = {status}></CardStack>
        <img src={texture} alt="React Logo" />
        </div>
    </div>
  );
}

export default App;



