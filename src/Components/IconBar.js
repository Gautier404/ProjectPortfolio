import React from 'react';
import gitHubLogo from '../Assets/GithubLogo.svg'
import linkedInLogo from '../Assets/LinkedInLogo.svg'
import devpostLogo from '../Assets/DevpostLogo.svg'

export function IconBar(props) {
    const linkIcons = {
        github: gitHubLogo,
        linkedIn: linkedInLogo,
        devpost: devpostLogo,
    }

    const items = [];
    for (const key in props.links) {
        items.push(<a href = {props.links[key]}><img className = "IBItem" src = {linkIcons[key]} alt = {`${key} logo link`}></img></a>)
    }
    
    return(
        <div className = "IBContainer">
            {items}
        </div>
    )
}