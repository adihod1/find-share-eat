import cupcakeIcon from "../../../images/cupcakeIcon.png";
import findShareEatLogo from "../../../images/findShareEatLogo.png";
import penguinIcon from "../../../images/penguinIcon.png";
// import Category from "./Category";

import "./RecipeForm.scss";

export default function RecipeForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
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
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
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
            {/* <Category editMode={props.editMode} recipe={props.recipe} /> */}
            {/* <Ingredients editMode={props.editMode} recipe={props.recipe} /> */}
            {/* <Procedure editMode={props.editMode} recipe={props.recipe} /> */}
            {/* <TimePicker editMode={props.editMode} recipe={props.recipe} /> */}
            {/* <PictureUpload />  */}
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="w-full bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-cyan-500"
            >
              {/* {props.buttonLabel} */}
            </button>
          </div>
        </div>
      </form>

      <div className="cupcake-img">
        <img src={cupcakeIcon} alt="cupcake" />
      </div>
    </div>
  );
}
