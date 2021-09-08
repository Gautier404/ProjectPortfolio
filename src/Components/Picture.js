import React from 'react';

//Little react component that takes a link to an image, its description and its desired height on the page and renders it centered on the page
export function Picture(props){
    return (
        <div className = "PictureContainer">
            <p>{props.description}</p>
            <img src = {props.link} alt = {props.description}  style = {{height: props.height}}className = "Picture"/>
        </div>
    )
}