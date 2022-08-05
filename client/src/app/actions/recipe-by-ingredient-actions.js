import actionsTypes from "./constants";
import {getAllIngredients} from "../middlewares/recipe-list-middleware";

const ingredientValue = (selected) => ({
    type: actionsTypes.INGREDIENT_VALUE,
    selected
});

export const setRecipeByIngredientAction = (selected) => {
    return dispatch => {
        dispatch(ingredientValue(selected));
    };
};

export const getAllIngredientsAction = () => {
    return dispatch => {
        const getAllIngredientsThunk = getAllIngredients();
        dispatch(getAllIngredientsThunk)
    };
}