import React from 'react';
import Everything from '../Assets/EverythingIcon.js'
import Gear from '../Assets/GearIcon.js'

//Component for the switch that sorts the card stack takes and modifies the status of the card stack
export function Switch(props) {
    return(
            <button className = "Switch" onClick={() => props.setStatus(!props.status)}>
                <div className = "SwitchChild1"><Gear color = {props.status?"#FFFFFF":"#232370"}/></div>
                <div  className = "SwitchChild2"><Everything color = {props.status?"#232370":"#FFFFFF"}/></div>
                <div className = "SwitchLever" style = {props.status?{transform: "translateX(0%)"}:{transform: "translateX(100%)"}}></div>
            </button>
    )
}