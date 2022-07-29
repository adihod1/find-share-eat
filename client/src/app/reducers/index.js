import {combineReducers} from "redux";
import login from "./login-reducer";
import spinner from "./spinner-reducer";
import recipeList from "./recipe-list-reducer";

const allReducers = combineReducers({
    login,
    spinner,
    recipeList
});
export default allReducers;