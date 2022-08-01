import cupcakeIcon from "../../../images/cupcakeIcon.png";
import { useCallback, useState, useEffect } from "react";
import findShareEatLogo from "../../../images/findShareEatLogo.png";
import penguinIcon from "../../../images/penguinIcon.png";
import ChooseTime from "./time/ChooseTime";
import Ingredients from "./ingredients/Ingredients";
import Category from "./category/category-connector";
import Instructions from "./instructions/Instructions";

import "./RecipeForm.scss";

export default function RecipeForm({
  addRecipeAction,
  userValue,
  userCategory,
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  // recipe: inputValue, ingredients: [{"h"}]
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
    addRecipeAction(userId, {
      recipe: {
        recipeName: inputTitle,
        description: inputDescription,
        cookingTime: "2:00",
        ingredients: "",
        instructions: "mix all",
        categoryId: userCategory,
      },
      ingredients: ["h"],
    });
    setInputValue("");
  }, [addRecipeAction, inputValue]);
  return (
    <div className="app-container">
      {/* <div className="sideTitle">
        <img className="logo-img" src={findShareEatLogo} alt="logo" />
        <h1 className="font">TIME</h1>
        <h1 className="font">TO</h1>
        <h1 className="font">COOK</h1>
        <img className="penguin-img" src={penguinIcon} alt="logo" />
      </div> */}

      <form className="app-container" onSubmit={handleFormSubmit}>
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
                  // defaultValue={props.editMode ? props.recipe[0].desc : null}
                  // onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
            <Category />
            <Ingredients />
            <Instructions />
            <ChooseTime />
            {/* <PictureUpload />  */}
          </div>
          <div>
            <button type="submit">{/* {props.buttonLabel} */}</button>
          </div>
        </div>
      </form>

      <div className="cupcake-img">
        <img src={cupcakeIcon} alt="cupcake" />
      </div>
    </div>
  );
}
