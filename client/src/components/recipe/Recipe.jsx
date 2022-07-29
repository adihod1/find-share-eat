import React from 'react'
import './recipe.scss'
import clockIcon from '../../images/timeIcon.png'
import FavoriteIcon from '../../images/saveToProfileIcon.png'
import likeIcon from '../../images/likeIcon.png'


function Recipe({ image, description, time }) {
    return (
        <div className={"recipe-container"}>
            <img className="recipe-image" alt="recipe" src={image}></img>
            <p className="recipe-dexcription">{description}</p>
            <div className={"recipe-bottom-tab"}>
                <div className={"time-container"}>
                    <img className="icon" alt="clock" src={clockIcon}></img>
                    {time}
                </div>
                <img className="icon" alt="favorite" src={FavoriteIcon}></img>
                <img className="icon" alt="like" src={likeIcon}></img>
            </div>
        </div>
    )
}

export default Recipe