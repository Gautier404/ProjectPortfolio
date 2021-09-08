import React from 'react';

export function Video(props){
    return (
        <div className = "VideoContainer">
            <p>{props.description}</p>
            <iframe src = {props.link}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen = 'true'
                    title='video'
                    className = "Video"
                />
        </div>
    )
}