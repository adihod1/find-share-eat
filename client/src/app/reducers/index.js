import formEntities from "./form-entities-reducer";
import { combineReducers } from "redux";
import login from "./login-reducer";
import spinner from "./spinner-reducer";
import recipeList from "./recipe-list-reducer";
import recipeSort from "./recipe-sort-by-reducer";
import recipeSearch from "./recipe-search-reducer";
import recipeByIngredient from "./recipe-by-ingredient-reducer";
import recipeByCategory from "./recipe-by-category-reducer";

const allReducers = combineReducers({
  login,
  spinner,
  recipeList,
  recipeSort,
  recipeSearch,
  recipeByIngredient,
  recipeByCategory,
  formEntities,
});
export default allReducers;
