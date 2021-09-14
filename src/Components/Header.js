import React from 'react';
import face from '../Assets/Me.jpg'
import {IconBar} from './IconBar'

//Component for the top of the website with my picture and name
export function Header(props) {
    //Links for the icon bar
    const Links = {
        github: "https://github.com/Gautier404",
        linkedIn: "https://www.linkedin.com/in/andrewjgautier/",
        };
    return (
        <div className = "Header">
            <div className = "HeaderTop">
                <IconBar links = {Links}/>
            </div>
            <div className = "HeaderLeft">
                <img className = "HeaderImage" src ={face} alt = "Drew Gautier"></img>
            </div>
            <div className = "HeaderRight">
                <p className = "HeaderTitle"> 
                    Hello, my name is Drew
                </p>
                <p>
                    and this is a website I created to showcase the projects I work on! Toggle the switch bellow to sort things between what I think is the most related to mechanical engineering or what I think is most cool.
                </p>
            </div>
        </div>
    )
}