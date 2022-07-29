import React, { useCallback } from 'react'
import './recipe.scss'
import clockIcon from '../../images/timeIcon.png'
import FavoriteIcon from '../../images/saveToProfileIcon.png'
import likeIcon from '../../images/likeIcon.png'

function Recipe({ recipe, openModal }) {

    return (
        <div onClick={() => openModal(recipe)} className={"recipe-container"}>
            <img className="recipe-image" alt="recipe" src={recipe.image}></img>
            <p className={'recipe-title'}>{recipe.title}</p>
            <div className={"recipe-bottom-tab"}>
                <div className={"time-container"}>
                    <img className="icon" alt="clock" src={clockIcon}></img>
                    {recipe.time}
                </div>
                <img className="icon" alt="favorite" src={FavoriteIcon}></img>
                <img className="icon" alt="like" src={likeIcon}></img>
            </div>
        </div>
    )
}

export default Recipe