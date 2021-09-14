import React, { useState } from 'react';
import {cards} from './ProjectInfo.js'
import { CSSTransition } from 'react-transition-group';
import FlipMove from 'react-flip-move';
import {IconBar} from './IconBar'



//Display the stack of cards using the cards object from ProjectInfo.js and the status of the switch
export function CardStack(props){
    const [expanded, setExpanded] = useState(new Array(cards.length).fill(false)); //An array react tracks to see which cards are expanded
    
    var priorityList = sortCards("priority", cards); //create array of cards that are in the order of regular priority
    var mPriorityList = sortCards("mPriority", cards); //create array of cards that are in the order of mechanical priority

    //conditionally render each list depending on which way the switch is
    return (
      //FlipMove used to animate the card switching order
      <FlipMove className = "CardStack"> 
        {
          props.status ? 
          mPriorityList.map((item, index)=>{return <div key = {cards[item].title}><Card cardIndex = {item}  orderIndex = {index} expanded = {expanded} setter = {setExpanded}/></div>}):
          priorityList.map((item, index)=>{return <div key = {cards[item].title}><Card cardIndex = {item}  orderIndex = {index} expanded = {expanded} setter = {setExpanded}/></div>}) 
        }
      </FlipMove> 
    )
  }

//react element for a single card that can expand or contract
function Card(props){
  const [onetime, setOneTime] = useState(true); //Used to give a little extra padding at the bottom of the card the first time it renders
  const card = cards[props.cardIndex] //copy the current card object to a variable
  const [cardHeight, setCardHeight] = useState(null); //used to track the card height for expansion and contraction of the card
  const backgrounds = [ "CBPoka", "CBWaves", "CBBamboo","CBHatch", "CBComic"] //the different styles the cards can have
    
  //Calculates the height of an element and changes height variable to the correct height
  function calcHeight(el) {
    const height = el.offsetHeight;
    setCardHeight(height);
  }
    
    return(
      <div style = {{height:cardHeight, transition: "height var(--speed) ease", paddingBottom: onetime? "1vw": "0vw"}} className = {backgrounds[props.orderIndex % backgrounds.length]}>
      {/* CSS Transition used for the the animation of expansion and contraction of the card */}
      <CSSTransition 
        in={props.expanded[props.cardIndex]}
        timeout={0}
        classNames="Card"
        onEnter={calcHeight}
        onExit={calcHeight}
      >
      <div>
        <div className = "CTop">
          <h1 className = "CTitle">{card.title}</h1>
          <IconBar links = {card.links}></IconBar>
        </div>
        <div className = "CMiddle">
          <img className = "CImage" src = {card.image} alt = "project"/>
          <div>
            <p style = {{fontSize:"2vh"}}>{card.date}</p>
            <p>{card.summary}</p>
          </div>
        </div>
        
          {props.expanded[props.cardIndex] && card.content}
        
          <button 
            className = "CButton"
            onClick={() => {
              let newExpanded = [...props.expanded];
              newExpanded[props.cardIndex] = !newExpanded[props.cardIndex];
              props.setter(newExpanded);
              setOneTime(false);
            }}>
          <p>{props.expanded[props.cardIndex]? "Boop for less :>" : "Boop for more >:D"}</p>
          </button>
      </div>
      </CSSTransition>
      </div>
    )
  }


//Function that generates a list projects in order of mechanical priority or regular priority
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