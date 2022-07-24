import React from 'react'

function Recipe() {
    return (
        <div>
            <img id="recipe-image" alt="recipe"></img>
            <p id="recipe-dexcription"></p>
            <span id="recipe-bottom-tab">
                <img id="time icon" alt="clock"></img>
                <p id="time"></p>
                <img id="favorite-icon" alt="favorite"></img>
                <img id="like-icon" alt="like"></img>
            </span>
        </div>
    )
}

export default Recipe