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
  const [inputValue, setInputValue] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  // recipe: inputValue, ingredients: [{"h"}]

  const handleAddIngredients =
    ((ingredients) => {
      addIngredients(ingredients);
      console.log("blabla");
      // setSelectCategory("");
    },
    [addIngredients]);

  const handleAddInstructions =
    ((instructions) => {
      addInstructions(instructions);
      console.log("blabla");
      // setSelectCategory("");
    },
    [addInstructions]);

  const handleAddTime =
    ((time) => {
      addCookTime(time);
      console.log("blabla");
      // setSelectCategory("");
    },
    [addCookTime]);

  const userId = userValue.id;
  console.log("category", userCategory);

  console.log("userrrr", userValue.id);

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

  const handleFormSubmit = useCallback(() => {
    console.log("add recipe");
    addUserRecipe(userId, {
      recipe: {
        recipeName: inputTitle,
        description: inputDescription,
        cookingTime: userCookingTime,
        instructions: userInstructions,
        categoryId: userCategory,
      },
      ingredients: userIngredients,
    });
    setInputValue("");
  }, [addUserRecipe]);

  const printRecipe = () => {
    window.print();
  };
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
              handleAddIngredients={(event) => handleAddIngredients(event)}
            />
            <Instructions
              handleAddInstructions={(event) => handleAddInstructions(event)}
            />
            <ChooseTime handleAddTime={(event) => handleAddTime(event)} />
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
