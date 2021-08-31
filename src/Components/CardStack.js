import React, { useState, useRef, useEffect } from 'react';
import {cards} from './ProjectInfo.js'
import { CSSTransition } from 'react-transition-group';
import FlipMove from 'react-flip-move';
import {IconBar} from './IconBar'

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
          mPriorityList.map((item, index)=>{return <div key = {cards[item].title}><Card cardIndex = {item}  orderIndex = {index} expanded = {expanded} setter = {setExpanded}/></div>}):
          priorityList.map((item, index)=>{return <div key = {cards[item].title}><Card cardIndex = {item}  orderIndex = {index} expanded = {expanded} setter = {setExpanded}/></div>}) 
        }
      </FlipMove> 
    )
  }

//Function that creates one block of the website from object
function Card(props){
    const card = cards[props.cardIndex]
    const test = useRef(null);
    const [cardHeight, setCardHeight] = useState(test.clientHeight);
    const backgrounds = [ "CBPoka", "CBWaves", "CBBamboo","CBHatch", "CBComic"]
    //const originalHeight = el.offsetHeight;
    
    function calcHeight(el) {
      const height = el.offsetHeight;
      setCardHeight(height);
    }
    
    console.log(test)
    return(
      <div style = {{height:cardHeight, transition: "height var(--speed) ease"}} className = {backgrounds[props.orderIndex % backgrounds.length]}>
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
          <p>{card.summary}</p>
          {props.expanded[props.cardIndex] && card.content}
          <button 
            className = "CButton"
            onClick={() => {
              let newExpanded = [...props.expanded];
              newExpanded[props.cardIndex] = !newExpanded[props.cardIndex];
              props.setter(newExpanded)
            }}>
          <p>Boop for more >:D</p>
          </button>
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