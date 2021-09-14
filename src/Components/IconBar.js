import React from 'react';
import gitHubLogo from '../Assets/GithubLogo.svg'
import linkedInLogo from '../Assets/LinkedInLogo.svg'
import devpostLogo from '../Assets/DevpostLogo.svg'
import figmaLogo from '../Assets/FigmaLogo.svg'

//React component that will create a little bar of icons that are linked too different sites. takes an object of keys to sites and links
export function IconBar(props) {
    //key of link mapped to the different images for each icon
    const linkIcons = {
        github: gitHubLogo,
        linkedIn: linkedInLogo,
        devpost: devpostLogo,
        figma: figmaLogo,
    }

    //create list of items from the link object
    const items = [];
    for (const key in props.links) {
        items.push(<a className = "IBLink" href = {props.links[key]}><img className = "IBItem" src = {linkIcons[key]} alt = {`${key} logo link`}></img></a>)
    }
    
    //render items
    return(
        <div className = "IBContainer">
            {items}
        </div>
    )
}