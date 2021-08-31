import './App.css';
import React, { useState} from 'react';
import {CardStack} from './Components/CardStack'
import {Switch} from './Components/Switch'
import {Header} from './Components/Header'

function App() {
  const [status, setStatus] = useState(true);
  
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



