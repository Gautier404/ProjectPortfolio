import React, { useState, useRef, useEffect } from 'react';
import {cards} from './ProjectInfo.js'
import { CSSTransition } from 'react-transition-group';
import FlipMove from 'react-flip-move';

//function that will display the list of projects in order based on the state of the button
export function CardStack(props){
    const [expanded, setExpanded] = useState(new Array(cards.length).fill(true));
  
    var onetime = true;
    useEffect(()=>{
      if(onetime){
        setExpanded(new Array(cards.length).fill(false))
      }
      onetime = false;
      }, [])
    
    var priorityList = sortCards("priority", cards);
    var mPriorityList = sortCards("mPriority", cards);
  
    let HTMLCards = []
    if(props.status){
      priorityList.forEach((item)=>{ HTMLCards.push(<Card cardIndex = {item} key = {cards[item].title} expanded = {expanded} setter = {setExpanded}/>)});
    }else{
      mPriorityList.forEach((item)=>{ HTMLCards.push(<Card cardIndex = {item} key = {cards[item].title} expanded = {expanded} setter = {setExpanded}/>)});
    }
    return (
      <FlipMove className = "CardStack">
        {
          props.status ? 
          priorityList.map((item)=>{return <div key = {cards[item].title}><Card cardIndex = {item}  expanded = {expanded} setter = {setExpanded}/></div>}) :
          mPriorityList.map((item)=>{return <div key = {cards[item].title}><Card cardIndex = {item}  expanded = {expanded} setter = {setExpanded}/></div>})
        }
      </FlipMove> 
    )
  }

//Function that creates one block of the website from object
function Card(props){
    const card = cards[props.cardIndex]
    const test = useRef(null);
    const [cardHeight, setCardHeight] = useState(test.clientHeight);
    //const originalHeight = el.offsetHeight;
    

    function calcHeight(el) {
      const height = el.offsetHeight;
      setCardHeight(height);
    }
    
    console.log(test)
    return(
      <div style = {{height:cardHeight, transition: "height var(--speed) ease"}}  className ="Card">
      <CSSTransition
        in={props.expanded[props.cardIndex]}
        timeout={0}
        classNames="Card"
        onEnter={calcHeight}
        onExit={calcHeight}
      >
      <div>
          <h1>{card.title}</h1>
          <p>{card.summary}</p>
          {props.expanded[props.cardIndex] && card.content}
          <button 
            onClick={() => {
              let newExpanded = [...props.expanded];
              newExpanded[props.cardIndex] = !newExpanded[props.cardIndex];
              props.setter(newExpanded)
            }}>
        Boop</button>
      </div>
      </CSSTransition>
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