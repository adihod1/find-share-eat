import React, { useState } from "react";
import "./recipe.scss";
import clockIcon from "../../images/timeIcon.png";
import FavoriteIcon from "../../images/saveToProfileIcon.png";
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
  const [ like, SetLike] = useState(0)
  const [ likeClassName, setLikeClassName] = useState("icon-blue")
  const [ unLikeClassName, setUnLikeClassName] = useState("icon")

  const likedRecipe = () => {
    if (recipe.Likes.length > 0 && recipe.Likes.find(like => like.recipeId === recipe.id) && recipe.Likes.find(like => like.userId === userId))
    {return true;
  } else {
    return false;}
  }

  const handleAddLike = async(recipeId) => {
    console.log('add likeee')
    await addLikeToRecipe(userId, {
      recipeId: recipeId,
    });
    // SetLike(like + 1)
    // setUnLikeClassName("icon-blue")
  }

  const handleRemoveLike = async(recipeId) => {
    await removeLikeToRecipe(userId, {
      recipeId: recipeId,
    });
    // SetLike(like + -1)
    // setLikeClassName("icon")
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
          <p>{recipe.numberOfLikes+like}</p>
             {likedRecipe() ? (
            <img
            key="like"
            className="icon-blue"
            alt="like"
            src={likeIcon}
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
