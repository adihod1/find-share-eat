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
  // const [addLike, setaddLike] = useState([]);
  // const [removeLike, setremoveLike] = useState([]);

  const likedRecipe = () => {
    if (recipe.Likes.length > 0 && recipe.Likes.find(like => like.recipeId === recipe.id) && recipe.Likes.find(like => like.userId === userId))
    {return true;
  } else {
    console.log('ee',recipe.Likes.find(like => console.log(like.recipeId)))
    console.log("re", recipe.recipeId)
    return false;}
  }

  const handleAddLike = (recipeId) => {
    addLikeToRecipe(userId, {
      recipeId: recipeId,
    });
  }

  const handleRemoveLike = (recipeId) => {
    removeLikeToRecipe(userId, {
      recipeId: recipeId,
    });
  }

  
  const [likes, setLikes] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [likeImage, setLikeImage] = useState(false);

  const userId = userValue.id;

  const handleLikeClick = (recipeId) => {
    console.log("add like");
    if (isClicked) {
    setLikes(likes.pop(recipeId));
      removeLikeToRecipe(userId, {
        recipeId: recipeId,
      });
    } else {
      setLikes(likes.concat(recipeId));
      addLikeToRecipe(userId, {
        recipeId: recipeId,
      });
    }
    setIsClicked(!isClicked);
  };


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
          {/* <img className="icon" alt="favorite" src={FavoriteIcon}></img> */}
          <p>{recipe.numberOfLikes}</p>
             {likedRecipe() ? (
            <img
            key="like"
            className="icon-blue"
            alt="like"
            src={likeIcon}
            // onClick = {handleRemoveLike(recipe.id)}
          ></img>
          ) : (
            <img
            key="like"
            className="icon"
            alt="like"
            src={likeIcon}
            // onClick = {handleAddLike(recipe.id)}
          ></img>
          )} 
          {/* {recipe.Likes.length > 0 ? (
            recipe.Likes.map((like) =>
              like.userId == userId ? (
                <img
                  key="like"
                  className="icon-blue"
                  alt="like"
                  src={likeIcon}
                ></img>
              ) : (
                <img
                  key="unlike"
                  className="icon"
                  alt="like"
                  src={likeIcon}
                ></img>
              )
            )
          ) : (
            <img key="unlike" className="icon" alt="like" src={likeIcon}></img>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
