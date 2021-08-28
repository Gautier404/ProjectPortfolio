import React from 'react';
import face from '../Assets/Me.jpg'
import {IconBar} from './IconBar'

export function Header(props) {
    const testLinks = {
        github: "https://github.com/Gautier404/gautier404.github.io",
        linkedIn: "https://www.linkedin.com/feed/",
        };
    return (
        <div className = "Header">
            <IconBar links = {testLinks}/>
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