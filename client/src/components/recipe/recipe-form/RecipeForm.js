import cupcakeIcon from "../../../images/cupcakeIcon.png";
import { useCallback, useState, useEffect } from "react";
import ChooseTime from "./time/ChooseTime";
import Ingredients from "./ingredients/Ingredients";
import Category from "./category/category-connector";
import Instructions from "./instructions/Instructions";

import "./RecipeForm.scss";

export default function RecipeForm({
  addUserRecipe,
  userValue,
  userCategory,
  addIngredients,
  userIngredients,
  addInstructions,
  userInstructions,
  userCookingTime,
  addCookTime,
}) {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [fullHour, setFullHour] = useState("00");
  const [inputInstructions, setInputInstructions] = useState("");
  const [fullIngredientDetails, setFullIngredientDetails] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleAddIngredients = useCallback(() => {
    addIngredients(fullIngredientDetails);
  }, [fullIngredientDetails]);

  const handleAddInstructions = useCallback(() => {
    addInstructions(inputInstructions);
  }, [inputInstructions]);

  const handleAddTime = useCallback(() => {
    addCookTime(`${hours}:${minutes}:${seconds}`);
  }, [`${hours}:${minutes}:${seconds}`]);

  const userId = userValue.id;

  const onInputTitleChange = useCallback(
    (e) => {
      setInputTitle(e.target.value);
    },
    [setInputTitle]
  );

  const onInputDescriptionChange = useCallback(
    (e) => {
      setInputDescription(e.target.value);
    },
    [setInputDescription]
  );

  const handleFormSubmit = () => {
    handleAddIngredients();
    handleAddInstructions();
    handleAddTime();
    console.log("add recipe", userInstructions);
    addUserRecipe(userId, {
      recipe: {
        recipeName: inputTitle,
        description: inputDescription,
        cookingTime: `${hours}:${minutes}:${seconds}`,
        instructions: inputInstructions,
        categoryId: userCategory,
      },
      ingredients: fullIngredientDetails,
    });
    setInputValue("");
  };
  console.log("inst", userIngredients);
  return (
    <div>
      <form className="column center" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          {/* <button onClick={printRecipe}>Print Recipe</button> */}
        </div>
        <div>
          <div className="contain">
            <div>
              <h1 className="title">Title</h1>
              <input
                type="text"
                name="title"
                id="title"
                className="your-title"
                placeholder="Write a title for your recipe"
                onChange={onInputTitleChange}
              />
            </div>
            <div>
              <h1 className="title">Description</h1>
              <div className="your-description">
                <textarea
                  id="desc"
                  name="desc"
                  rows={3}
                  className="Description"
                  placeholder="Write a short description"
                  onChange={onInputDescriptionChange}
                />
              </div>
            </div>
            <Category />
            <Ingredients
              handleAddIngredients={setFullIngredientDetails}
              fullIngredientDetails={fullIngredientDetails}
            />
            <Instructions
              handleAddFullInstructions={setInputInstructions}
              fullInstructions={inputInstructions}
            />
            <ChooseTime
              // handleAddTime={handleAddTime}
              handleAddHours={setHours}
              handleAddMinutes={setMinutes}
              handleAddSeconds={setSeconds}
              fullHour={hours}
              fullMinutes={minutes}
              fullSeconds={seconds}
            />
            {/* <PictureUpload />  */}
            <input className="send-recipe" type="submit" value="Submit" />
          </div>
        </div>
      </form>

      <div className="column">
        <h1 className="font">TIME</h1>
        <h1 className="font">TO</h1>
        <h1 className="font">COOK</h1>
        <img className="cupcake-img" src={cupcakeIcon} alt="cupcake" />
      </div>
    </div>
  );
}
