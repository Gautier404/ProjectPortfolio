import React from 'react';
import everythingIcon from '../Assets/EverythingIcon.svg'
import gearIcon from '../Assets/GearIcon.svg'
export function Switch(props) {
    return(
            <button className = "Switch" onClick={() => props.setStatus(!props.status)}>
                <div className = "SwitchChild1"><img  src = {gearIcon}/></div>
                <div  className = "SwitchChild2"><img src = {everythingIcon}></img></div>
                <div className = "SwitchLever" style = {props.status?{transform: "translateX(0%)"}:{transform: "translateX(98%)"}}></div>
            </button>
    )
}