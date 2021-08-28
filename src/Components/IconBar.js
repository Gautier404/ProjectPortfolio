import React from 'react';
import gitHubLogo from '../Assets/GithubLogo.svg'
import linkedInLogo from '../Assets/LinkedInLogo.svg'


export function IconBar(props) {
    const linkIcons = {
        github: gitHubLogo,
        linkedIn: linkedInLogo,
    }

    const items = [];
    for (const key in props.links) {
        items.push(<a href = {props.links[key]}><img className = "IBItem" src = {linkIcons[key]}></img></a>)
    }
    
    return(
        <div className = "IBContainer">
            {items}
        </div>
    )
}