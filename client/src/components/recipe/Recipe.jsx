import React, { useState } from "react";
import "./recipe.scss";
import clockIcon from "../../images/timeIcon.png";
import like from "../../images/like.png"
import likeIcon from "../../images/likeIcon.png";

const DEFAULT_IMAGE =
  "https://www.happyeater.com/images/default-food-image.jpg";

function Recipe({
  recipe,
  openModal,
  baseUrl,
  addLikeToRecipe,
  removeLikeToRecipe,
  userValue,
}) {

  const likedRecipe = () => {
    if (recipe.Likes && recipe.Likes.find(like => like.recipeId === recipe.id) && recipe.Likes.find(like => like.userId === userId))
    {return true;
  } else {
    return false;}
  }

  const handleAddLike = async(recipeId) => {
    await addLikeToRecipe(userId, {
      recipeId: recipeId,
    });
  }

  const handleRemoveLike = async(recipeId) => {
    await removeLikeToRecipe(userId, {
      recipeId: recipeId,
    });
  }

  const userId = userValue.id;

  return (
    <div className={"recipe-container"}>
      <img
        onClick={() => openModal(recipe)}
        className="recipe-image"
        alt="recipe"
        src={recipe.image === "" ? DEFAULT_IMAGE : `${baseUrl}${recipe.image}`}
      ></img>
      <p className={"recipe-title"}>{recipe.recipeName}</p>
      <div className={"recipe-bottom-tab"}>
        <div className={"time-container"}>
          <img className="icon" alt="clock" src={clockIcon}></img>
          {`${recipe.cookingTime}`}
        </div>
        <div className={"recipe-buttons-container"}>
          <p>{recipe.numberOfLikes}</p>
             {likedRecipe() ? (
            <img
            key="like"
            className="icon-blue"
            alt="like"
            src={like}
            onClick = {() => {handleRemoveLike(recipe.id)}}
          ></img>
          ) : (
            <img
            key="like"
            className="icon"
            alt="like"
            src={likeIcon}
            onClick = {() => {handleAddLike(recipe.id)}}
          ></img>
          )} 
        </div>
      </div>
    </div>
  );
}

export default Recipe;
