import React from 'react';
export function Picture(props){
    return (
        <div className = "PictureContainer">
            <p>{props.description}</p>
            <img src = {props.link} alt = {props.description} className = "Picture"/>
        </div>
    )
}