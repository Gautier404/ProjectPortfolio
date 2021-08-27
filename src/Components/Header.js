import React from 'react';
import face from '../Assets/Me.jpg'
export function Header(props) {
    return (
        <div className = "Header">
            <div className = "HeaderLeft">
                <img className = "HeaderImage" src ={face}></img>
            </div>
            <div className = "HeaderRight">
                <p className = "HeaderTitle"> 
                    Hello, my name is Drew
                </p>
                <p>
                    and this is a website I created to showcase projects I work on outside of school. Toggle the switch below to sort between more mechanical engineering oriented projects or everything I do.
                </p>
            </div>
        </div>
    )
}