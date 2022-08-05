import React from 'react'
import './recipe.scss'
import clockIcon from '../../images/timeIcon.png'
import FavoriteIcon from '../../images/saveToProfileIcon.png'
import likeIcon from '../../images/likeIcon.png'

const DEFAULT_IMAGE = 'https://www.happyeater.com/images/default-food-image.jpg'

function Recipe({ recipe, openModal, baseUrl }) {

    return (
        <div className={"recipe-container"}>
            <img onClick={() => openModal(recipe)} className="recipe-image" alt="recipe" src={recipe.image === "" ? DEFAULT_IMAGE : `${baseUrl}${recipe.image}`}></img>
            <p className={'recipe-title'}>{recipe.recipeName}</p>
            <div className={"recipe-bottom-tab"}>
                <div className={"time-container"}>
                    <img className="icon" alt="clock" src={clockIcon}></img>
                    {recipe.cookingTime}
                </div>
                <div className={'recipe-buttons-container'}>
                    <img className="icon" alt="favorite" src={FavoriteIcon}></img>
                    <img className="icon" alt="like" src={likeIcon}></img>
                </div>
            </div>
        </div>
    )
}

export default Recipe