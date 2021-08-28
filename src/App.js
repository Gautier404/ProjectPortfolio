import texture from './Assets/SVGTEXTURE1.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import {CardStack} from './Components/CardStack'
import {Switch} from './Components/Switch'
import {Header} from './Components/Header'
import {IconBar} from './Components/IconBar'
//import the header card


function App() {
  const [status, setStatus] = useState(false);
  
  return (
    <div className="App">
      <div className="AppContent">
        <Header/>
        <Switch status = {status} setStatus = {setStatus}></Switch>
        <CardStack status = {status}></CardStack>
        </div>
    </div>
  );
}

export default App;



