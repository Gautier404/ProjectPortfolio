import texture from './SVGTEXTURE1.svg';
import './App.css';
import React, { useState } from 'react';
import {cards} from './Cards.js'
import { CSSTransition } from 'react-transition-group';

//import the header card

//Function that creates one block of the website from object
function Card(props) {
  var card = cards[props.cardIndex]
  
  return(
    <CSSTransition
      in={props.expanded[props.cardIndex]}
      timeout={300}
      classNames="card"
    >
    <div className ="card">
        <h1>{card.title}</h1>
        <p>priority: {card.priority}</p>
        <p>mechanical priority: {card.mPriority}</p>
        <p>{props.expanded[props.cardIndex] && card.gitHub}</p>
        <button 
          onClick={() => {
            let newExpanded = [...props.expanded];
            newExpanded[props.cardIndex] = !newExpanded[props.cardIndex];
            props.setter(newExpanded)}
            }>
      </button>
    </div>
    </CSSTransition>
  )
}

//Function that generates a list projects in order of mechanical priority and regular priority depending on some toggled value
function sortCards(priorityType, cards) {
  var list = [0];
  var listLength = 1;
  var j = 0;
    for (let i = 1; i < cards.length; i++) {
      for (let z = 0; z < listLength; z++){
        j = list[z];
        if (cards[i][priorityType] >= cards[j][priorityType]) {
          list.splice(z, 0, i);
          break;
        } else if (z === listLength - 1) {
          list.push(i);
        }
      }
      listLength++;
    }
  return list;
}

//function that will display the list of projects in order based on the state of the button
function DisplayCards(props){
  const [expanded, setExpanded] = useState(new Array(cards.length).fill(false));

  var priorityList = sortCards("priority", cards);
  var mPriorityList = sortCards("mPriority", cards);

  let HTMLCards = []
  if(props.status){
    priorityList.forEach((item)=>{HTMLCards.push(<Card cardIndex = {item} expanded = {expanded} setter = {setExpanded}/>)});
  }else{
    mPriorityList.forEach((item)=>{HTMLCards.push(<Card cardIndex = {item} expanded = {expanded} setter = {setExpanded}/>)});
  }
  return (
    <div> {HTMLCards} </div>
  )
}

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setStatus(!status)}>
        {status ? "just regular Priority": "mechanical"}
      </button>
      <DisplayCards status = {status}></DisplayCards>
      <img src={texture} alt="React Logo" />
    </div>
  );
}

export default App;
