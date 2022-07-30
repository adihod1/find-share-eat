import cupcakeIcon from "../../../images/cupcakeIcon.png";
import { useCallback, useState } from "react";
import findShareEatLogo from "../../../images/findShareEatLogo.png";
import penguinIcon from "../../../images/penguinIcon.png";
import ChooseTime from "./ChooseTime";
import Ingredients from "./Ingredients";
import Category from "./Category";
import Procedure from "./Instructions";

import "./RecipeForm.scss";

export default function RecipeForm({ addRecipeAction, getUser }) {
  const [inputValue, setInputValue] = useState("");
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  // };
  // recipe: inputValue, ingredients: [{"h"}]
  const id = "";

  // const handleGetUser = useCallback(async () => {
  //   console.log("user");
  //   await getUser();
  // }, [getuser]);

  const handleFormSubmit = useCallback(async () => {
    await addRecipeAction(id, { recipe: inputValue, ingredients: ["h"] });
    setInputValue("");
  }, [addRecipeAction, inputValue]);

  return (
    <div className="app-container">
      <div className="sideTitle">
        <img className="logo-img" src={findShareEatLogo} alt="logo" />
        <h1 className="font">TIME</h1>
        <h1 className="font">TO</h1>
        <h1 className="font">COOK</h1>
        <img className="penguin-img" src={penguinIcon} alt="logo" />
      </div>
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
                // defaultValue={props.editMode ? props.recipe[0].title : null}
                // onChange={(e) => setTitle(e.target.value)}
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
                  // defaultValue={props.editMode ? props.recipe[0].desc : null}
                  // onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
            <Category />
            <Ingredients />
            <Procedure />
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
