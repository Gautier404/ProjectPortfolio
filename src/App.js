import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {cards} from './Cards.js'
//import the header card

//Function that creates one block of the website from object
function renderCard(cardIndex) {
  var card = cards[cardIndex]
  return(
    <div>
      <h1>{card.title}</h1>
      <p>priority: {card.priority}</p>
      <p>mechanical priority: {card.mPriority}</p>
    </div>
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
function displayCards(status){
  var priorityList = sortCards("priority", cards);
  var mPriorityList = sortCards("mPriority", cards);
  if(status){ 
    return (priorityList.map(renderCard))
  } else {
    return (mPriorityList.map(renderCard))
  }
}

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setStatus(!status)}>
        {status ? "just regular Priority": "mechanical"}
      </button>
      {displayCards(status)}
    </div>
  );
}

export default App;
