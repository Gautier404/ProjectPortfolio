import React from 'react';

export function Switch(props) {
    var pdding = "#100000";
    if (props.status){
        pdding = "#000000"
    } else {
        pdding = "#000010"
    }

    return(
            <button className = "Switch" onClick={() => props.setStatus(!props.status)}>
                <p className = "SwitchChild1">Show me Mechanical Engineering Oriented Projects</p>
                <p className = "SwitchChild2">Show me Everything!</p>
                <div className = "SwitchLever" style = {props.status?{transform: "translateX(0%)"}:{transform: "translateX(100%)"}}></div>
            </button>
    )
}